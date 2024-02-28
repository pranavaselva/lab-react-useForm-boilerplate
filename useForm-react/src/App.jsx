import  { useState } from "react";
import {useForm} from "react-hook-form";

function App(){

  const[state,setState] = useState(false)
  const { 
    register,
    handleSubmit, 
    formState: {errors}
    } = useForm()

const SubmitForm = (data) => {
setState(true)
}

  return(
    <div className="container">
      <div className="main">
      <div className="register">{state === true ? "Registration Successful" : null }</div>

<form onSubmit={handleSubmit(SubmitForm)}>

<div>
  <input type="text" placeholder="First Name"
  {
    ...register("firstName",{
      required: "Please dont keep input field empty"
    })
  } />

<div style={{color: "red"}}>
  {errors.firstName ? errors.firstName.message : null}
</div>
</div>

<div>
  <input type="text" placeholder="Last Name"
  {
    ...register("lastName",{
      required : "Please dont keep input field empty"
    })
  } />

<div style={{color: "red"}}> 
  {errors.lastName ? errors.lastName.message : null}
</div>
</div>

<div>
  <input type="email" placeholder="Email"
  {
    ...register("email",{
      required: "Email is required",
      validate: (value) =>{
        if(!value.includes("@")){
          return "Email must include @"
        }
        return true
      }
    })
  }  />
  <div style={{color:"red"}}>
    {errors.email ? errors.email.message : null}

  </div>

</div>

<div>
  <input type="text" placeholder="Password"
  {
    ...register("password",{
      required: true,
      minLength : {
        value : 5,
        message : "Password should have atleast 5 characters"
      },
      maxLength : {
        value : 20,
        message : "Password cannot be more than 20 characters"
      }
    })
  } />
  <div>
    {errors.password ? errors.password.message : null}
  </div>
</div>

<input type="submit" value={"Register"} />

</form>


    </div>
    </div>
  )
}

export default App