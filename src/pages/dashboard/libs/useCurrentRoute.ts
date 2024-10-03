import { useLocation } from 'react-router-dom';

export const useCurrentRoute = () => {
  const location = useLocation();
  return location.pathname.split('/')[2];
};
