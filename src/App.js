import React from "react";
import './App.css';
import './overrides.css';
// import Loader from 'react-loaders';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'




import Sidebar from "./Components/Sidebar"

class MySection extends React.Component {
  render() {
    return (
      
      <div className="section" >
       
      
        <h3><center>{this.props.content}</center></h3>
      </div>
    );
  }
}

const anchors = ["home", "about", "projects", "contact"];

function App() {
  return (
    <>
    <Sidebar />
    <ReactFullpage
    licenseKey={"YOUR_LICENSE_KEY"}
    anchors={anchors}
    menu="#myMenu"
    navigation
    navigationTooltips={anchors}
    sectionsColor={["rgb(40, 44, 52)", "rgb(40, 44, 56)", "rgb(40, 44, 62)", "rgb(40, 44, 68)"]}
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        
       
       
        <div>

        
          <MySection  content= {<Home />} />
          <MySection content={<About />} />
          <MySection content={<Projects />} />
          <MySection content={<Contact />} />

          {/* <MySection content={"Contact Page"} />
          <MySection content={"Contact Page"} />
          <MySection content={"Contact Page"} />
          <MySection content={"Contact Page"} /> */}
          
        </div>
       
      );
    }}
  />
  </>
  );
}

export default App;
