import './App.css';
import Intership from './components/Intership'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landingpage from './components/Landingpage';
import Notes from './components/secondarypages/Notes';
import Courses from './components/secondarypages/Courses';
import Training from './components/secondarypages/Training';
import Company from './components/secondarypages/Intership/Company';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage></Landingpage>} />
          <Route exact path="/Intership" element={<Intership></Intership>} />
          <Route exact path="/Training" element={<Training></Training>} />
          <Route exact path="/Courses" element={<Courses></Courses>} />
          <Route exact path="/Notes" element={<Notes></Notes>} />
          <Route exact path="/Intership/company" element={<Company></Company>} />
          <Route exact path="/Intership/company/payment" element={<Payment></Payment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
