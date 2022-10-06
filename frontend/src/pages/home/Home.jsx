import React, { useEffect } from 'react'
import PostCard from '../../components/postCard/PostCard'
import { HomeMemories, HomeForm, HomeStyled } from './HomeStyled'
import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, selectError, selectStatus, fetchPosts, reset  } from "../../features/posts/postsSlice"
import AddPost from '../../components/postCreateForm/PostCreateForm'
import Spinner from '../../components/spinner/Spinner'

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

  const postsToShow = posts.map(post => (
    <PostCard key={post._id} data={post}/>
  ))

  return (
    <HomeStyled>
      <HomeMemories>
        
        {
          postsStatus === "loading" ?
          (
            <Spinner/>
          ) :
          (
            <>
              {postsToShow}
            </>
          )
        }
      </HomeMemories>
      <HomeForm>
        <AddPost />
      </HomeForm>
    </HomeStyled>
  )
}

export default Home