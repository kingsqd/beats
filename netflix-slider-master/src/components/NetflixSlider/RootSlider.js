import React, { useState, useEffect } from 'react';
import Slider from './'
import axios from 'axios';

const movies = [
  {
    id: 1,
    image: '/images/ELSummer.jpg',
    imageBg: '/images/iso3.png',
    title: 'Iso'
  },
  {
    id: 2,
    image: '/images/ELSummer.jpg',
    imageBg: '/images/iso3.png',
    title: 'Iso'
  },
  {
    id: 3,
    image: '/images/ELSummer.jpg',
    imageBg: '/images/iso3.png',
    title: 'Iso',
  },
  {
    id: 4,
    image: '/images/ELSummer.jpg',
    imageBg: '/images/iso3.png',
    title: 'Iso'
  },
  {
    id: 5,
    image: '/images/ELSummer.jpg',
    imageBg: '/images/iso3.png',
    title: 'Iso'
  },
  {
    id: 6,
    image: '/images/ELSummer.jpg',
    imageBg: '/images/iso3.png',
    title: 'Iso'
  }
];

const RootSlider = () =>  {
    const [beats, setBeats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        const result = await axios(
          'http://localhost:8000/beats',
        );
        console.log(result.data.Contents);
        setBeats(result.data.Contents);
        console.log(movies)
        setIsLoading(false);
      }
      fetchData();
    }, []); 
    
    return (
      <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Slider>
          {beats.map(movie => (
            <Slider.Item movie={movie} key={movie.Key}>item1</Slider.Item>
          ))}
        </Slider>
      )}
        
      </div>
    );

}

export default RootSlider;
