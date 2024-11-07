import React from 'react'
import LoginForm from './LoginForm'
import './Template.css'
import SignupForm from './SignupForm'

const Template = ({desc1 , desc2 , formType, title ,SetisloggedIn }) => {
  return (
    <section className='main'>
     <div className='container w-75  mt-5  rounded'>
      <div className='row'>
        <div className='text-center mt-4 fs-3 text-capitalize fw-bold text-white'>
          {title}
        </div>
        <p className='text-white mt-2  text-capitalize text-center'>{desc1}</p>
        <p className='text-white text-capitalize text-center'>{desc2}</p>
      </div>

{/* form type */}



{
formType === "signup" ? (<SignupForm SetisloggedIn={SetisloggedIn}></SignupForm>):(<LoginForm SetisloggedIn={SetisloggedIn}></LoginForm>)
}











<div className='my-3'>



<div className='text-center mt-3'>

<div></div>
<p className='text-white'> OR</p>
<div></div>
</div>





<div className='mt-3 pb-5 text-center'>
<button type="button" className="btn btn-warning">Log In With Google</button>
</div>
</div>


     </div>
    
    
    
    
    </section>
  )
}

export default Template