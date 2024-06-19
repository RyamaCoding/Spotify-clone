import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets'

const DisplayAlbum = () => {

    const {id} = useParams()
    const albumData = albumsData[id];
    console.log(albumData)

  return (
    <>
    <NavBar/>
    <div></div>
    </>
  )
}

export default DisplayAlbum
