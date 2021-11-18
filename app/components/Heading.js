import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, LogBox } from 'react-native';
import { Switch } from 'react-native-switch';
import PropTypes from 'prop-types';
function Heading(props) {
  const { title = '' } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <View style={[props.style, styles.container]}>
      <View style={styles.switch}>
        <Switch
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
};

export default Heading;
