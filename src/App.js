import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {useState,useEffect} from 'react';
import MobileFooter from "./components/MobileFooter";
function App() {
  const [display,setDisplay]=useState("");
  useEffect(()=>{
    const screen=window.screen.width;
    if(screen<750){
      setDisplay(("mobile"));
      console.log(display,"display");
    }else{
      setDisplay(("laptop"));
      console.log(display,"display");
    }
  },[display]);
  return (
    
    <div className="App" >
      {
        display==="laptop"?
        <Sidebar />
        :<MobileHeader />
      }
      {
        display==="mobile" && <MobileFooter />
      }
      <Content />
      <Footer />
      
    </div>
  );
}

export default App;
