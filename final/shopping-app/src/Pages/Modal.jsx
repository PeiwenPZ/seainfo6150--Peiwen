import React from 'react';
import { useRef } from 'react';



function Modal({ children, someRef }) {

    return (
        <>
            <button onClick={() => someRef.current.showModal()} visual="button" type='button'>Personal Profile</button>
            <dialog ref={someRef}>
                {children}
                <button onClick={() => someRef.current.close()}>Cancel</button>
            </dialog>
        </>
    );
}

export default Modal;