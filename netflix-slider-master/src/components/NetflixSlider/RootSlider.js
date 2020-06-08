import React, { Component } from 'react';
import Slider from './'

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

class RootSlider extends Component {
  render() {
    return (
      <div>
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default RootSlider;