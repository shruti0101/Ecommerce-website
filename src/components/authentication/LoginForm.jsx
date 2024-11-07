import React, { useState } from "react";
import './LoginSignup.css'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = (props) => {
    const SetisloggedIn = props.SetisloggedIn
    const navigate= useNavigate();

    const [ShowPassword,SetShowPassword]= useState(false)

    const [formData , SetformData]= useState({
        email:"",
        password:"",
        
    })


  
    console.log(formData)

    function changeHandler(event) {
        SetformData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value
        }));
      }
  

      function SubmitHandler(event){
        event.preventDefault();
         SetisloggedIn(true)
         toast.success("logged in")
         navigate("/");
        
         SetformData({
            email: "",
            password: "",
          })

      }

  return (
    <> 
  

    
      <form onSubmit={SubmitHandler} >
     
            <div className="form-main container ">
              <div className="input-group ">
                <label>
                    <p>Email</p>

                <input
                onChange={changeHandler}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                ></input>
                </label>
              </div>



              <div className="input-group mt-3 ">
                <label>
                    <p>Password</p>

                <input
                  type={ShowPassword ? ("text"):("password")}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Enter password"
                  value={formData.password}
                ></input>
                </label>
              </div>
              <div className='text-center '>
<button type="submit" className="btn btn-secondary px-4">Sign In</button>
</div>
            </div>
            </form>
   
      
   
    </>
  );
};

export default LoginForm;
