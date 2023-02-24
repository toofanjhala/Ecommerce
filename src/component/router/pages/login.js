import React , { useState, useRef ,useContext} from 'react';
import Footer from '../../UI/Footer';
import Header from '../../UI/Header';
import classes from './login.module.css';
import { useNavigate } from 'react-router-dom';
import Cardcontext from '../../../store/context';



const LoginForm = () => {

  const ctx=useContext(Cardcontext)

  const navigate=useNavigate()

  const emailref = useRef("")
  const passwordref = useRef("")
 
  const [request, setrequest] = useState(false)

  
  function submithandler(event) {
    setrequest(true)
    event.preventDefault();

    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;

    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDI-gNhpFiP3Qu0SyCNBU_4XU1ghwSXVnw"

    fetch(url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        
        setrequest(false)
        
        if (res.ok) {
         
          return res.json()
        }
        else {
        
          return res.json().then((data) => {

            let error = "Authentication failed"
            throw new Error(error)

          })
        }

      }).then((data) => {
        console.log(data)
        navigate("/home")
        ctx.login(data.idToken)
        localStorage.setItem("token", data.idToken)
        
      })
      .catch((Err) => {
        alert(Err.message)
      })
  }
  return (
<React.Fragment>
    <Header/>
    <section className={classes.auth}>
      <h2>Login</h2>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailref} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordref}
          />
        </div>
        <div className={classes.actions}>
          {request ? <p> Request sending</p> : <button onClick={submithandler}>Login</button>}
         </div>
      </form>
    </section>
    <Footer/>
    </React.Fragment>
  );
};



export default LoginForm;
