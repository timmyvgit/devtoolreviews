import Chat from './Chat'
import SignIn from './SignIn'
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatRoom() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default ChatRoom;