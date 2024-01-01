import React from 'react';
import { useId,useState } from 'react';

function PersonalProfile({handleUsernameChange,newUsername}){

    const usernameIsMissing = !newUsername;

    return(
    <>
    <h2>Change Username</h2>
        <form className='profile'>
        <p> <span> * = Required</span></p>
        <label htmlFor="newUsername">New Username*</label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onInput={(e)=>{
                handleUsernameChange(e.target.value);
            }}
          />
          {usernameIsMissing && <span> Username is Required</span>}
          <button type="button" onClick={handleUsernameChange(newUsername)}>
            Save
          </button>
          
        </form>


    </>
    );

}
export default PersonalProfile;