import './FormCard.css'
import React, { useRef, useState } from 'react'

const FormCard = () => {
    const scriptUrl = process.env.REACT_APP_SCRIPTURL
    const formRef = useRef(null);
    const [show, setshow] = useState(false)
    const [toastmess, setToastmess] = useState("SUCCESS")

    const getToast = (temp)=>{
        setToastmess(temp)
        setshow(true);
        setTimeout(() => {
            setshow(false)
        }, 3000);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
        .then(res => {
            e.target.reset()
            console.log("SUCCESSFULLY SUBMITTED")
            getToast("SUCCESS")
        })
        .catch((err) => {
            console.log(err);
            getToast("FAILED!")
        })
    }

    return (
        <>
            <div className={`toast btn ${show?"show":""}`}>
                <p>{toastmess}</p>
            </div>
            <div className="form">
                <form ref={formRef} onSubmit ={handleSubmit}>
                    <label htmlFor='user_name'>Your Name</label>
                    <input  required type="text" id='user_name' name='user_name' />

                    <label htmlFor='user_phone'>Phone Number</label>
                    <input  required type="number" onWheel={(e) => e.target.blur()} id='user_phone' name='user_phone' />

                    <label htmlFor='user_email'>Email</label>
                    <input required type="email" id='user_email' name='user_email' />

                    <label htmlFor='message'>Message</label>
                    <textarea required placeholder='Type your message..' id='message' name='message' style={{ resize: 'none' }} rows="5"></textarea>

                    <button type="submit" className='btn'>Submit</button>
                </form>
            </div>
            
        </>
    )
}

export default FormCard