import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function InlineTextButton({
  textContent = '',
  btnContent = '',
  restTextContent = '',
  style,
  ...rest
}) {
  return (
    <View style={[style, styles.registerNow]}>
      <Text style={styles.whiteColor}>{textContent}</Text>
      <TouchableOpacity style={{ margin: 0 }} {...rest}>
        <Text style={styles.btnRegister}>{btnContent}</Text>
      </TouchableOpacity>
      <Text style={styles.whiteColor}>{restTextContent}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  registerNow: {
    flexDirection: 'row',
    color: '#fff',
  },
  whiteColor: {
    color: '#fff',
  },
  btnRegister: {
    color: '#d88441',
    textDecorationLine: 'underline',
  },
});

InlineTextButton.propsType = {
  textContent: PropTypes.string,
  btnContent: PropTypes.string,
  restTextContent: PropTypes.string,
};

export default InlineTextButton;
