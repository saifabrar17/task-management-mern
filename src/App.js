import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import AddTask from './Pages/AddTask/AddTask';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import ToDo from './Pages/ToDo/ToDo';
import Home from './Pages/Home/Home';
import NotFOund from './Pages/NotFound/NotFOund';
import Footer from './Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addNewTask' element={<AddTask></AddTask>}></Route>
        <Route path='/completedTask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='*' element={<NotFOund></NotFOund>}></Route>
      </Routes>

<Footer></Footer>
    </div>
  );
}

export default App;
