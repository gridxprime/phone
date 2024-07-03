import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Call from './pages/Call.jsx'
import { BrowserRouter ,  Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/call' element={<Call></Call>}></Route>
    </Routes>
     
    </BrowserRouter>
  </React.StrictMode>,
)
