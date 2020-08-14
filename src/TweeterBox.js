import React, { useState } from 'react'
import './TweeterBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase';


function TweeterBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: 'Jay Kim',
            userName: 'my_zhan08',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Darth_Vader.jpg/220px-Darth_Vader.jpg'
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Darth_Vader.jpg/220px-Darth_Vader.jpg" />
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
                </div>
                <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__Imageinput" placeholder="Enter img url" type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    )
}

export default TweeterBox
