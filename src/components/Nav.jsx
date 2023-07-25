import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        {/* actual thing to click */}
        <div>
            <Link to='/'>BitCoin API</Link>
        </div>

        <div id='navRight'>
            <Link to='/price/:symbol'>
                <div className='navLink'>Price</div>
            </Link>
            <Link to='/currencies'>
                <div className='navLink'>Currencies</div>
            </Link>
        </div>
      
    </div>
  )
}

export default Nav
