import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { sendPost } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"
import FileBase from "react-file-base64"


const AddPost = () => {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        title: "",
        message: "",
        creator: "",
        tags: [],
        selectedFile: ""
    })
    const {title, message, creator, tags, selectedFile} = formData

    const users = useSelector(selectAllUsers)

    const onChangeHandler = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        
        dispatch(sendPost({
            ...formData,
            tags: tags.split(" ")
        }))
        
    }

  


  
    const canSendPost = Boolean(title) && Boolean(message) && Boolean(creator) && Boolean(selectedFile)


  return (
    <>
        <form onSubmit={formSubmitHandler}>
            <input type="text" id="title" name="title" placeholder="title" value={title} onChange={onChangeHandler} />
            
            <input type="text" id="message" name="message" placeholder="message" value={message} onChange={onChangeHandler} />

            <input type="text" id="creator" name="creator" placeholder="creator" value={creator} onChange={onChangeHandler} />

            <input type="text" id="tags" name="tags" placeholder="tags" value={tags} onChange={onChangeHandler} />

            <FileBase type="file" multiple={false} onDone={({base64}) => setFormData({...formData, selectedFile: base64})} />
            
            <button disabled={!canSendPost} type="submit">Create Post</button>
        </form>
    </>
  )
}

export default AddPost