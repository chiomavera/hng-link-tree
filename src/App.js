import Main from './pages/Main'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
