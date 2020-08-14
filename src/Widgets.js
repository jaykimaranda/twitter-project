import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search"


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcons" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1294162469447806978"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="my_zhan08"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={'https://facebook.com/zhan08'}
                    options={{ text: "#react is awesome, I love the twitter clone! ", via: "my_zhan08" }}
                />
            </div>

        </div>
    )
}

export default Widgets
