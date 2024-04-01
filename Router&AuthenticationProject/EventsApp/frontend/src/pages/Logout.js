import {redirect} from "react-router-dom";

//Logs a user out and redirects them to home page
export function action(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');

    return redirect('/');
}