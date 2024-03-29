import { db, auth } from './firebase'
import {useState} from 'react'
import { initializeApp } from 'firebase/app'
import { Input, Button } from '@mui/material'
import { addDoc, setDoc, collection } from "firebase/firestore"; 


function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        await addDoc(collection(db, "messages" ), {
            text: msg,
            photoURL,
            uid,
            createdAt:new Date()
          });
        
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '50%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '20px', fontSize: '12px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '100px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage