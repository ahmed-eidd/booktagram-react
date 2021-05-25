import './App.css';
import Routes from './routes/routes'
import { isLoaded } from 'react-redux-firebase'
import {useSelector} from 'react-redux';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <>
    {
      isLoaded(auth) ?
      <Routes /> : <SplashScreen/>
    }

    
    {/* <SplashScreen /> */}
    </>
  );
}

export default App;
