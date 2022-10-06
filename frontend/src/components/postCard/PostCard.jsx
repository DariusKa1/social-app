import React from 'react'
import { BotActions, BotTags, CardBot, CardTop, DeleteButton, LikeButton, MoreInfo, PostCardStyled, TopNameDate } from './PostCardStyled'
import { nanoid } from '@reduxjs/toolkit'

const PostCard = ({data}) => {
    const {title, message, creator, tags, selectedFile, likeCount, createdAt} = data

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
                <LikeButton>
                    SPAN LIKE {likeCount}
                </LikeButton>
                <DeleteButton>
                    SPAN DELETE
                </DeleteButton>
            </BotActions>
        </CardBot>
        
    </PostCardStyled>
  )
}

export default PostCard