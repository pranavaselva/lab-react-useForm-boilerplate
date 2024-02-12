import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const [state, setState] = useState(false);
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  const SubmitHandler = (data) => {
    setState(true);
  };

  return (
<div className='container'>
 <div className='container-2' >
      <div className='register'>{state == true ? 'Registration Successful' : ''}</div>
        <form onSubmit={handleSubmit(SubmitHandler)}>
        <div>
        <input type="text"
        placeholder='First Name..'
        {...register('firstName',{
          required: 'please dont keep input feild empty',
        })} />

        <div style={{color:'red'}}>
        {errors.firstName ? errors.firstName.message : null}
      </div>
    </div>
    <div>
      <input type="text"
      placeholder='Last Name..'
      {...register('lastName',{
        required: 'Please dont keep input feild empty',
      })} />
        <div>
         {errors.lastName ? errors.lastNmae.message : null}
       </div>
    </div>

    <div>
      <input 
        type="email"
        placeholder='Email..'
        { ...register('email',{
          required:true,

          validate: (value) => {
            if(value.includes('@')){
              return true;
            }
            return 'invalid email';
          },
        })        
        } />
        <div style={{color: 'red'}}>
          {errors.email ? errors.email.message : null}
        </div>
    </div>
    <div>
      <input 
        type="password" 
        placeholder='Password..'
        { ...register('password',{
          required : true,
          minLength :{
            value:5,
            message : 'Password must be more than 4 characters',
          },
          maxLength:{
            value:20,
            message:'Password cannot be more than 20 characters',
          }
        })
        }/>
        <div style={{color:'red'}}>
      {errors.password ? errors.password.message:null}
    </div>
   </div>
   <input className='register' type="submit" value={'Register'} />
  </form>
 </div>
</div>   

  )
}

export default App
