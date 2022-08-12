import React, { useState, useEffect, useRef} from 'react'
import { db, auth} from './firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'




function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        async function loadData(){
            const messageRef = collection(db, 'messages')
            const q = query(messageRef, limit(10));
            const querySnapshot = await getDocs(q);
            console.log (querySnapshot)
            setMessages (querySnapshot.docs.map((doc)=>doc.data()))
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });
            console.log (q)
        }
        loadData()
    }, [messages])
    console.log (messages)
    return (
        <div>
            <div className="msgs">
                {messages
                .sort((a,b)=>{
                return (a.createdAt) - (b.createdAt)
                }
                )
                .map(({ text, uid, photoURL }) => (
                    <div>
                        <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" /> 
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
<SignOut />
        </div>
    )
}

export default Chat