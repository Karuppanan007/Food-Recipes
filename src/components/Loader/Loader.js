import React from 'react';
import "./Loader.scss";


const Loader = () => {
  return (
    <div className='loader my-5'>
      <div className='container flex align-center justify-center'>
        {/* <img src = {loader} alt = "" /> */}
        <div className="blob">

        </div>
      </div>

    </div>
  )
}

export default Loader;