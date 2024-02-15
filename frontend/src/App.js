import './App.css';
import { Container, ThemeProvider} from '@mui/material';
import theme from './themes/theme';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BlogPost name="Reiner de Guzman" date="today" body="lorem ipsum meta cardio bast"/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
