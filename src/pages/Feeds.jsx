import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Feed from '../components/feeds/Feed';

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/feeds.json')
      .then((response) => response.json())
      .then((response) => {
        setFeeds(response.data);
      });
  }, []);

  return (
    <FeedsContainer>
      {feeds.map((feed) => {
        return <Feed key={feed.id} feedData={feed} />;
      })}
    </FeedsContainer>
  );
};

export default Feeds;

const FeedsContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  background-color: #fafafa;
`;
