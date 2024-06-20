import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home/home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/naveen-portfolio' element={<Home /> } />
      </Routes>
    </Router>
  )
}

export default App;