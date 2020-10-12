import React from 'react';

const img ='https://www.metaweather.com/static/img/weather/png/';

const Days = (props) =>{
  const {days} = props;
  return (
    <>
      {
        days && (
          days.map((day,i)=>(
      <div id={day.id} key={day.id} className='Days'>
        <h1>{day.applicable_date}</h1>
        <div>
          <img src={`${img}${day.weather_state_abbr}.png`} alt="no load"/>
        </div>
        <div>
          <h4>{Math.round(day.min_temp)}°C</h4>
          <h4>{Math.round(day.max_temp)}°C</h4>
        </div>
      </div>
            )
          )
        )
      }
    </>
  );
};

export default Days;
