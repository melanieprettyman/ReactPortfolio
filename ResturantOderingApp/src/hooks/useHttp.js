import { useCallback, useEffect, useState } from 'react';

//Helper function for sending an HTTP req. Takes in url for req and a configuration of what we are sending
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const responseData = await response.json();

  //If response returned !ok, throw the responseData error message
  if (!response.ok) {
    throw new Error(
      responseData.message || 'Something went wrong, failed to send request.'
    );
  }

  return responseData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  //Initially false bc we are not loading
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  //Updating some state based on the request status.
    //Sense were dealing w state, we only want to re-execute this function when url, config change. Wrap in useCallback
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {//if sending the request fails in the first place or because we have no internet connection
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [url, config]
  );

  //FOR CART only
  //Automatically sends our request for us using useEffect, which is called whenever sendRequest changed (url,config) or just the config changes
  useEffect(() => {
    //So we're running this code here if we have a config object and the method is set to 'GET', or if we have no method set, or no config object
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);


  //Return the states for data, isLoading, error, and our sendRequest function
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  };
}