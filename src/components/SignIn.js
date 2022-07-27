import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from './firebase.js'
import {Button} from '@mui/material'

function SignIn() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center' }}>
      <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  )
}

export default SignIn