import React from 'react'
import { Link } from 'react-router-dom';

function Currencies() {
    // array
    const currencies = [
        { name: "Bitcoin", symbol: "BTC", img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Bitcoin.png' },
        { name: "Litecoin", symbol: "LTC", img: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png'},
        { name: "Ethereum", symbol: "ETH", img: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
        { name: "Ethereum Classic", symbol: "ETC", img:'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png' },
        { name: "Stellar Lumens", symbol: "XLM", img: 'https://cryptologos.cc/logos/stellar-xlm-logo.png' },
        { name: "Dash", symbol: "DASH", img: 'https://www.pngall.com/wp-content/uploads/10/Dash-Crypto-Logo-PNG-Cutout.png' },
        { name: "Ripple", symbol: "XRP", img: 'https://seeklogo.com/images/R/ripple-xrp-logo-E97D62205B-seeklogo.com.png' },
        { name: "Zcash", symbol: "ZEC", img: 'https://cryptologos.cc/logos/zcash-zec-logo.png' },
      ];

  return (
    <div id='currenciesWrap'>
      {/* <p>CURRENCIES COMPONENT</p> */}
      {currencies.map((coin)=>{
        // deconstruct
        const {name, symbol, img} = coin
        // have link for each coin
        return (
          <Link to={`/price/${symbol}`}>
              <div id='cryptoBox'>
                <img src={img} alt="logo" className='logoImg'/>
                <p>{symbol}</p>
                <div className='coinCard'>
                  <h2 className='bitName'>{name}</h2>
                </div>
                
              </div>
            </Link>
            
        )
      })}      
    </div>
  )
}

export default Currencies
