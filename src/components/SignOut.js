import { auth } from './firebase.js'
import { Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', width: '75%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut