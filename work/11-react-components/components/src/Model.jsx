// Modal.jsx
import React from 'react';
import { useRef } from 'react';
import Button from './Button';


function Model({ children, someRef }) {

    return (
        <>
            <button onClick={() => someRef.current.showModal()} visual="button" type='button'>Open Model</button>
            <dialog ref={someRef}>
                {children}
                <button onClick={() => someRef.current.close()}>Close</button>
            </dialog>
        </>
    );
}

export default Model;
