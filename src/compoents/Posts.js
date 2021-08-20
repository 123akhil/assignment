import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextsmsIcon from "@material-ui/icons/Textsms";
import ShareIcon from "@material-ui/icons/Share";
import CloseIcon from "@material-ui/icons/Close";

function Posts({ message, gifpost, index, posts, setPosts }) {
  const deletePost = () => {
    setPosts(posts.filter((_, i) => index !== i));
  };
  return (
    <PostsContainer>
      <PostsHeader>
        <HeaderLeft>
          <PostAvatar />
          <HeaderInfo>
            <p style={{ margin: "0", fontStyle: "bold" }}>Akhil Chaudhary</p>
            <p
              style={{
                margin: "0",
                color: "GrayText",
                fontSize: "11px",
              }}
            >
              8/14/2021 12:32pm
            </p>
          </HeaderInfo>
          <CloseIconWrapper onClick={deletePost}>
            <CloseIcon style={{ fontSize: "medium" }}></CloseIcon>
          </CloseIconWrapper>
        </HeaderLeft>

        <p style={{ margin: "5px 20px", wordWrap: "break-word" }}>{message}</p>
        <img alt="" src={gifpost} />
      </PostsHeader>
      <PostsFooter>
        <Icon>
          <ThumbUpIcon style={{ fontSize: "medium" }} />
        </Icon>
        <Icon>
          <TextsmsIcon style={{ fontSize: "medium" }} />
        </Icon>
        <Icon>
          <ShareIcon style={{ fontSize: "medium" }} />
        </Icon>
      </PostsFooter>
    </PostsContainer>
  );
}

export default Posts;

const PostsContainer = styled.div`
  max-width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  background-color: white;
  padding-left: 6px;
  border-radius: 10px;
  box-shadow: 2px 2px #cec5c5;
`;
const PostsHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-left: 0px;
  margin-top: 10px;
  > img {
    margin: 0 10px;
  }
`;
const HeaderLeft = styled.div`
  margin: 10px 0 0 10px;
  display: flex;
  align-items: center;
`;
const PostAvatar = styled(Avatar)`
  margin-right: 10px;
`;
const HeaderInfo = styled.div``;
const PostsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-right-radius: 1rem;
  background-color: white;
  color: gray;
  padding: 5px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
  :hover {
    background-color: rgb(235, 227, 227);
  }
`;
const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 8px;
  cursor: pointer;
`;
