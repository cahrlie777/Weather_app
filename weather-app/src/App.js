import React,{useState} from 'react';
import Search from './components/search'
import Days from './components/days'
import './App.css';

const api = {
  base: 'https://www.metaweather.com/api/location/search/?query=',
  location:'https://www.metaweather.com/api/location/',
  img:'https://www.metaweather.com/static/img/weather/png/'
};

function App() {
  const [searchState, setSearchs] = useState({});
  const [dayStates, setdayStates] = useState({});

  const search = (e) =>{
    if(e.key === 'Enter'){
      const string = e.target.value;
      const toSearch = string.charAt(0).toUpperCase() + string.slice(1);
      fetch(`${api.base}${toSearch}`,{mode: 'cors'})
        .then(response => response.json()).then(data => {
          setSearchs(data);
        }
        );
    }
  };

  const select = (e) =>{
    const woeid = searchState[e.target.id].woeid;
    console.log(searchState[e.target.id].woeid);
      fetch(`${api.location}${woeid}`,{mode: 'cors'})
        .then(response => response.json()).then(data => {
          console.log(data);
          setdayStates(data);
        })
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search searchEvent={search} searchs={searchState} selected={select}/>
        <Days days={dayStates.consolidated_weather ? dayStates.consolidated_weather: null}  />
      </header>
    </div>
  );
}

export default App;
