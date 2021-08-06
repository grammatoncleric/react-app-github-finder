import React, { Fragment } from 'react'
import spinner from './Spinner.js'

const Spinner = () => {
    return (
       <Fragment>
           <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display:'block'}} ></img>
       </Fragment>
    )
}


export default Spinner
