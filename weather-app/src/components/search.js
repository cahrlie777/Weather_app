import React from 'react';
import styled from 'styled-components';

const StyledDivSearch = styled.div`

  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;

  input{
  margin: 50px auto;
  border-radius: 4px;
  font-size: 3vw;
  background: #1E213A;
  border: solid 3px #E7E7EB;
  box-sizing: border-box;
  color: #E7E7EB; 
  outline: none;
  }
  img{
    width: 50%;
  }
  h1{
    font-size: 3em;
  }

@media only screen and (min-width: 700px) {
  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;

  input{
  margin: 50px auto;
  border-radius: 4px;
  font-size: 1vw;
  background: #1E213A;
  border: solid 3px #E7E7EB;
  box-sizing: border-box;
  color: #E7E7EB;
  outline: none;
  }
  img{
    width: 50%;
  }
  h1{
    font-size: 3em;
  }
}
`;

const Search = (props) =>{
  return (
    <>
    <StyledDivSearch>
      <input
        type='text'
        placeholder='search...'
        onKeyPress={props.searchEvent}
      />
        {
          props.searchs.length ?
            (
              <ul>
                {props.searchs.map((search, i) =>(
                  <>
                  <div id={i} key={i} onClick={props.selected}>
                    {search.title}
                        <span>
                          <i id={i} key={i} className="material-icons">chevron_right</i>
                        </span>
                  </div>
                  </>
                )
              )
                }
              </ul>
            ) : null
        }
      </StyledDivSearch>
    </>
  );
};

export default Search;
