import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, LogBox, Button, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-switch';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { getObjectData, storeData } from '../utils/LocalStorage';
import { windowWidth } from '../utils/Dimensions';

function Heading({ title = '', style, langBoolean, actions, navigation, back }) {
  const [isEnabled, setIsEnabled] = useState(langBoolean);
  const toggleSwitch = () => {
    setIsEnabled((isEnabled) => !isEnabled);
    storeData('lang_en', JSON.stringify(!isEnabled));
  };
  const onClickNavigation = () => {
    navigation.goBack();
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
      <View style={back ? styles.switchHaveBack : styles.switch}>
        {back ? (
          <TouchableOpacity onPress={onClickNavigation} style={styles.backBtn}>
            <Image source={require('../assets/back.png')} style={styles.backIcon} />
          </TouchableOpacity>
        ) : null}

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
  switchHaveBack: {
    width: windowWidth - 35,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switch: {
    position: 'absolute',
    right: 25,
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
  backBtn: {
    // left: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});

Heading.propsType = {
  title: PropTypes.string,
  switchValue: PropTypes.bool,
  navigation: PropTypes.any,
  // back navigation in Forgot password
  back: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  langBoolean: state.language.langBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
