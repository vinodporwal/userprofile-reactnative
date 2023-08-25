import {useNavigate} from 'react-router-dom';

type IBaseProps = {
  screen?: string,
};

type INavigateProps = {
  screen: string,
  props?: any,
};

const useNavigation = () => {
  const routeNavigate = useNavigate();

  function navigate({screen, props}: INavigateProps) {
    let targetScreen = screen;
    if (!targetScreen.startsWith('/')) {
      targetScreen = `/${targetScreen}`;
    }

    routeNavigate(targetScreen, props);
  }

  function goBack({screen}: IBaseProps) {
    if (canGoBack()) {
      routeNavigate(-1);
      return;
    }

    if (screen) {
      navigate({screen});
    }
  }

  function canGoBack() {
    if (window.history.state && window.history.state.idx > 0) {
      return true;
    }

    return false;
  }

  return {
    navigate: (props: INavigateProps) => navigate(props),
    goBack: (props: IBaseProps) => goBack(props),
    canGoBack: () => canGoBack(),
  };
};

export default useNavigation;
