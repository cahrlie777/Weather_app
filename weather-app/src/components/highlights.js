import React from 'react';


const Highlights = (props) =>{
  const {data} = props;
  let compasIcon;
  if(data){
    const compas  = data.wind_direction_compass;
    if(compas ==='N'){compasIcon = 'north';}
    else if(compas ==='SW'){compasIcon = 'south_west';}
    else if(compas ==='E'){compasIcon = 'east';}
    else if(compas ==='NE'){compasIcon = 'north_east';}
    else if(compas ==='NW'){compasIcon = 'north_west';}
    else if(compas ==='S'){compasIcon = 'south';}
    else if(compas ==='SE'){compasIcon = 'south_east';}
    else if(compas ==='W'){compasIcon = 'west';}
  }

  return(
    <div className='highlights'>
    {
      data && (
      <>
      <div>
        <h2>Wind Status</h2>
        <h1>{data.wind_speed.toFixed(1)} mph</h1>
        <p><span>
          <i className="material-icons">
            {compasIcon}
          </i>
        </span>{data.wind_direction_compass}</p>
      </div>
      <div>
        <h2>humidity</h2>
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
  </div>
  );
};

export default Highlights;
