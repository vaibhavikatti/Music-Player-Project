import React from 'react';
const noImage= 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';
function Image(props){
    return(
        <img src={props.data ? props.data.url : noImage } className='card-img-top' height={400} alt="" />
    )
}

export default Image