import React from 'react'

function Navbar(props) {
    let { darkBtn, darkmode } = props;
    return (
        // <div className={darkmode ? 'navbar darkmode' : 'navbar'}>
        <div className='navbar'>
            <h1>Where in the world?</h1>
            <button onClick={darkBtn}>Dark Mode</button>
        </div>
    )
}

export default Navbar