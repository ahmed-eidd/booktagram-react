import Routes from './routes/routes';
import './styles/globals.scss';
import { isLoaded  } from 'react-redux-firebase'
import {useSelector} from 'react-redux';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  return (
    <>
    {
      isLoaded(auth) && isLoaded(profile) ?
      <Routes /> : <SplashScreen/>
    }

    
    {/* <SplashScreen /> */}
    </>
  );
}

export default App;
