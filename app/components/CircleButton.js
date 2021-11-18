import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

function CircleButton({ iconUrl = null, style, ...rest }) {
  return (
    <TouchableOpacity style={[style, styles.button]} {...rest}>
      <Image source={iconUrl} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

CircleButton.propTypes = {
  iconUrl: PropTypes.any,
};

export default CircleButton;
