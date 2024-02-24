import "css/global/Global.css";
import "css/global/colors/ColorVariables.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
