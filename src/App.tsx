import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddArticle from './components/AddArticle';
import AddBonPlan from './components/AddBonPlan/AddBonPlan';
import AddDesk from './components/AddBonPlan/AddDesk';
import AddHifi from './components/AddBonPlan/AddHifi';
import AddVinyl from './components/AddBonPlan/AddVinyls';
import Home from './components/Home';
import Nav from './components/Nav';
import Read from './components/Read';



function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/article' element={<AddArticle/>}/>      
      <Route path='/Bon-plan' element={<AddBonPlan/>}>
          <Route path='/Bon-plan/vinyle' element={<AddVinyl/>}/>
          <Route path='/Bon-plan/meubles' element={<AddDesk/>}/>
          <Route path='/Bon-plan/hifi' element={<AddHifi/>}/>
      </Route>
      <Route path='/voir-les-articles' element={<Read/>}/>'    
     </Routes>    
    </div>
  );
}

export default App;
