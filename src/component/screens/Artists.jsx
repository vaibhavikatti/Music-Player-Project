import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from './Image';

function Artist(props){
      const { id, name, genres, followers,images }= props;
        return(
        <div className="col-md-4 col-lg-4 col-sm-4 mt-3">
            <div className="card">
                <Image data={images? images[0]:false }/>
                <div className="card-body">
                    <h5 className="text-center text-success">{name}</h5>
                </div>
                <div className="card-footer">
                   <NavLink to={`/track/${id}`}className={"btn btn-success"} >Track</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Artist