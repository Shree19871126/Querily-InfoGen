// src/App.tsx
import { Container, Typography } from '@mui/material';
import UseCaseGenerator from './components/UseCaseGenerator';
import ThemeToggle from './components/ThemeToggle';

interface AppProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const App = ({ darkMode, onToggleTheme }: AppProps) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />

      <Typography variant="h4" gutterBottom>
        Info-Gen 🚀
      </Typography>
      <Typography variant="body1" gutterBottom>
        Generate AI-powered use cases instantly.
      </Typography>
      <UseCaseGenerator />
    </Container>
  );
};

export default App;
