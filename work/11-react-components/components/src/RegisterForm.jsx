import React from 'react';
import { useId,useState } from 'react';
import Button from './Button';
import './RegisterForm.css';

function RegisterForm(){

    const [username,setUsername] = useState('');

    const usernameIsMissing = !username;

    const handleFormSubmit = () => {
        console.log('Form submitted!');
      };
    

    const id = useId();
    return(
        <form className='register'>
            <h2>{username && <p>Hello {username}</p>}</h2>
          <form></form>
          <p> <span> * = Required</span></p>
          
          <label>
            Name*
            
            <input
              type="text" id = {'${id}-username'} onInput={(e)=>{
                setUsername(e.target.value);
              }}
            />
            {usernameIsMissing && <span> Username is Required</span>}
          </label>
          <label>
            Email:
            <input
              type="text" id = {'${id}-email'}
            />
          </label>

          <Button type='submit' visual="link" onClick={handleFormSubmit}> submit</Button>
        </form>
    );

}


export default RegisterForm;