import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { generateUseCase } from '../lib/openai';

const UseCaseGenerator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await generateUseCase(input);
      setResult(response);
    } catch (err: any) {
      console.error(err);
      setError('Failed to generate use case. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Enter a topic or keyword:
      </Typography>

      <TextField
        fullWidth
        label="e.g. fintech, biotech, edtech"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleGenerate}
        disabled={loading || !input.trim()}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Use Case'}
      </Button>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {result && (
        <Box sx={{ mt: 4, p: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
          <Typography variant="subtitle1" gutterBottom>
            Result:
          </Typography>
          <Typography>{result}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default UseCaseGenerator;
