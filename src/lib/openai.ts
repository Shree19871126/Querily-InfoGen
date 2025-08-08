// src/lib/openai.ts

export async function generateUseCase(topic: string): Promise<string> {
  const response = await fetch('https://<your-project-ref>.functions.supabase.co/generate-usecases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic }),
  });

  if (!response.ok) {
    throw new Error(`Edge Function error: ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.result) {
    throw new Error(`Invalid response from Edge Function`);
  }

  return data.result;
}
