import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FileBase from "react-file-base64"
import { createPost } from '../features/posts/postsSlice'

const CreatePost = () => {

    const dispatch = useDispatch()
    
    const [formData, setPostData] = useState({
        title: "",
        message: "",
        creator: "",
        selectedFile: "",
        tags: []
    })

    const {title, message, creator, tags, selectedFile} = formData

    const onChangeHandler = (e) => {
      setPostData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    const onSubmit = (e) => {
      e.preventDefault()

      const postData = { 
        title,
        message,
        creator,
        selectedFile,
        tags: tags.split(" ")
      }

      console.log(postData)

      dispatch(createPost(postData))
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title} 
          placeholder="Enter your title" 
          onChange={onChangeHandler}
        />
        <input
          type="text" 
          id="message" 
          name="message" 
          value={message} 
          placeholder="Enter your message" 
          onChange={onChangeHandler}
        />
        <input 
          type="text" 
          id="creator" 
          name="creator" 
          value={creator} 
          placeholder="Create your creator" 
          onChange={onChangeHandler}
        />
        <input 
          type="text" 
          id="tags" 
          name="tags" 
          value={tags} 
          placeholder="Create your tags" 
          onChange={onChangeHandler}
        />
        <div>
            <FileBase 
                type="file"
                multiple={false}
                onDone={({base64}) => setPostData({...formData, selectedFile: base64})}
            />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  )
}

export default CreatePost