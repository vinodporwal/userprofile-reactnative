import {useSelector} from 'react-redux';

const useAppAccessor = () => {
  const getApplication = useSelector(state => {
    return state.application;
  });

  const getHome = useSelector(state => {
    return state.home;
  });

  const getFriends = useSelector(state => {
    return state.friends;
  });

  return {
    getApplication: () => getApplication,
    getHome: () => getHome,
    getFriends: () => getFriends,
  };
};

export default useAppAccessor;
