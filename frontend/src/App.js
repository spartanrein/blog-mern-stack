import './App.css';
import { Container, Stack, ThemeProvider} from '@mui/material';
import theme from './themes/theme';
import { store } from './stores/store';
import { Provider } from 'react-redux';
import BlogPosts from './components/BlogPosts';
import CreatePost from './features/CreatePost';
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Stack spacing='12px'>
            <CreatePost/>
            <BlogPosts/>
          </Stack>
          
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
