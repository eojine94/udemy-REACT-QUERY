import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Posts } from './Posts';
import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Blog Posts</h1>
        <Posts />
      </div>

      {/* React Query Devtools */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
