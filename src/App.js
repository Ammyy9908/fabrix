import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import React from 'react';
import Home from './pages/Home';
import Upload from './pages/Upload';
import About from './pages/About';
import getFiles from "./utils/getFiles";
import AppContext from './context/_appContext';
 // eslint-disable-next-line
import {storage} from './firebase'
 // eslint-disable-next-line
import Model from './pages/Model';
function App() {
   // eslint-disable-next-line
  const {files,setFiles,loading,setLoading} = React.useContext(AppContext);
   // eslint-disable-next-line
  const [scrolled,setScrolled] = React.useState(false);
  const [top,setTop] = React.useState(false);
  const handleScroll = (e)=>{
    const scroll = window.scrollY;
    if(scroll>150){
      setScrolled(true);
      setTop(true);
    }
    else{
      setScrolled(false);
      setTop(false);
    }
  }
  React.useEffect(()=>{
    document.addEventListener('scroll', handleScroll);
    getFiles().then((data)=>{
      console.log(data);
      setFiles(data.files);
      setLoading(false);
    }).catch((err)=>{
      console.error(err);
    })
  },
   // eslint-disable-next-line
  [])


  
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route>

    <Route exact path="/upload">
    <Upload scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route>
    <Route exact path="/about">
    <About scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route>

   

  

   

    <Route
           exact
            path="/item/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <Model id={id && id} />;
            }}
           
          />

    

       
         
          

   
   
  </Switch>
</div>
</Router>
  );
}

export default App;
