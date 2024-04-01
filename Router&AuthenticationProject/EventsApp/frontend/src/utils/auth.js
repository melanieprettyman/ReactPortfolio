//Helper function to return auth token
import {redirect} from "react-router-dom";

//get remaining lifetime of token in ms
export function getTokenDuration(){
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}
export function getAuthToken(){
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    //check if token is expired
    const tokenDuration = getTokenDuration();
    if(tokenDuration< 0 ){
        return 'EXPIRED';
    }
    return token;
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }
  return null; // this is missing in the next lecture video and should be added by you
}