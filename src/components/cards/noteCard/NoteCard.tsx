import {useState} from 'react'
import './note.css'
const NoteCard = (props:any) => {
    const [userText,setUserText] = useState('')
    const saveTextHandler=()=>{
        localStorage.setItem(`${props.videoID}`,userText)
        setUserText('')
        props.updateNote(userText)
        props.closeNote(false)
    }
  return (
    <>
        <div className="note-card-cont">
            <input type="text"  placeholder='Enter a Text for video' onChange={(e)=>setUserText(e.target.value)}/>
            <button onClick={saveTextHandler}>Submit</button>
        </div>
    </>
  )
}

export default NoteCard