import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Stack Navigator Param List
 * If you want add params, remove undefined add types to any screen you want
 */
export type rootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  Search: undefined;
};

/**
 * Screens Param Types
 * Create Param Types for each screens you add to the stack navigator
 */
type LoginScreenNavigationProp = StackNavigationProp<
  rootStackParamList,
  'Login'
>;
type RegisterScreenNavigationProps = StackNavigationProp<
  rootStackParamList,
  'Registration'
>;
export type Props = {
  navigation: LoginScreenNavigationProp | RegisterScreenNavigationProps;
};
