import './App.css'
import ToDoList from './components/ToDoList';

function App() {
  
  return (
      <>
      <div className='w-full h-screen flex justify-center bg-cover bg-gray-700 flex-col '>
        <h1 className='font-primary pt-8 text-center text-6xl font-light tracking-widest	'>To do List</h1>
        <ToDoList/>
      </div>
      </>
  )
}

export default App
