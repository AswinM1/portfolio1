import './App.css'
import Blogs from './components/Blogs'
import Github from './components/Github'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'



function App() {
 

  return (
    <>
      <div className='max-w-[600px] md:min-h-screen m-auto ' >
        <Navbar></Navbar>
     <Home></Home>
    
     <Project></Project>
     <Skills></Skills>
   
     <Blogs></Blogs>
  
     
     
   
     
 
       </div>
    </>
  )
}

export default App
