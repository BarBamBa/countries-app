import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Detail(props) {
    let params = useParams();
    let navi = useNavigate();
    let { data, darkmode } = props;
    console.log(params.id);
    let obj = data[params.id].languages;
    let obj2 = Object.values(obj);
    console.log(obj);
    console.log(obj2);
    console.log(obj2.length);




    return (
        // <div className={darkmode ? 'detail-page darkmode' : 'detail-page'}>
        <div className='detail-page'>
            {/* <button onClick={()=>{navi('/')}} className={darkmode ? 'darkmode' : ''}>back</button> */}
            <button onClick={() => { navi('/') }}>back</button>
            <div className='detail-info'>
                <li>
                    <div>
                        <img src={data[params.id].flags.png} />
                    </div>
                    <div className='info'>
                        <h3>{data[params.id].name.common}{data[params.id].translations.kor.common}</h3>
                        <h3>Population: <span>{data[params.id].population}</span></h3>
                        <h3>Population: <span>{data[params.id].region}</span></h3>
                        <h3>Population: <span>{data[params.id].capital}</span></h3>
                        <h3>Population: <span>{data[params.id].subregion}</span></h3>
                        <h3>Population: <span>{data[params.id].cca2}</span></h3>
                        <h3>Languages:
                            {obj2.map((item, i) => {
                                console.log(item);
                                return (
                                    <span key={i}>{item}</span>
                                )
                            })}
                        </h3>
                    </div>


                </li>
            </div>

        </div>
    )
}

export default Detail