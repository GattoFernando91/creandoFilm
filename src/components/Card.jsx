import React from 'react';

const Card = ({ title, content, imageUrl }) => {

return (
    <>
        <div className="card">
            <img src={imageUrl} alt="Imagen de la tarjeta" />
            <div className="cardContent">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    </>
    );
}

export default Card;