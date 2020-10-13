import React from 'react';
import styled from 'styled-components';

const StyledDivDays = styled.div`

  grid-area: header;
  width: 90%;
  height: 300px;
  text-align: center;
  margin: 90px auto;

  img{
    width: 50%;
    margin: 5px 25%;
 }

  h1{
  font-size: 3vw;
  }

  h4{
  display: inline;
  margin: 0 10px;
  width: 100%;
  font-size: 2.5vw;
  }

  div{
  background: #1E213A;
  text-align: center;
  width: 30%;
  height: 200px;
  display: inline-block;
  margin: 10px 10px;
  padding: 10px;
  }

@media only screen and (min-width: 700px) {

  grid-area: header;
  width: 70%;
  height: 200px;
  text-align: center;
  margin: 90px auto;

  div{
  background: #1E213A;
  text-align: center;
  width: 15%;
  height: 90%;
  display: inline-block;
  margin: 2px 10px;
  padding: 10px;

  img{
    width: 50%;
    margin: 5px 25%;
   }

  h1{
    font-size: 1.2vw;
    margin: 10% auto
  }

  h4{
    display: inline;
    margin: 0 10px;
    width: 100%;
    font-size: 1vw;
    }
  }
  }
`;

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
