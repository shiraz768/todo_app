import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import Todo from "./components/Todo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="shadow-lg">
        <Provider store={store}>
          
          <Todo />
          <ToastContainer 
        />
        
        </Provider>
      </div>
    </>
  );
}

export default App;
