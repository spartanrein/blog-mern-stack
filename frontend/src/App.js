import './App.css';
import { Avatar, Box, Card, Container, ThemeProvider, Typography, useTheme } from '@mui/material';
import theme from './themes/theme';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BlogPost/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
