import React, { useEffect } from 'react'
import PostCard from '../../components/postCard/PostCard'
import { HomeMemories, HomePosts, HomeStyled } from './HomeStyled'
import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, selectError, selectStatus, fetchPosts, reset  } from "../../features/posts/postsSlice"
import AddPost from '../../features/posts/AddPost'

const Home = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const postsError = useSelector(selectError)
  const postsStatus = useSelector(selectStatus)

  useEffect(() => {
    if(postsStatus === "idle") dispatch(fetchPosts())
    if(postsError) {
      alert(postsError)
      dispatch(reset())
    } 
  }, [postsStatus, dispatch, postsError])

console.log(posts);

  const postsToShow = posts.map(post => (
    <PostCard key={post._id} data={post}/>
  ))

  if(postsStatus === "loading") return <h1>LOADING...</h1>
  return (
    <HomeStyled>
      <HomeMemories>
        {postsToShow}
      </HomeMemories>
      <HomePosts>
        <AddPost />
      </HomePosts>
    </HomeStyled>
  )
}

export default Home