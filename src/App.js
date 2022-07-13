import {Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Electonic from "./containers/Electonic";
import Fashian from "./containers/Fashian";
import Home from "./containers/Home";
import Jwellery from "./containers/Jwellery";
import Login from "./containers/Login";
import Private from "./Routing/Private";
import Public from "./Routing/Public";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Public path={"/home"} exact component={Home}/>
      <Public path={"/fashian"} exact component={Fashian}/>
      <Public path={"/Electronic"} exact component={Electonic}/>
      <Private path={"/Jwellery"} exact component={Jwellery}/>
      <Public path={"/Login"} exact restricted={true} component={Login}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
