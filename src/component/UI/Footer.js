import React from 'react'
import classes from "./footer.module.css"
import {ImYoutube2 ,ImSpotify, ImFacebook2} from "react-icons/im";



 const Footer = () => {
  
  return(
  <footer className={classes.footer}>
   
         
             <span  className={classes.title}>The Generics </span>

             <span className={classes.youtube} >
             <a href="https://www.youtube.com/"><ImYoutube2 size="80px" color="c4302b"/></a>
             </span>
             
            <a href="https://open.spotify.com/" style={{marginRight:"30px"}}><ImSpotify size="1em" color="#1db954"/></a>

             <a href="https://www.facebook.com/"><ImFacebook2 size="1em" color="#4267B2"/></a>
          
   
    </footer>
  )
}

export default Footer
