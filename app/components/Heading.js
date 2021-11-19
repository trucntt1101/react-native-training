import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, LogBox } from 'react-native';
import { Switch } from 'react-native-switch';
import PropTypes from 'prop-types';
import StringsOfLanguage from '../localization/StringsOfLanguage';

function Heading({ title = '', style, changeLang }) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  useEffect(() => {
    changeLang(isEnabled);
  }, [isEnabled]);
  return (
    <View style={[style, styles.container]}>
      <View style={styles.switch}>
        <Switch
          // value={switchValue}
          value={isEnabled}
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

export default Heading;
