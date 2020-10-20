import React from 'react';
import {StyledDivHighlights} from './styledComponents';

const Highlights = (props) =>{
  const {data} = props;
  const compasIcon={
    'N': 'north',
    'SW': 'south_west',
    'E': 'east',
    'NE': 'north_east',
    'NW': 'north_west',
    'S': 'south',
    'SE': 'south_east',
    'W': 'west'
  };

  return(
    <StyledDivHighlights>
    {
      data && (
      <>
        <h1 id="highlTitle">Today's Hightlights</h1>
      <div>
        <h2>Wind Status</h2>
        <h1>{data.wind_speed.toFixed(1)} mph</h1>
        <p><span>
          <i className="material-icons" >
            {compasIcon[data.wind_direction_compass]}
          </i>
        </span>{data.wind_direction_compass}</p>
      </div>
      <div>
        <h2>Humidity</h2>
        <h1>{data.humidity}%</h1>
        <progress id="file" value={data.humidity} max="100"> {data.humidity}% </progress>
      </div>
      <div>
        <h2>Visibility</h2>
        <h1>{data.visibility.toFixed(1)} miles</h1>
      </div>
      <div>
        <h2>Air Pressure</h2>
        <h1>{data.air_pressure} mb</h1>
      </div>
      </>
      )
    }
  </StyledDivHighlights>
  );
};

export default Highlights;
