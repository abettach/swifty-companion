import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HouseIcon} from '../../icons';

const BottomBarIcon = props => {
  const {Icon} = props;
  return;
  <TouchableOpacity>{Icon}</TouchableOpacity>;
};

export default BottomBarIcon;
