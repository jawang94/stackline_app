import "css/global/Global.css";
import "css/global/colors/ColorVariables.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./_redux/store";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
