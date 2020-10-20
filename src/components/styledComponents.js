import styled from 'styled-components';

export const StyledDivHighlights = styled.div`

 grid-area: highl;
    margin: 50px auto;
    width: 70%;
    height: 350px;
    text-align: center;

    .highlTitle{
    margin: 0 auto;

    }


   div{
      border-radius: 7px;
      background: #1E213A;
      text-align: center;
      width: 40%;
      height: 40%;
      display: inline-block;
      margin: 10px 10px;
      padding: 10px;
      h1{
      font-size: 2vw;
    }
    progress{
      width: 70%;
      border-radius: 4px;
    }
  }

@media only screen and (min-width: 800px) {
    grid-area: highl;
    margin: 50px auto;
    width: 70%;
    height: 350px;
    text-align: center;

    .highlTitle{
    margin: 0 auto;

    }

   div{
      border-radius: 7px;
      background: #1E213A;
      text-align: center;
      width: 40%;
      height: 40%;
      display: inline-block;
      margin: 10px 10px;
      padding: 10px;
      h1{
      font-size: 1.5vw;
    }
  }
}
`;


export const StyledDivToday = styled.div`

  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;

  button{
  margin: 20px auto;
  background-color: #6E707A;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 7px;
  }
  img{
    margin: 75px 0;
    width: 50%;
  }
  h1
  {
  width: 100%;
  font-size: 10vw;
  margin: 0 auto;
  }
  h3{
  margin: 90px auto;
  font-family: "Tahoma";
  font-size: 5vw;
  color: #3E4158;
  }
  p{
    color: #53536C;
  }
@media only screen and (min-width: 800px) {
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
  color: #3E4158;
  }
  p{
    color: #53536C;
  }
}
`;

export const StyledDivSearch = styled.div`

  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  #clearIcon{
  display: block;
  margin-left: 90%;
  margin-top: 5%;
  margin-bottom: 0;
  }

  input{
  margin: 30px auto;
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

  div{
  font-size: 2em;
  width: 99%;
  margin: 0px 0px;
  padding: 10px;
  text-align: left;
  border-top: solid 1px #E7E7EB;
  border-bottom: solid 1px #E7E7EB;
  span{
    margin-left: 90%;
    cursor:pointer;
    height: 100%;
    }
  }

@media only screen and (min-width: 800px) {
  grid-area: sidebar;
  text-align: center;
  background: #1E213A;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  #clearIcon{
  display: block;
  }

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


  div{
  font-size: 2em;
  width: 99%;
  margin: 0px 0px;
  padding: 10px;
  text-align: left;
  border-top: solid 1px #E7E7EB;
  border-bottom: solid 1px #E7E7EB;
  span{
    margin-left: 90%;
    cursor:pointer;
    height: 100%;
  }
  }
}
`;


export const StyledDivDays = styled.div`

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
  border-radius: 7px;
  }

@media only screen and (min-width: 800px) {

  grid-area: header;
  width: 90%;
  height: 200px;
  text-align: center;
  margin: 10px auto;

  div{
  background: #1E213A;
  text-align: center;
  width: 25%;
  height: 90%;
  display: inline-block;
  margin: 2px 10px;
  padding: 10px;
  border-radius: 7px;

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

@media only screen and (min-width: 1200px) {

  grid-area: header;
  width: 70%;
  height: 200px;
  text-align: center;
  margin: 90px auto;

  div{
  background: #1E213A;
  text-align: center;
  width: 20%;
  height: 90%;
  display: inline-block;
  margin: 2px 10px;
  padding: 10px;
  border-radius: 7px;

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

@media only screen and (min-width: 1550px) {

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
  border-radius: 7px;

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
