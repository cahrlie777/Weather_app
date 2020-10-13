import React from 'react';
import styled from 'styled-components';

const StyledDivHighlights = styled.div` 

 grid-area: highl;
    margin: 50px auto;
    width: 70%;
    height: 350px;
    text-align: center;

    .highlTitle{
    margin: 0 auto;

    }


   div{
      background: #1E213A;
      text-align: center;
      width: 40%;
      height: 40%;
      display: inline-block;
      margin: 10px 10px;
      padding: 10px;
      h1{
      font-size: 1.5vw;
      font-family:
    }
    progress{
      width: 70%;
      border-radius: 4px;
    }
  }

@media only screen and (min-width: 700px) {
    grid-area: highl;
    margin: 50px auto;
    width: 70%;
    height: 350px;
    text-align: center;

    .highlTitle{
    margin: 0 auto;

    }

   div{
      background: #1E213A;
      text-align: center;
      width: 40%;
      height: 40%;
      display: inline-block;
      margin: 10px 10px;
      padding: 10px;
      h1{
      font-size: 1.5vw;
      font-family:
    }
  }
}
`;

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
