import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, LogBox } from 'react-native';
import { Switch } from 'react-native-switch';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { getObjectData, storeData } from '../utils/LocalStorage';

function Heading({ title = '', style, langBoolean, actions }) {
  const [isEnabled, setIsEnabled] = useState(langBoolean);
  const toggleSwitch = () => {
    setIsEnabled((isEnabled) => !isEnabled);
    storeData('lang_en', JSON.stringify(!isEnabled));
  };
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    // get value from local storage
    getObjectData('lang_en').then((lang) => {
      setIsEnabled(lang);
    });
  }, []);
  useEffect(() => {
    actions.changeLanguage(isEnabled);
  }, [isEnabled]);
  return (
    <View style={[style, styles.container]}>
      <View style={styles.switch}>
        <Switch
          value={langBoolean}
          onValueChange={toggleSwitch}
          disabled={false}
          activeText={'EN'}
          inActiveText={'VN'}
          circleSize={30}
          backgroundActive={'#0049bf'}
          backgroundInactive={'#0049bf'}
          circleActiveColor={'#fff'}
          circleInActiveColor={'#fff'}
          switchBorderRadius={30}
          // {...rest}
        />
      </View>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  switch: {
    position: 'absolute',
    right: 15,
  },
  logo: {
    height: 90,
    resizeMode: 'contain',
    marginTop: 45,
    marginBottom: 15,
  },
  title: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

Heading.propsType = {
  title: PropTypes.string,
  switchValue: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  langBoolean: state.language.langBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
