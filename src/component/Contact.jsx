import React from 'react'; 


const Contact =(props) =>
{
    console.log(props)

    setTimeout(() =>
    {props.history.goBack()},3000)

    return(

<div className="container">
    <p> this is the contact page</p>
</div>

); 


}


export default Contact;