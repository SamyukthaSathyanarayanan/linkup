import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './Pages/Home/Home';
import { RequiresAuth } from './authentication/RequiresAuth';
import { Login } from './authentication/Login';
import { ToastContainer } from 'react-toastify';
import { ContentBox } from './Components/ContentBox';
import { Explore } from './Pages/Explore/Explore';
import { Profile } from './Pages/Profile/Profile';
import { BookMark } from './Pages/Bookmark/BookMark';
import { IndividualProfile } from './Pages/IndividualProfile/IndividualProfile';
import { SignUp } from './authentication/SignUp';



function App() {
  return (
    <div className="App">
      {/* <ToastContainer autoClose={1000}/> */}
        <Routes>
            <Route path="/" element={<RequiresAuth><ContentBox><Home /></ContentBox></RequiresAuth> } />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/explore" element={<RequiresAuth><ContentBox><Explore /></ContentBox></RequiresAuth> } />
            <Route path="/profile" element={<RequiresAuth><ContentBox><Profile /></ContentBox></RequiresAuth> } />
            <Route path="/bookmark" element={<RequiresAuth><ContentBox><BookMark /></ContentBox></RequiresAuth> } />
            <Route path="/individualProfile/:userName" element={<RequiresAuth><ContentBox><IndividualProfile /></ContentBox></RequiresAuth> } />
           

        </Routes>
    </div>
  );
}

export default App;
