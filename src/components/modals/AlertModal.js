import React from 'react';
import './style.css';

const AlertModal = ({ title, message, positiveButton, negativeButton }) => (
  <div className='container'>
    <h1>{title}</h1>

    <p>{message}</p>

    <button onClick={positiveButton.onClick} style={{ marginBottom: 10 }}>
      {positiveButton.text}
    </button>

    <button onClick={negativeButton.onClick}>{negativeButton.text}</button>
  </div>
);

export default AlertModal;
