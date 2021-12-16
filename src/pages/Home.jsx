/* eslint-disable */
import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar/Navbar'
import ObjectCard from '../components/ObjectCard/ObjectCard';
import {MdArrowUpward} from "react-icons/md"
import BlankCard from '../components/BlankCard/BlankCard';
import AppContext from '../context/_appContext';
import Empty from '../assets/Empty';
function Home({scrolled,top,handleScroll}) {
  const {files,setFiles,loading} = React.useContext(AppContext);
  console.log(files);

    return (
        <div className="App" onScroll={handleScroll} id="top">
      <Navbar scrolled={scrolled}/>
      <section className='object_lists_section'>
        {files && files.length>0 && <h1>All objects</h1>}
        <div className='objects'>
          {
            files && files.length>0 && files.map((file,i)=>{
              return <ObjectCard key={i} file={file}/>
            })
          }

          {loading && <><BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/>
          <BlankCard/></>}
          {files && files.length<1 &&<div className='empty_state'>
            <div className='empty_wrapper'>
            <Empty/>
            <h1>No files found</h1>
            <p>Please upload glb files to view 3D Objects here.</p>
            </div>
          </div>}
        </div>
      </section>
      {<a href="#top" className={`go_to_btn ${top ? "goto_enable":''}`}><MdArrowUpward/></a>}
    </div>
    )
}

export default Home
