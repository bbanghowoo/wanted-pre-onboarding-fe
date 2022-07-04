import React, { useState } from 'react';
import styled from 'styled-components';

import Comments from './feed/Comments';

const Feed = ({ feedData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
  };

  return (
    <FeedContainer isLoading={isLoading}>
      <FeedTop>
        <UserInformation>
          <UserImage />
          <UserId>{feedData.userId}</UserId>
        </UserInformation>
        <Icon src="/images/option.png" />
      </FeedTop>
      <FeedImage src={feedData.feedImage} onLoad={handleLoading} />
      <IconContainer>
        <div>
          <Icon src="/images/heart.png" />
          <span>&nbsp;</span>
          <Icon src="/images/messenger.png" />
          <span>&nbsp;</span>
          <Icon src="/images/send.png" />
        </div>
        <Icon src="/images/save-instagram.png" />
      </IconContainer>
      <Like>좋아요 0개</Like>
      <Comments comments={feedData.comments} />
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.article`
  border: 1px solid #efefef;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: white;

  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const FeedTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 12px;
`;

const FeedImage = styled.img`
  height: 587px;
  width: 470px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #efefef;
`;

const UserId = styled.div`
  margin-left: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 0 12px 6px;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Like = styled.div`
  padding-left: 8px;
`;
