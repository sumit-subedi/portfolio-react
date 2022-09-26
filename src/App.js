<<<<<<< HEAD
import logo from './logo.svg';
import React from "react";
import './App.css';
import Loader from 'react-loaders';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Components/Home'
=======
import React from "react";
import './App.css';
import './overrides.css';
// import Loader from 'react-loaders';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


>>>>>>> master


import Sidebar from "./Components/Sidebar"

class MySection extends React.Component {
  render() {
    return (
      
      <div className="section" >
<<<<<<< HEAD
=======
       
>>>>>>> master
      
        <h3><center>{this.props.content}</center></h3>
      </div>
    );
  }
}

<<<<<<< HEAD
const anchors = ["home", "about", "thirdPage"];
=======
const anchors = ["home", "about", "projects", "contact"];
>>>>>>> master

function App() {
  return (
    <>
    <Sidebar />
    <ReactFullpage
<<<<<<< HEAD
=======
    licenseKey={"YOUR_LICENSE_KEY"}
>>>>>>> master
    anchors={anchors}
    menu="#myMenu"
    navigation
    navigationTooltips={anchors}
<<<<<<< HEAD
    sectionsColor={["rgb(40, 44, 52)", "#321ccc", "#0798ec"]}
=======
    sectionsColor={["rgb(40, 44, 52)", "rgb(40, 44, 56)", "rgb(40, 44, 62)", "rgb(40, 44, 68)"]}
>>>>>>> master
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        
       
       
        <div>

        
          <MySection  content= {<Home />} />
<<<<<<< HEAD
          <MySection content={"About Page"} />
          <MySection content={"Contact Page"} />
=======
          <MySection content={<About />} />
          <MySection content={<Projects />} />
          <MySection content={<Contact />} />

          {/* <MySection content={"Contact Page"} />
          <MySection content={"Contact Page"} />
          <MySection content={"Contact Page"} />
          <MySection content={"Contact Page"} /> */}
          
>>>>>>> master
        </div>
       
      );
    }}
  />
<<<<<<< HEAD
  <Loader type="pacman" />
=======
>>>>>>> master
  </>
  );
}

export default App;
