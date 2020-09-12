import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({username, imgUrl, caption}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Persistent.Dev"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
        {/* Header: avatar + username*/}
      </div>

      <img
        className="post__image"
        src={imgUrl}
        alt="imgPost"
      />
      {/* image */}

      <h4 className="post__text">
        <strong>{username}: </strong>{caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
