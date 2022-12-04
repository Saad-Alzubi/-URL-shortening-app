import Header from "./components/Header";
import Main from "./components/Body";
import Information from "./components/Info";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/global-styles";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Main />
        <Information />
        <Banner />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
