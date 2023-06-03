import React, { useState } from 'react'

//mutable -> useRef
//imutabel -> useState and onChange event


function Search(props){
    const [artist,setArtist]= useState("")

    const submitHandler =(e) => {
        e.preventDefault();
        props.searchName(artist)
    }
    return(
        <div className="row">
            <div className="col-md-8 md-offset-1">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group mt-2">
                            <div className="input-group">
                                <input type="search" name='artist' id='artist' value={artist}
                                onChange={(e)=> setArtist(e.target.value)} className='form-control' placeholder='Enter Artist Name' required />
                                <button className="btn btn-success" onClick={submitHandler}>
                                    <i className="bi bi-search" ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search