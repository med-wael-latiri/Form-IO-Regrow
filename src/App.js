import "./App.css";
import { Formio } from "@formio/react";
import FormioContrib from "@formio/contrib";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Components from "./components/Components";
import Builder from "./components/Builder";
import WizardForm from "./components/WizardForm";
import FormRender from "./components/FormRender";
import FormList from "./components/FormList";
//Formio.use(FormioContrib);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes basename={"/react-app-starterkit"}>
        <Route path="/" element={<Home />}></Route>
        <Route path="components" element={<Components />}></Route>
        <Route path="Builder" element={<Builder />}></Route>
        <Route path="WizardForm" element={<WizardForm />}></Route>
        <Route path="FormRender" element={<FormRender />}></Route>
        <Route path="FormList" element={<FormList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
