import React from 'react';

const Card = (props) => {
  return (
    <div style={cardStyle}>
      <img src={props.image} alt="Card" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <a>
        {props.Button}
      </a>
    </div>
  );
}

const cardStyle = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  padding: '20px',
  width: '300spx'
};

export default Card;
