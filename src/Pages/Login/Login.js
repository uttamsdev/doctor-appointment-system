import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(()=>{
    if(user){
      console.log(user);
    }
   },[user])
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }


  
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>

          <div className="divider">OR</div> 
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
