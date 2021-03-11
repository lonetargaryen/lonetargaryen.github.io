import React from 'react';
import './Emoji.css'

const Emoji = props => (
    <div
        className={props.rotate ? "emoji rotate" : "emoji"}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </div>
);

export default Emoji;