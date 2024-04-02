import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../util/http.js";

export default function EditEvent() {
  const navigate = useNavigate();
    //path is '/event/:id' we can grab the id by using useParams hook on this component
  const params = useParams();

 const { data, isPending, isError, error } = useQuery({
  queryKey: ['events', params.id],
  queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
});

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;

      //cancel ongoing queries for this data
      await queryClient.cancelQueries({ queryKey: ['events', params.id] });

      //if the update fails, roll back to previous data
      const previousEvent = queryClient.getQueryData(['events', params.id]);

      //set new event in the cache
      //key of query you want to manipulate in the cache, new data to store
      queryClient.setQueryData(['events', params.id], newEvent);

      return { previousEvent };
    },
    //on error, roll back
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', params.id], context.previousEvent);
    },
    //weather success or failure -- refetch the data from BE--keep fe and be synced
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id]);
    }
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
