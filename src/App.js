import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import AddTask from './Pages/AddTask/AddTask';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import ToDo from './Pages/ToDo/ToDo';
import Home from './Pages/Home/Home';
import NotFOund from './Pages/NotFound/NotFOund';
import Footer from './Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Calander from './Pages/Calander/Calander';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="min-h-[80vh]">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/addNewTask' element={<AddTask></AddTask>}></Route>
          <Route path='/completedTask' element={<CompletedTask></CompletedTask>}></Route>
          <Route path='/todo' element={<ToDo></ToDo>}></Route>
          <Route path='/calander' element={<Calander></Calander>}></Route>
          <Route path='*' element={<NotFOund></NotFOund>}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
