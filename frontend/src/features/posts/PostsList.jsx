import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, selectError, selectStatus, fetchPosts,  } from "../features/posts/postsSlice"
import { useEffect } from "react"

const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(selectStatus)
    const postsError = useSelector(selectError)

    useEffect(() => {
      if(postsStatus === "idle") dispatch(fetchPosts())
      if(postsError) alert(postsError)
    }, [postsStatus, dispatch])

    console.log(posts, postsStatus, postsError)
    
    if(postsStatus === "loading") return <h1>Loading</h1>
  return (
    <section>
      <h2>Posts</h2>
      
    </section>
  ) 
}

export default PostsList