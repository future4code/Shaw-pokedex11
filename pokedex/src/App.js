import RouterComp from './routes/RouterComp';
import { Header } from './styles';
import { GlobalState } from './global/GlobalState';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0; 
		padding: 0; 
		box-sizing: border-box; 
    }
`

function App() {
  return (
    <div>
      <GlobalStyle />

      <RouterComp />

    </div>
  );
}

export default App;
