import Chat from './Chat'
import SignIn from './SignIn'
import { auth } from '../firebase.js'
import { useAuthState } from '@react-firebase-hooks/auth'

function ChatRoom() {
  const [user] = useAuthState(auth)
  return (
    <div>

    /* <SignIn /> */
    <>
      {user ? <Chat /> : <SignIn />}
    </>
    </div>
  );
}

export default ChatRoom