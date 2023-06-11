// import logo from './logo.svg';
import './App.css';
import { Recieve } from "./myComp/Recieve";
import HeaderHer from "./myComp/HeaderHer";
import { IdPass } from "./myComp/IdPass";
import SendorRecv from "./myComp/SendorRecv";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return (
    
    
    <div className="App">
      <HeaderHer/>
     <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<SendorRecv/>}/>
          <Route exact path="/send" element={<IdPass/>}/>
          <Route exact path="/receive" element={<Recieve/>}/>
        </Routes>
      {/* </Layout> */}
    </Router>
    </div>
  );
}

export default App;
