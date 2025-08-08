// src/components/ThemeToggle.tsx
import { Box, Switch, Typography } from '@mui/material';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ darkMode, onToggle }: ThemeToggleProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end" mb={2}>
      <Typography variant="body2" sx={{ mr: 1 }}>
        {darkMode ? 'Dark' : 'Light'} Mode
      </Typography>
      <Switch checked={darkMode} onChange={onToggle} />
    </Box>
  );
};

export default ThemeToggle;
