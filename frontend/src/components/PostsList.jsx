import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, selectError, selectStatus, fetchPosts } from "../features/posts/postsSlice"
import { useEffect } from "react"

const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(selectStatus)
    const postsError = useSelector(selectError)

    useEffect(() => {
      if(postsStatus === "idle") dispatch(fetchPosts())
    }, [postsStatus, dispatch])

    console.log(posts, postsStatus, postsError)
    
    
  return (
    <section>
      <h2>Posts</h2>
      
    </section>
  ) 
}

export default PostsList