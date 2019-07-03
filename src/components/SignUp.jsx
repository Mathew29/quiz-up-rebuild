import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(){
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" id="displayName" placeholder="DISPLAY NAME"/>
        <input type='text' id='email' placeholder='EMAIL'/>
        <input type='password' id='password' placeholder='PASSWORD'/>
        <Link to="/"><button type='submit'>Sign Up</button></Link>
      </form>
    </div>
  );
}

export default SignUp;