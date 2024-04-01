import AuthForm from '../components/AuthForm';
import {json, redirect} from 'react-router-dom'
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

//This action is triggered whenever the AuthForm is submitted
export async function action({request}){
  //Determine if a login or signup request should be sent
  // (cannot use useSearchParams hook, so we will re-create our url and use .searchParams method on it)
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login'; //if it's undefined default to login

  //ensure user cannot change the mode and submit and bad req
  if( mode !== 'login' && mode !== 'signup'){
    throw json({message: 'Unsupported mode.'}, {status:422})
  }


  //get data submitted by the form (user email and password)
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }
  //send request and await response
   const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  //handle response
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }

  //Extract token from response
    const resData = await response.json();
    const token = resData.token;

    //store token in local storage with key of 'token'
    localStorage.setItem('token', token);

    //Create expiration date (set a date to 1 hour in the future and store in local storage)
    const expiration = new Date();
    expiration.setHours(expiration.getHours()+1);
    localStorage.setItem('expiration',expiration.toISOString());

    return redirect('/');//redirect to starting page post login

}

