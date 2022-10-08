import React from 'react'
import { AiFillDeleteStyled, AiFillLikeStyled, BotActions, BotTags, CardBot, CardTop, DeleteButton, LikeButton, MoreInfo, PostCardStyled, TopNameDate } from './PostCardStyled'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux"
import { deletePost } from '../../features/posts/postsSlice'

const PostCard = ({data}) => {
    const dispatch = useDispatch()
    const {title, message, creator, tags, selectedFile, likeCount, createdAt} = data

    const likeHandler = () => {
        console.log(data._id);
    }

    const deleteHandler = () => {
        dispatch(deletePost(data._id))
    }


    const tagsToShow = tags.map(tag => (
        <h5 key={nanoid()}>#{tag}</h5>
    ))
  return (
    <PostCardStyled>
        <CardTop img={selectedFile}>
            <TopNameDate>
                <h3>{creator}</h3>
                <h5>{createdAt}</h5>
            </TopNameDate>
            <MoreInfo>
                <h3>...</h3>
            </MoreInfo>
        </CardTop>
        
        <CardBot>
            <BotTags>
                {tagsToShow.length > 0 ? tagsToShow : "No Tags"}
            </BotTags>
            <h1>{title}</h1>
            <p>{message}</p>
            <BotActions>
                <LikeButton onClick={likeHandler}>
                    <AiFillLikeStyled /> LIKE {likeCount}
                </LikeButton>
                <DeleteButton onClick={deleteHandler}>
                    <AiFillDeleteStyled/> DELETE
                </DeleteButton>
            </BotActions>
        </CardBot>
        
    </PostCardStyled>
  )
}

export default PostCard