import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import Post from "./Modal/Akhil.jpg";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextsmsIcon from "@material-ui/icons/Textsms";
import ShareIcon from "@material-ui/icons/Share";
function Posts() {
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
        </HeaderLeft>

        <p>
          I like PIZZA when mushrooms, jalapenos, and extra cheese are added
          more.
        </p>
        <img alt="" src={Post} />
      </PostsHeader>
      <PostsFooter>
        <LikeIcon>
          <ThumbUpIcon style={{ fontSize: "medium" }} />
        </LikeIcon>
        <CommentIcon>
          <TextsmsIcon style={{ fontSize: "medium" }} />
        </CommentIcon>
        <SharingIcon>
          <ShareIcon style={{ fontSize: "medium" }} />
        </SharingIcon>
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
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const PostAvatar = styled(Avatar)`
  margin-right: 5px;
`;
const HeaderInfo = styled.div``;
const PostsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-right-radius: 1rem;
  background-color: white;
  color: gray;
  border-top-width: 1px;
`;

const LikeIcon = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
  :hover {
    background-color: rgb(235, 227, 227);
  }
`;
const CommentIcon = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
  :hover {
    background-color: rgb(235, 227, 227);
  }
`;
const SharingIcon = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
  :hover {
    background-color: rgb(235, 227, 227);
  }
`;
