import React from 'react';
const Search = (props) =>{
  return (
    <>
    <div className="search-box">
      <input
        type='text'
        placeholder='search...'
        onKeyPress={props.searchEvent}
      />
        {
          props.searchs.length &&
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
            )
        }
      </div>
    </>
  );
};

export default Search;
