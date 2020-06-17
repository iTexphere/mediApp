import { StackNavigationProp } from '@react-navigation/stack';

export type rootStackAuthList = {
  UserLogin: undefined;
  ClientLogin: undefined;
  UserReg: undefined;
  ClientReg: undefined;
};

/**
 * Stack Navigator Param List
 * If you want add params, remove undefined add types to any screen you want
 */
export type rootStackParamList = {
  Home: undefined;
  Channel: undefined;
  Booking: undefined;
  Search: undefined;
};

export type rootStackParamListMedi = {
  Home: undefined;
  Issuing: undefined;
  IssuingNext: undefined;
  OurBookings: undefined;
  Profile: undefined;
};

/**
 * Screens Param Types
 * Create Param Types for each screens you add to the stack navigator
 */
type LoginScreenNavigationProp = StackNavigationProp<
  rootStackAuthList,
  'UserLogin'
>;
type RegisterScreenNavigationProps = StackNavigationProp<
  rootStackAuthList,
  'UserReg'
>;
export type Props = {
  navigation: LoginScreenNavigationProp | RegisterScreenNavigationProps;
};
