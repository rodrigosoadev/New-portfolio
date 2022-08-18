import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Project from './components/Project'


import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Footer />
      
      
    </div>
  )
}

export default App
