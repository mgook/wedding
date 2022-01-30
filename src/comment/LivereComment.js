import React from "react";
import "./LivereComment.css"


const mountLivereCommentPlugin = (d, s) => {
    const e = d.getElementsByTagName(s)[0];

    if (typeof LivereTower === 'function') { return; }

    const j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;

    e.parentNode.insertBefore(j, e);
}

export default class LivereComment extends React.Component {
    componentDidMount() {
        mountLivereCommentPlugin(document, 'script');
    }
    render() {
        return (
            <div>
                <div id="lv-container" data-id="city" data-uid="MTAyMC81NTE2MS8zMTYyOA==" />
            </div>
        );
    }
}