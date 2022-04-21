import logo from './logo.svg';
import React from "react";
import './App.css';
import Loader from 'react-loaders';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Components/Home'


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

const anchors = ["home", "about", "thirdPage"];

function App() {
  return (
    <>
    <Sidebar />
    <ReactFullpage
    anchors={anchors}
    menu="#myMenu"
    navigation
    navigationTooltips={anchors}
    sectionsColor={["rgb(40, 44, 52)", "#321ccc", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        
       
       
        <div>

        
          <MySection  content= {<Home />} />
          <MySection content={"About Page"} />
          <MySection content={"Contact Page"} />
        </div>
       
      );
    }}
  />
  <Loader type="pacman" />
  </>
  );
}

export default App;
