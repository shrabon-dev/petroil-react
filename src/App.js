import { useState } from "react";
import './App.css';
import { Banner } from './component/banner/index';
import { Header } from './component/header/index';
import { ImageSection } from './component/imageSection/index';
import { Navbar } from './component/navbar/index';
import {SubSection} from './component/subsection/index';
import { Services } from './component/services/index';
import { About } from './component/about/index';
import { Brand } from './component/brand/index';
import { GMap } from './component/map';
import { Blogs } from './component/blog';
import { NewsLetter } from './component/newsletter';
import { Footer } from './component/footer';
import { CopyRight } from './component/copyright';


function App() {
  return (
     <>
      <Header/>
      <Navbar/>
      <Banner/>
      <SubSection/>
      <ImageSection/>
      <Services/>
      <About/>
      <Brand/>
      <Blogs/>
      <GMap/>
      <NewsLetter/>
      <Footer/>
      <CopyRight/>

     </>
  );
}

export default App;
