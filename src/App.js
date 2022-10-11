import './App.css';
import { Provider } from 'react-redux';

//redux
import store from './redux/store';

//component
import CountCheck from './components/CountCheck';
import Counting from './components/Counting';
import Login from './components/Login';
import LoginCheck from './components/LoginCheck';

export default function App() {
  return (
    <div id='container'>
      <h3>ROOT</h3>
      <div id='flex-container'>
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className='wrap'>
      <h1>LEFT 1 </h1>
      <Left2 />
    </div>
  );
}

function Left2() {
  return (
    <div>
      <h1>LEFT 2 </h1>
      <CountCheck />
      <LoginCheck />
    </div>
  );
}

function Right1() {
  return (
    <div className='wrap'>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Counting />
      <Login />
    </div>
  );
}
