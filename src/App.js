import React, {useEffect, useState} from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGeneros from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'



const Home = () => {
  return <h1>Home</h1>  
}



function App() {
  const [data, setData] = useState(1)

  return (
   <Router>
     <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/generos/novo' exact component={NovoGeneros} />
        <Route path='/generos/:id' exact component={EditarGenero} />        
        <Route path='/series' exact component={Series} />
        <Route path='/series/novo' exact component={NovaSerie} />
        <Route path='/series/:id' exact component={InfoSerie} />        
      </Switch>     
    </div>
   </Router>
   
  )
}

export default App
