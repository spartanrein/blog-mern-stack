import './App.css';
import { Container, Stack, ThemeProvider} from '@mui/material';
import theme from './themes/theme';
import { store } from './stores/store';
import { Provider } from 'react-redux';
import BlogPosts from './components/BlogPosts';
import CreatePost from './features/CreatePost';
import TitleBar from './components/TitleBar';
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TitleBar/>
        <Container sx={{paddingTop:'12px'}}>
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
