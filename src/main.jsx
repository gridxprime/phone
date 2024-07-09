import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Layout from './components/Layout'
import Calculator from './apps/Calculator'
import Calendar from './apps/Calendar'
import Galery from './apps/Galery'
import UnkownPage from './apps/UnkownPage'
import News from './apps/News'
import Browser from './apps/Browser'
import Weather from './apps/Weather'
import Call from './apps/Call'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path ='/' element ={<Layout></Layout>}>
            <Route index element={<App></App>}/>
            <Route path='calculator' element={<Calculator></Calculator>}/>
            <Route path='calendar' element={<Calendar></Calendar>} />
            <Route path='galery' element={<Galery></Galery>} />
            <Route path='news' element={<News></News>} />
            <Route path='browser' element={<Browser></Browser>} />
            <Route path='weather' element={<Weather></Weather>} />
            <Route path='call' element={<Call></Call>} />
            <Route path='*' element={<UnkownPage/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
