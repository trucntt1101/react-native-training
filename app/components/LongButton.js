import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { windowWidth } from '../utils/Dimensions';

function LongButton({ title = '', style, ...rest }) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: windowWidth - 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    backgroundColor: '#f7941d',
    borderRadius: 30,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

LongButton.propTypes = {
  title: PropTypes.string,
};

export default LongButton;
