import React from 'react';
import {StyledDivSearch} from './styledComponents';

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
                props.searchs.map((search, i) =>(
                  <>
                  <div id={i} key={i} >
                    {search.title}
                        <span>
                          <i onClick={props.selected} id={i} key={i} className="material-icons">chevron_right</i>
                        </span>
                  </div>
                  </>
                )
              )
                
            ) : null
        }
      </StyledDivSearch>
    </>
  );
};

export default Search;
