import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price () {
  // Our api key from coinapi.io
  const apiKey = "215FD3FB-2F97-4F67-9D59-1DAF5538F133";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState("null");

  //function to fetch coin data
//   just fetch
//   const getCoin = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setCoin(data);
//   };

// using try catch -- more robust
  const getCoin = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    //   if anyting goes wrong, catch error and let me know
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts
// when clicked, rerender to show new data
  useEffect(() => {
    getCoin();
  });

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div id='priceWrap'>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote} : {coin.rate}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1 id='priceWrap'>Loading ...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
};