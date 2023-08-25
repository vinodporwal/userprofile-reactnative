import {NavigatorScreenParams} from '@react-navigation/core';
import {InsideStackParamList, OutsideParamList} from './stackTypes';

export type StackParamList = {
  AuthLoading: undefined,
  OutsideStack: NavigatorScreenParams<OutsideParamList>,
  InsideStack: NavigatorScreenParams<InsideStackParamList>,
};
