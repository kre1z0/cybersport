import React, { Component } from 'react';

class Twitter extends Component {
    componentDidMount() {
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
        const { url } = this.props;
        return (
            <div className="twitter">
                <a
                    data-height="100%"
                    href={url}
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
