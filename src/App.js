import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext';
import User from './components/users/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/about' element={<About />} ></Route>
              <Route path='/user/:login' element={<User />}  ></Route>
              <Route path='/notfound' element={<NotFound />} ></Route>
              <Route path='/*' element={<NotFound />} ></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
