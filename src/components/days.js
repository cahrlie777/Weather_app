import React from 'react';
import {StyledDivDays} from './styledComponents';

const img ='https://www.metaweather.com/static/img/weather/png/';

let dates = [];
const d = new Date();
const weekday = ["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"];
const month = [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let nextDay = new Date(d);

const Days = (props) =>{
  const {days} = props;
  return (
    <>
      <StyledDivDays >
      {
        days && (
          days.map((day,i)=>(
      <div id={day.id} key={day.id} >
        {(nextDay.setDate(d.getDate() + 1 + i)) && null}
        {
          i === 0 ? <h1>Tomorrow</h1> :
         <h1>{weekday[nextDay.getDay()]}, {nextDay.getDate()} {month[nextDay.getMonth()]}</h1>
        }
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
