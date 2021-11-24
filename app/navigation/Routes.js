import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';
import AuthStack from './AuthStack';
import HomeDrawer from './HomeDrawer';

function Routes({ isLogin }) {
  return <NavigationContainer>{isLogin ? <HomeDrawer /> : <AuthStack />}</NavigationContainer>;
}

const mapStateToProps = (state) => ({
  isLogin: state.account?.isLogin,
});

export default connect(mapStateToProps)(Routes);
