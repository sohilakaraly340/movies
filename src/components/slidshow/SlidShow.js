import React, { useContext } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Stack } from '@mui/material';
import { Productcontext } from "../../App"
import { Link } from 'react-router-dom';
import "./SlidShow.css"
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';

export default function SlidShow() {
  const { popmovie } = useContext(Productcontext);


  return (
    <Stack >
      <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false} >

        {
          popmovie.map(mov => (
            <Link style={{ textDecoration: "none" }} to={`/movie/${mov.id}`} key={mov.id} >
              <div style={{ maxHeight: "630px" }}>
                <img alt='img' src={`https://image.tmdb.org/t/p/original${mov.backdrop_path}`} />
              </div>

              <div className='text-over-imge' >
                <span style={{ fontWeight: "800", fontSize: "2vw" }}>{mov.original_title}</span>

                <Stack direction="row" gap="20px" marginBottom="20px" alignItems="center">
                  <span>{mov.release_date}</span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {mov.vote_average}
                    <StarPurple500SharpIcon />
                  </div>


                </Stack>

                <Box width="50%" justifyContent="center" textAlign="start" >
                 <span style={{fontSize:"1rem"}}> {mov.overview}</span>
                </Box>

              </div>

            </Link>
          )
          )
        }
      </Carousel>
    </Stack>
  )
}
