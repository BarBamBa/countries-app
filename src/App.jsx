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
    let url;
    if (cName) {
      url = `https://restcountries.com/v3.1/name/${cName}`;
    } else {
      url = 'https://restcountries.com/v3.1/all'
    }
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          setMessage('검색어를 다시 입력해주세요');
          console.log(message);
        }
      })
      .then(json => {
        setData(json);
        console.log(data);
      })
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
    } else {
      document.body.classList.remove('darkmode');
    }
  }


  return (
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
