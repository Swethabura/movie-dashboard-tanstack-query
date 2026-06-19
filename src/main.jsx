import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>
  <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider >
)
