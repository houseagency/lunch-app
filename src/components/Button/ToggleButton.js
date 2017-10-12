import React, { Component } from 'react';

const ToggleButton = ( props ) => { 
    return (
        <div className='toggle-container'>
            <label className='switch'>
                {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
                <input 
                    type='checkbox' 
                    onClick={ (e) => { props.onClick(e) }  }
                />
                <span className='slider'></span>
            </label>
            <h4>Filter on nearby restaurants (within 500 m)</h4>
        </div>
    );
}

export default ToggleButton;