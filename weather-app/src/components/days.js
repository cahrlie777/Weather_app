import React from 'react';
import {StyledDivDays} from './styledComponents';

const img ='https://www.metaweather.com/static/img/weather/png/';

const Days = (props) =>{
  const {days} = props;
  return (
    <>
      <StyledDivDays >
      {
        days && (
          days.map((day,i)=>(
      <div id={day.id} key={day.id} >
          <h1>{day.applicable_date}</h1>
          <img src={`${img}${day.weather_state_abbr}.png`} alt="no load"/>
          <h4>{Math.round(day.min_temp)}°C</h4>
          <h4>{Math.round(day.max_temp)}°C</h4>
      </div>
            )
          )
        )
      }
    </StyledDivDays >
    </>
  );
};

export default Days;
