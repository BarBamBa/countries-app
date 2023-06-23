import React from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

function Main(props) {
    const navi = useNavigate();
    let { data, searchHandle, changeName, darkmode, message } = props;
    return (
        // <div className={darkmode ? 'main-page darkmode' : 'main-page'}>
        <div className='main-page'>
            <div className='search-area'>
                <input type="text" placeholder='search' onChange={changeName} ></input>
                <button onClick={searchHandle} >search</button>
            </div>
            <div className='card-list' >
                {data ? data.map((item, i) => {
                    return (
                        <li key={i}>
                            <img src={item.flags.png} onClick={() => { navi(`/detail/${item.cca3}`) }} />
                            <h3>{item.name.common}</h3>
                            <h3>{item.translations.kor.common}</h3>
                            <h3>Population: <span>{item.population.toLocaleString()}</span></h3>
                            <h3>Region: <span>{item.region}</span></h3>
                            <h3>Capital: <span>{item.capital}</span></h3>
                        </li>
                    )
                }) : <h3 className='error'>{message}</h3>}


            </div>

        </div>
    )
}

export default Main