import React , {useRef,useState} from 'react';
import * as styles from '../styles/main.module.css';
import Loader from "react-loader-spinner";
import { checkEmail, lengthCheck } from './validate';

const Contact = () => {
    const nameRef = useRef(''); 
    const emailRef = useRef(''); 
    const messageRef = useRef(''); 
    const [loader, setLoader] = useState(false);
    const handleSubmit = ()=>{
        let temp1 = lengthCheck(nameRef.current.value,emailRef.current.value,messageRef.current.value);
        if(temp1)
        {
            let temp2=checkEmail(emailRef.current.value);
            if(!temp2)
            {
                alert('Email Invalid!');
                return;
            }
        }
        else{
            return;
        }
        setLoader(true);
     const data={
         service_id:process.env.GATSBY_SERVICE_ID,
         template_id:process.env.GATSBY_TEMPLATE_ID,
         user_id:process.env.GATSBY_USER_ID,
         template_params:{
             from_name:nameRef.current.value,
             from_email:emailRef.current.value,
             message:messageRef.current.value,
         }
     }
     console.log('posting data...');

     fetch('https://api.emailjs.com/api/v1.0/email/send',{
         method:'POST',
         headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
     }).then(res => {
        console.log(loader);
         if(res.status===200)
         {
             alert('Message sent!!');
             document.getElementById('send-name').value='';
             document.getElementById('send-email').value='';
             document.getElementById('send-message').value='';
         }
         else{
             alert('Error Occured!')
         }
     })

    }
    return (
        <section className={styles.contact} id="contact">
        <h2>Contact me</h2>
          <input type="text" placeholder="Your Name" ref={nameRef} id="send-name"/>
          <input type="text" placeholder="Your Email ID" ref={emailRef} id="send-email" />
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message.." ref={messageRef} id="send-message"></textarea>
          <button onClick={handleSubmit}>Send</button>
          <Loader
            type="Puff"
            visible={loader}
            color="#ffa900"
            height={50}
            width={50}
        />
      </section>
    );
}

export default Contact;
