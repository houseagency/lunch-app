import React, { Component } from 'react';

const Button = ( {catBtn, onClick, btnIcon, btnTxt, disabled} ) => { 
    return (
        <button 
            className={ catBtn } 
            style={ { opacity : disabled ? 0.2 : 1 } } 
            onClick={ onClick } 
            disabled={ disabled }>
            <img className='btn-icon' src={ btnIcon } /> 
            <span>{ btnTxt }</span>
        </button>
    );
}

export default Button;
