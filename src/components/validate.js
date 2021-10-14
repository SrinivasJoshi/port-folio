export const lengthCheck = (name,email,message)=>{
    if(name.length===0)
    {
        alert('enter your name');
        return false;
    }
    if(email.length===0)
    {
        alert('enter your email');
        return false;
    }
    if(message.length===0)
    {
        alert('enter your message');
        return false;
    }
    return true;
}
export const checkEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}