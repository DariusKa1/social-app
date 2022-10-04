import "./App.css"
import CreatePost from "./components/CreatePost"
import { getPosts, reset } from './features/posts/postsSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [postsTo, setPostsTo] = useState([])
  const {posts, isSuccess, isError, isLoading, message} = useSelector((state) => state.posts)
  
  useEffect(() => {
    
    dispatch(getPosts())
    
    if(isError){
      alert(message)  
    }

    if(isSuccess || posts){
      
      dispatch(reset())
    }

    setPostsTo(posts)
  }, [])


  const [show, setShow] = useState(false)
  const showPosts = () => {
    setPostsTo(posts)
    setShow(!show)
  }
  


  return (
    <>
      {
        (
          isLoading
        )
        ?
        (
          <h1>Loading</h1>
        )
        :
        (
          <div>
          <CreatePost />
          <h1>POSTS</h1>
          <button onClick={showPosts}>showPosts</button>
          <div>
            {
              show &&
              
              <img src={posts[3].selectedFile} alt={posts.title}/>
            }
          </div>
          </div>
        )
      }
    </>
    
  )
}

export default App;
