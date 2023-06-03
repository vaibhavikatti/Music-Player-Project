import React,{useState, useEffect} from 'react'
import key from './config/token';
import Artist from './screens/Artists';
import Search from './screens/Search';


const URL = 'https://api.spotify.com';

function Music (props){
    const [artist,setArtist]= useState([])

    const searchArtist = async (artistName) => {
        await fetch(`${URL}/v1/search?q=${artistName}&type=artist`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${key}` // bearer token (auth 2.0)
    }})
    .then(res => res.json())
    .then(out => {
        setArtist(out.artists.items)

    }).catch(err => console.log(err.message));
    }

    useEffect(()=>{
        //statements
        searchArtist('Ilayaraja')
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className='display-3 text-success'>Music</h3>
                </div>
            </div>
           <Search searchName={searchArtist} />

            <div className="row">
                {
                    artist &&artist.map((item,index)=>{
                        return(
                            <Artist key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Music