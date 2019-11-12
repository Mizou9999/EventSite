import React from 'react';
import Carousel from './Carousel';
import Timecounter from './Timecounter';

const Featured = () => {
  return (
    <div syle={{ position: 'relative' }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Mizou Lorenzo</div>
      </div>
      <Timecounter />
    </div>
  );
};

export default Featured;
