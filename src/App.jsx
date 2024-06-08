import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {  RouterProvider } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';

import router from './Router/Router.jsx'

function App() {
  return (
    <div className="App">

      <Navbar />
      <RouterProvider router={router}/>
      {/* <Routes> */}
       
        {/* <Route path="/test" element={<TestPage />} /> */}
        {/* <Route path="/popular" element={<PopularPage />} /> */}
     
      <Footer />
    </div>
  );
}

export default App;