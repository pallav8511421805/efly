import {Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./containers/Home";
function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path={"/home"} exact component={Home}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
