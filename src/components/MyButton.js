import React, { Component, Fragment } from 'react'

const MyButton =({text,type,onClick}) =>{
    return(
        <button 
        className={["MyButton",`MyButton_${type}`].join(" ")} 
        onClick={onClick}>
            {text}
        </button>
    )
}

MyButton.defaultProps= {
    type:"defalt"
}
export default MyButton;