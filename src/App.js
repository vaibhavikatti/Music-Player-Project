import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Music from './component/Music'
import Contact from './component/Contact'
import Track from './component/Track'
import Pnf from './component/Pnf'

function App(props){
  return(
   <BrowserRouter>
   <Menu/>
   <Routes>
<Route path={`/`} element={<Music/>}/> 
<Route path= '/track/:artistId' element={<Track/>}/>
<Route path= '/contact' element={<Contact/>}/>
<Route path= '/*' element={<Pnf/>}/>
   </Routes>
  
   </BrowserRouter>
  )
}

export default App


// here in route we can use backtick n curly brackets or else just inverted commas