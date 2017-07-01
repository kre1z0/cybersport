import React, { Component } from 'react';

import './twitter.scss';

class Twitter extends Component {
    componentWillMount() {
        const twitterscript = document.createElement('script');
        twitterscript.src = '//platform.twitter.com/widgets.js';
        twitterscript.async = true;
        twitterscript.id = 'twitter-wjs';
        document.body.appendChild(twitterscript);
    }

    componentWillUnmount() {
        const script = document.getElementById('twitter-wjs');
        document.body.removeChild(script);
    }

    render() {
        return (
            <div className="twitter">
                <a
                    key={'https://twitter.com/Kreiz0/lists/dota'}
                    href="https://twitter.com/Kreiz0/lists/dota"
                    data-link-color="#239DFF"
                    data-theme="dark"
                    data-border-color="#444444"
                    className="twitter-timeline"
                    data-chrome="nofooter transparent noheader"
                />
            </div>
        );
    }
}

export default Twitter;
