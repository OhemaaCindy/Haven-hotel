import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface ProviderProps{
    children:React.ReactNode
}

const queryClient = new QueryClient()

function Provider({children}:ProviderProps) {
  return (
    
    <QueryClientProvider client={queryClient}>
      {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Provider