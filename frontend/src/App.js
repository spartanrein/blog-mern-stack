import './App.css';
import { Container, ThemeProvider} from '@mui/material';
import theme from './themes/theme';
import BlogPost from './components/BlogPost';
import { store } from './stores/store';
import { Provider } from 'react-redux';
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <BlogPost name="Reiner de Guzman" date="today" body="lorem ipsum meta cardio bast"/>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
