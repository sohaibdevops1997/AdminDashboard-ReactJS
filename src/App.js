import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'typeface-roboto';

import { Button } from 'react-bootstrap';
import  NavBar  from './layouts/Navbar'
import  MainBody  from './pages/MainBody'
import  Footer  from './layouts/Footer'
import  Home  from './pages/Home'
import  Header  from './layouts/Header'
import  Feature  from './pages/Feature'
import ThemeSwitcher from './theme/ThemeSwitcher';

function App() {
  return (
//     <div className="App">
// <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<MainBody />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//       <Footer/>
//     </Router>
//     </div>
<SSRProvider>
<Router>
      <div className="App">
        <Header />
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Feature />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </SSRProvider>

  );
}

export default App;
