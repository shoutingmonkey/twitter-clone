import { React, useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    if (tweetMessage.length == 0) {
      alert("Give me something to post");
    } else {
      db.collection('posts').add({
        displayName: 'Shreshth Gupta',
        userName: 'shoutingmonkey',
        verified: true,
        text: tweetMessage,
        avatar: "https://pbs.twimg.com/profile_images/1201527185653170176/ug3m8zO0_400x400.jpg",
        image: tweetImage
      });
    }

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1201527185653170176/ug3m8zO0_400x400.jpg" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        {
          (tweetMessage === '') ?
            <Button
              className="button__disable"
              
            />
        }
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton">Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox