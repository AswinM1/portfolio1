import './App.css'
import Blogs from './components/Blogs'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'



function App() {
 

  return (
    <>
      <div className='max-w-[600px] md:min-h-screen m-auto' >
        <Navbar></Navbar>
     <Home></Home>
    
     <Project></Project>
     <Blogs></Blogs>
  
     
     
   
     
 
       </div>
    </>
  )
}

export default App
