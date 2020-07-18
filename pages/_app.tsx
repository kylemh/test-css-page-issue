// global CSS
import './styles/globalStyles.css';
import { AppContext } from 'next/app';

function App({ Component, pageProps }: AppContext & { pageProps: any }) {
  return <Component {...pageProps} />;
}

export default App;
