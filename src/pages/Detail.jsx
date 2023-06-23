import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Detail(props) {
    let navi = useNavigate();
    let params = useParams();
    let { data } = props;

    console.log(params.id);

    let item;

    if (data) { // 새로고침을 빠르게 연타하면 데이터 로딩 중 값이 없어 에러가 나는 걸 방지
        item = data.filter(item => item.cca3 == params.id);
    }

    let obj;
    if (item && item[0].languages) { // 새로고침을 빠르게 연타하면 데이터 로딩 중 값이 없어 에러가 나는 걸 방지
        obj = Object.values(item[0].languages);
        console.log(obj);
    }






    return (
        // <div className={darkmode ? 'detail-page darkmode' : 'detail-page'}>
        <div className='detail-page'>
            {/* <button onClick={()=>{navi('/')}} className={darkmode ? 'darkmode' : ''}>back</button> */}
            <button onClick={() => { navi('/') }}>back</button>
            <div className='detail-info'>
                {data ? <li>
                    <div>
                        <img src={item[0]?.flags.png} />
                    </div>
                    <div className='info'>
                        <h3>{item[0]?.name.common}{item[0]?.translations.kor.common}</h3>
                        <h3>Population: <span>{item[0]?.population.toLocaleString()}</span></h3>
                        <h3>Region: <span>{item[0]?.region}</span></h3>
                        <h3>Capital: <span>{item[0]?.capital}</span></h3>
                        <h3>Sub Region: <span>{item[0]?.subregion}</span></h3>
                        <h3>Top Level Domain: <span>{item[0]?.cca2}</span></h3>
                        <h3>Languages:
                            {obj?.map((item, i) => {
                                return (
                                    <span key={i}>{item}</span>
                                )
                            })}
                        </h3>
                    </div>


                </li> : null}

            </div>

        </div>
    )
}

export default Detail