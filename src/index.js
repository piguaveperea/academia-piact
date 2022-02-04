import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Error404 from './pages/404';
import { 
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import '@splidejs/splide/dist/css/splide.min.css';
import SignUp from './pages/SignUp'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error404/>} />
        <Route path='/register' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
