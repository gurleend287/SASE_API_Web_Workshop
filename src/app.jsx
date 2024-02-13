import 'src/global.css';
import { useEffect } from 'react';

import Spotify from './spotify';

import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import LoginPage from './pages/login';

// ----------------------------------------------------------------------

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
        const accessToken = hash.substring(1).split("&")[0].split("=")[1];
        console.log(accessToken);
        if (accessToken) {
            dispatch({ type: reducerCases.SET_TOKEN, token: accessToken });
        }
    }
    document.title = "Spotify";
}, [dispatch, token]);
  return <div>{token ? <Spotify /> : <LoginPage />}</div>;
}
