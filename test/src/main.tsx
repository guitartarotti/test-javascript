import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

const queryClient = new QueryClient()

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
)

/*

<React.StrictMode>
    <App />
  </React.StrictMode>

*/