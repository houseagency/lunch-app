import React, { Component } from 'react';

const ToggleButton = ( props ) => { 
    return (
        <div className='toggle-container'>
            <label className='switch'>
                <input 
                    type='checkbox' 
                    onClick={ (e) => { props.onClick(e) } }
                    defaultChecked={ props.isLocationBased ? true : false }

                />
                <span className='slider'></span>
            </label>
            <h4>Filter on nearby restaurants (within 500 m)</h4>
        </div>
    );
}

export default ToggleButton;