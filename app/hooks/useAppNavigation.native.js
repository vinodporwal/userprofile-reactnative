import {useNavigation} from '@react-navigation/native';

type IBaseProps = {
  screen?: string,
};

type INavigateProps = {
  screen: string,
  props?: any,
};

const useAppNavigation = () => {
  const navigation = useNavigation();

  function navigate({screen, props}: INavigateProps) {
    navigation.navigate(screen, props);
  }

  function goBack({screen}: IBaseProps) {
    if (canGoBack()) {
      navigation.goBack();
      return;
    }

    if (screen) {
      navigate({screen});
    }
  }

  function canGoBack() {
    return navigation.canGoBack();
  }

  return {
    navigate: (props: INavigateProps) => navigate(props),
    goBack: (props: IBaseProps) => goBack(props),
    canGoBack: () => canGoBack(),
  };
};

export default useAppNavigation;
