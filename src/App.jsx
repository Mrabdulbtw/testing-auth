import React from 'react'
import { provider,auth } from './firebaseConfige'
import { signInWithCustomToken, signInWithPopup, signInWithRedirect } from 'firebase/auth';


function App() {

  return (
    <div className='App'>
         <button onClick={async()=>{
    
          try {
             await signInWithRedirect(auth,provider)

          } catch (error) {
              console.log(error);
          }        

 
       }}>login</button>
    </div>
  )
}

export default App
