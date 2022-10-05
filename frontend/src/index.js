import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {
  BrowserRouter,

} from "react-router-dom";
import GlobalStyle from './globalStyles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </>
  
    
)
