import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';


import './Movieinfo.css'
export default function Movieinfo() {
  const [currmov, setCurrmov] = useState();
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    getData()

  })

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setCurrmov(data))
  }
  console.log(currmov.homepage);


  return (
    <Stack>
      <Box position="relative">
        <Box width="90%" height="600px" m="15px auto">
          <img className='movie__image' alt='img' src={`https://image.tmdb.org/t/p/original${currmov ? currmov.backdrop_path : ""}`} />
        </Box>

        <Box className="movie">
          <div style={{ fontWeight: "900", fontSize: "1.5rem" }}>
            {currmov ? currmov.original_title : ""}
          </div>

          <div style={{ fontWeight: "200" }}>
            {currmov ? currmov.tagline : ""}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            {currmov ? currmov.vote_average : ""}
            <StarPurple500SharpIcon />
          </div>

          <div>{currmov ? currmov.runtime + " mins" : ""}</div>
          <div>{currmov ? "Release date: " + currmov.release_date : ""}</div>

          <Box m="20px 0px" display="flex" flexWrap="wrap" justifyContent="center">
            {currmov && currmov.genres ?
              currmov.genres.map(genre => (
                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
              ))
              :
              ""
            }
          </Box>
        </Box>

      </Box>

      <Box width="90%" height="600px" m="0px auto">
        <div className="movie__detailRightBottom">
          <p style={{ fontSize: "2rem", fontWeight: "600", margin: "20px 0px" }}>Synopsis :</p>
          <p style={{ fontSize: "1.2rem", margin: "5px" }}>{currmov ? currmov.overview : ""}</p>
        </div>

        <Box m="50px 0px">
          <div style={{ fontSize: "2rem", fontWeight: "600" }}>Useful Links : </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "25px 0px" }}>
            {
              currmov && currmov.homepage &&
              <Button variant="contained" size="large" style={{ width: "35%", backgroundColor: "rgb(237 194 7)" }}>
                <a href={currmov.homepage} target="_blank" style={{ textDecoration: "none", color: "white" }}>
                  <span>Homepage</span>
                </a>
              </Button>
            }
            {
              currmov && currmov.imdb_id &&
              <Button variant="contained" size="large" color='secondary' style={{ width: "35%" }}>
               <a href={"https://www.imdb.com/title/" + currmov.imdb_id} target="_blank" 
               style={{ textDecoration: "none" ,color:"white"}}><p>IMDb</p></a>
               </Button>
            }
          </div>

        </Box>

      </Box>

    </Stack>
  )
}
