import React,{useState, useEffect} from 'react';
import Search from './components/search';
import Days from './components/days';
import Highlights from './components/highlights';
import Today from './components/today';
import './App.css';

const api = {
  base: 'https://www.metaweather.com/api/location/search/?query=',
  location:'https://www.metaweather.com/api/location/',
  img:'https://www.metaweather.com/static/img/weather/png/',
  current: 'https://www.metaweather.com/api/location/search/?lattlong='
};

function App() {
  const [searchState, setSearchs] = useState({});
  const [dayStates, setdayStates] = useState({});

  useEffect(() =>{
      navigator.geolocation.getCurrentPosition( function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`${api.current}${latitude},${longitude}`)
      fetch(`${api.current}${latitude},${longitude}`,{mode: 'cors'})
      .then(response => response.json()).then(data => {
        let currentLocationWoeid = data[0].woeid;
          fetch(`${api.location}${currentLocationWoeid}`,{mode: 'cors'})
          .then(response => response.json()).then(data => {
            console.log(data);
            setdayStates({...data, searchDisplay: false});
        });
      });
    })},[]);

  const search = (e) =>{
    if(e.key === 'Enter'){
      const string = e.target.value;
      const toSearch = string.charAt(0).toUpperCase() + string.slice(1);
      fetch(`${api.base}${toSearch}`,{mode: 'cors'})
        .then(response => response.json()).then(data => {
          setSearchs(data);
        });
    }
  };

  const select = (e) =>{
    const woeid = searchState[e.target.id].woeid;
    console.log(searchState[e.target.id].woeid);
      fetch(`${api.location}${woeid}`,{mode: 'cors'})
        .then(response => response.json()).then(data => {
          console.log(data);
          setdayStates({...data,searchDisplay: false});
          setSearchs({});
        });
  };

  const displaySearch = () =>{
    setdayStates({...dayStates,searchDisplay: true});
  }

  return (
    <div className="App">
      {
        dayStates.searchDisplay ? (
          <Search  searchEvent={search} searchs={searchState} selected={select}/>):
        <Today  data={dayStates.consolidated_weather ? dayStates.consolidated_weather[0]: null} title={dayStates.title} click={displaySearch}  />
      }
        <Days   days={dayStates.consolidated_weather ? dayStates.consolidated_weather.slice(1): null}  />
        <Highlights  data={dayStates.consolidated_weather ? dayStates.consolidated_weather[0]: null}  />
    </div>
  );
}

export default App;
