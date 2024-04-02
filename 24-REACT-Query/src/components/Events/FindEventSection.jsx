import {useRef, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

//In the BE to preform a search, send a req to '/events?search=(term entered by user)'
//BE searches title, location, and description
export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  const {data, isLoading, isError, error} = useQuery({
    queryKey:['events', {search: searchTerm }],
    queryFn: ({signal})=>fetchEvents({signal, searchTerm}),
    enabled: searchTerm !== undefined
  });

  function handleSubmit(event) {
    event.preventDefault();
    //ensures that query is the value in input-field but only after the form was submitted
    setSearchTerm(searchElement.current.value);
  }

  //Fallback content
  let content = <p>Please enter a search term and to find events.</p>;

  if(isLoading){
    content = <LoadingIndicator />;
  }

  if(isError){
    content = <ErrorBlock
              title="An error occured"
              message={error.info?.message || "Failed to fetch events"}/>
  }

  if(data){
    content = <ul className="event-list">
      {data.map( (event) => (
          <li key ={event.id}>
            <EventItem event={event} />
          </li>)
      )}
    </ul>
  }
  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
