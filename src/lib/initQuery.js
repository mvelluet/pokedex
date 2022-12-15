import { QueryClient } from 'react-query';

export const initClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 3,
        retryDelay: 1000,
        staleTime: 5 * 60 * 1000,
      },
    },
  });
};
