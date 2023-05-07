import { Box, Stack, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import MovCard from '../MovCard/MovCard'

export default function MovieList() {
  const type = useParams();
  
  const [listmov, setlistmov]=useState([])

  const fetchd=() => {
    fetch(`https://api.themoviedb.org/3/movie/${type.type ? type.type === "top-rated"? "top_rated" :type.type :"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setlistmov(data.results))
  }

  useEffect(()=>{
    fetchd()
  })
  useEffect(()=>{
    fetchd()
  },[type.type])



  return (
    <Stack>
      <Box sx={{ margin: "3vw" }}>
        <Typography fontSize="3.5vw" fontWeight="200">{type.type ? type.type : "popular"}</Typography>

        <Box margin="0 auto" width="90%" >
        {listmov.map(mov =>  <MovCard key={mov.id} mov={mov}/>)}
        </Box>
        
      
      </Box>
    </Stack>
  )
}
