import React, { useState } from 'react';
import styled from 'styled-components';

const Comments = ({ comments }) => {
  const [input, setInput] = useState('');

  const [currentComments, setCurrentComments] = useState(comments);

  const handleChange = (event) => {
    const enteredComment = event.target.value;
    setInput(enteredComment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input) {
      alert('댓글을 입력해 주세요!');
      return;
    }

    const newComment = {
      id: currentComments.length + 1,
      userId: '김영호',
      comment: input,
    };

    setCurrentComments([...currentComments, newComment]);
    setInput('');
  };

  return (
    <CommentsContainer>
      {currentComments.map((comment) => {
        return (
          <Comment key={comment.id}>
            <CommentUserId>{comment.userId}</CommentUserId>
            <span>&nbsp;</span>
            <span>{comment.comment}</span>
          </Comment>
        );
      })}
      <InputForm onSubmit={handleSubmit}>
        <InputContainer>
          <Icon src="/images/smile.png" />
          <Input
            value={input}
            onChange={handleChange}
            placeholder="댓글 달기..."
          />
        </InputContainer>
        <PostingButton>게시</PostingButton>
      </InputForm>
    </CommentsContainer>
  );
};

export default Comments;

const CommentsContainer = styled.div`
  padding: 10px 8px;
`;

const Comment = styled.div`
  width: 446px;
  padding: 2px 0;
  word-break: break-all;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const CommentUserId = styled.span`
  font-weight: bold;
`;

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 49px;
  padding: 4px 12px;
  border-top: 1px solid #efefef;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 350px;
  padding-left: 7px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const PostingButton = styled.button`
  color: #0095f6;
  background-color: white;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;
