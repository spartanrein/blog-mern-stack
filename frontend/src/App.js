import './App.css';
import { Box, Container, Stack, ThemeProvider} from '@mui/material';
import theme from './themes/theme';
import { store } from './stores/store';
import { Provider } from 'react-redux';
import BlogPosts from './components/BlogPosts';
import CreatePost from './features/CreatePost';
import TitleBar from './components/TitleBar';
import SignUp from './features/SignUp';
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TitleBar/>
        <Container sx={{paddingTop:'12px'}}>
            <Container sx={{paddingTop:{md:"80px", xs:"25%"},maxWidth: {md:"50%", xs:"100%"}}}>
              <SignUp/>
            </Container>
          {/* <Stack spacing='12px'>
            <CreatePost/>
            <BlogPosts/>
          </Stack> */}
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
