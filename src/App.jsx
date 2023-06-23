import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Detail from './pages/Detail';
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [cName, setcName] = useState('');
  const [message, setMessage] = useState('');
  const [darkmode, setDarkmode] = useState(false);

  const fetchData = () => {
    let url = '';
    if (cName) {
      url = `https://restcountries.com/v3.1/name/${cName}`;
    } else {
      url = 'https://restcountries.com/v3.1/all'
    }
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (json.status == 404) {
          setMessage('검색어를 다시 입력해주세요');
          setData(null);
          console.log(message);
          return;
        }
        setData(json);
        console.log(json);
        console.log(data);
      })


    // if (!data) {
    //   const url = 'https://restcountries.com/v3.1/all';
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(json => {
    //       if (json.status == 404) {
    //         setMessage('검색어를 다시 입력해주세요');
    //       }
    //       setData(json);
    //       console.log(json);
    //       console.log(data);
    //     })
    // }


  }

  useEffect(() => {
    fetchData();
  }, [])

  const changeName = (e) => {
    console.log(e.target.value)
    setcName(e.target.value);
  }

  const searchHandle = () => {
    fetchData();
  }

  const darkBtn = () => {
    setDarkmode(!darkmode);
    if (darkmode == false) {
      document.body.classList.add('darkmode');
      // document.body.style.backgroundColor = '#2b3945';
    } else {
      document.body.classList.remove('darkmode');
      // document.body.style.backgroundColor = '#faf5f5';
    }
  }


  return (
    // <div className={darkmode ? 'App darkmode' : 'App'}>
    <div className='App'>
      <Navbar darkBtn={darkBtn} darkmode={darkmode} />
      <Routes>
        <Route path='/' element={<Main searchHandle={searchHandle} data={data} changeName={changeName} darkmode={darkmode} message={message} />}></Route>
        <Route path='/detail/:id' element={<Detail darkmode={darkmode} data={data} />}></Route>
      </Routes>

    </div>
  )
}

export default App
