import './App.css';
import { Container, Stack } from '@mui/material';
import BlogPosts from './components/BlogPosts';
import CreatePost from './features/CreatePost';
import TitleBar from './components/TitleBar';
function App() {

  return (
    <>
      <TitleBar/>
      <Container sx={{paddingTop:'12px'}}>
        <Stack spacing='12px'>
          <CreatePost/>
          <BlogPosts/>
        </Stack>
      </Container>
    </>
  );
}

export default App;
