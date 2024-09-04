import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from 'react';

const Post = forwardRef(({name,description,message,photoUrl},ref) => {
  return (
    <div className="post" ref={ref}>
        <div className="post_header">
            <Avatar src={photoUrl} >{name && name[0].toLowerCase()}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareIcon} title="Share" color="gray"/>
            <InputOption Icon={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
});

export default Post