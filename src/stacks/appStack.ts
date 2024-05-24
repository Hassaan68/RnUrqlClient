import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationProps} from './navigationProps';

export type AppStackParamList = {
  Home: undefined;
  UrqlFetch: undefined;
};

export type AppStackNavigationProps<TKey extends keyof AppStackParamList> =
  NavigationProps<AppStackParamList, TKey>;

export const AppStack = createNativeStackNavigator<AppStackParamList>();
