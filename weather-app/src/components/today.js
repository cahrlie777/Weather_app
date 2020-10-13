import React from 'react';
import styled from 'styled-components';

const StyledDivToday = styled.div`

  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;

  button{
  margin: 50px auto;
  background-color: #6E707A;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  }
  img{
    margin: 75px 0;
    width: 50%;
  }
  h1
  {
  width: 100%;
  font-size: 5vw;
  margin: 0 auto;
  }
  h3{
  margin: 90px auto;
  font-family: "Tahoma";
  font-size: 3vw;
  }

@media only screen and (min-width: 700px) {
  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;

  button{
  margin: 50px auto;
  background-color: #6E707A;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  }
  img{
    margin: 75px 0;
    width: 50%;
  }
  h1{
  width: 100%;
  font-size: 5vw;
  margin: 0 auto;
  }
  h3{
  margin: 90px auto;
  font-family: "Tahoma";
  font-size: 3vw;
  }
}
`;

const img ='https://www.metaweather.com/static/img/weather/png/';

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
              <p>Today-{data.applicable_date}</p>
              <p>{title}</p>
            </div>
            </>
          )
        }
      </StyledDivToday>
  );

};

export default Today;
