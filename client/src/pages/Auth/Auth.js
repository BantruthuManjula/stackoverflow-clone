import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import './Auth.css'
import logo from '../../assets/icon.png';
import Aboutauth from './Aboutauth';
import {signup,login} from "../../actions/auth"

function Auth() {
    const[isSignup,setIsSignUp]=useState(false);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    function handleSwitch()
    {
      setIsSignUp(!isSignup);
      
    };
    const handleSubmit=(e)=>
    {
      e.preventDefault();
      if(!email&&!password)
      {
        alert("enter email and password");
      }
      if(isSignup)
      {
        if(!name)
        {
          alert("enter the name to continue")
        }
        dispatch(signup({name,email,password},navigate))
        
      }else{
        dispatch(login({email,password},navigate))
      }
      
       };
  return (
    <section className='auth-section'>
      {isSignup && <Aboutauth/>}
        <div className='auth-container-2'>
          
            {!isSignup && <img src={logo} alt=" stackOverflow" className='login-logo'/>}
            <form onSubmit={handleSubmit}>
              {
              isSignup && (
              
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
              </label>)
              }
              <label htmlFor='email'>
                <h4>Email</h4>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                 </label>
                 <label htmlFor='password'>
                  <div style={{display:"flex",justifyContent:'space-between'}}>
                <h4>Password</h4>
              { !isSignup &&
               <p style={{color:'#007ac6',fontSize:'13px'}}>Forgot Password?</p>}
                </div>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {isSignup && <p style={{color:"#666763",fontSize:"13px"}}>passwords  must contain atleast eight<br/> characters, including at least 1 letter and 1 <br/>number.</p>}
                 </label>
                 {
                  isSignup && (
                    <label htmlFor='check'>
                      <input type='checkbox' id='check'/>
                      <p style={{fontSize:'13px'}}> Opt-in to receive occasional,<br/>product updates,user research inviatation,<br/> company annocements,and digests.</p>
                    
                    </label>
                  )
                  
                 }
                 <button type='submit' className='auth-btn'>{isSignup ?"Sign Up":"Log In"}</button>
                 {
                  isSignup && (
                    <p style={{color:"#666763", fontSize:"13px"}}>
                      By clicking " Sign Up",you agree to our <span style={{color:"#007ac6"}}>terms of<br/> service </span>,<span style={{color:"#007ac6"}}> privacy policy </span>and <span style={{color:"#007ac6"}}>cookie policy.</span></p>
                  )
                 }
                </form>
                <p>
                   { isSignup?"Already  have an account!" :"Don't have an account?"}
                <button type='submit' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?"Log In":"Sign-Up"}</button>
                </p>



        </div>

    </section>
       
  )
}

export default Auth
