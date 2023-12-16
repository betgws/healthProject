
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './page/Home';
import Edit from './page/Edit';
import Detail from './page/Detail';
import New from './page/New';
import MyButton from './components/MyButton';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MyButton 
          text ={"버튼"} 
          onClick={()=>alert("버튼 클릭")} 
          type={"positive"}/>
      <MyButton 
          text ={"버튼"} 
          onClick={()=>alert("버튼 클릭")} 
          type={"negative"}/>
      <MyButton 
          text ={"버튼"} 
          onClick={()=>alert("버튼 클릭")} 
          />

      
     <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/new" element={<New/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path= "/detail/:id" element={<Detail/>} />

     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
