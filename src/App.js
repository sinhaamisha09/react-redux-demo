// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <UserContainer/>
        {/* <ItemContainer cake />
        <ItemContainer /> 
        <HooksCakeContainer/> 
        <HooksIceCreamContainer/>
        <CakeContainer/>
        <IceCreamContainer/> */}
      </div>  
    </Provider>
  );
}

export default App;
