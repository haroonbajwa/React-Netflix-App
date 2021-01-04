import React from 'react';

function Card(props) {
    return(
    <>

        <div className="cards">
            <div className="card">
                <img src = {props.imgsrc} alt="My Picture" className="card_img"/>
                <div className="card_info">
                    <span className="tagline"> {props.tagline} </span>
                    <h3 className="card_title">{props.title}</h3>
                    <a href = {props.link} target="_blank">
                        <button className="button">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>

    </>
    );
}

export default Card;