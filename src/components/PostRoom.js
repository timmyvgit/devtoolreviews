import Post from './Post'
import SignIn from './SignIn'
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function PostRoom() {
  const [user] = useAuthState(auth)
  return (
    <>
    <div>
    <br />
    <h2>Under Construction</h2>
    </div>
      {/* {user ? <Post /> : <SignIn />} */}
    </>
  );
}

export default PostRoom;