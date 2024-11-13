import logo from './logo.svg';
import './App.css';
import  Appbar from './components/Appbar.js';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import User from './components/User.js';
import Show from './components/show.js';

//abc={store:store , p2:25} is also called as props.

function App({store}) {
  function Page() {
    switch(store.getState()){
      case "Signin" :
        return (<div><Appbar store={store}/><SignIn store={store} /></div>);
      
      case "Signup":
        return (<div><Appbar store={store}/><SignUp/></div>);

      case "User":
        if(localStorage.getItem("role")==1||localStorage.getItem("role")==2)
        return  (<div><Appbar store={store}/><User/></div>);
        else
        return (<div><Appbar store={store}/><SignIn store={store} /></div>);
      
        case "Show":
          if(localStorage.getItem("role")==1)
        return  (<div><Appbar store={store}/><Show/></div>);
          else
        return (<div><Appbar store={store}/><SignIn store={store} /></div>);
        default :(<div><Appbar store={store}/><SignIn store={store} /></div>);
      
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  FEEDBACK MANAGEMENT SYSTEM</p>
      </header>
      <div className='App-body'>

      <Page/>

      </div>
    </div>
  );
}

export default App;
