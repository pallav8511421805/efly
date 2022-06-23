import {Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Electonic from "./containers/Electonic";
import Fashian from "./containers/Fashian";
import Home from "./containers/Home";
import Jwellery from "./containers/Jwellery";
function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path={"/home"} exact component={Home}/>
      <Route path={"/fashian"} exact component={Fashian}/>
      <Route path={"/Electronic"} exact component={Electonic}/>
      <Route path={"/Jwellery"} exact component={Jwellery}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
