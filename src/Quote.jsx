import React from 'react';

export default function Quote(props) {
    const { author = '', text = '' } = props.quote || {};
    
    return(
        <div id='quote-box'>
            <div className='quote-wrapper'>
                <div id='text'>{text}</div>
                <div id='author'>{author}</div>
            </div>
            <div className="button-wrapper">
                <button id='new-quote' className="button" onClick={props.changeQuoteHandler}>
                    Show me new quote!
                </button>
                <a id='tweet-quote' className="button" 
                    href='https://twitter.com/intent/tweet?text="+encodeURIComponent(tweetText)' 
                    target='_blank' rel='noreferrer'
                >
                    Tweet this quote!
                </a>
            </div>
        </div>
    )
}