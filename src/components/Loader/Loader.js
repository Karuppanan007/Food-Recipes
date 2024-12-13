import React from 'react';
import "./Loader.scss";
// import { loader } from "../../utils/images";

const Loader = () => {
  return (
    <div className='loader my-5'>
      <div className='container flex align-center justify-center'>
        {/* <img src = {loader} alt = "" /> */}
        <div class="blob">

        </div>
      </div>

    </div>
  )
}

export default Loader