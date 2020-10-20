import React from 'react';
import {StyledDivToday} from './styledComponents';

const img ='https://www.metaweather.com/static/img/weather/png/';
const d = new Date();
const weekday = ["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"];
const month = [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const Today = (props) =>{
  const {data, title, click} = props;
  return(
      <StyledDivToday>
        {
          data && (
            <>
            <div>
              <button onClick={click}>Search for places</button>
            </div>
            <div>
                <img src={`${img}${data.weather_state_abbr}.png`} alt="no load"/>
            </div>
            <div>
              <h1>{Math.round(data.the_temp)}°C</h1>
              <h3><strong>{data.weather_state_name}</strong></h3>
              <p>Today - {weekday[d.getDay()]}, {d.getDate()} {month[d.getMonth()]}</p>
              <p><i className="material-icons">location_on</i> {title}</p>
            </div>
            </>
          )
        }
      </StyledDivToday>
  );

};

export default Today;
