import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function CustomTextInput({
  title = '',
  textValue = '',
  iconUrl = null,
  password = null,
  hide = null,
  keyboardType = 'default',
  style,
  ...rest
}) {
  const [passwordIcon, setPasswordIcon] = useState(
    !hide ? require('../assets/hide.png') : require('../assets/show.png')
  );
  const [isShowPass, setIsShowPass] = useState(hide);
  const onChangeIcon = () => {
    setPasswordIcon(isShowPass ? require('../assets/hide.png') : require('../assets/show.png'));
    setIsShowPass((prev) => !prev);
  };
  return (
    <View style={[style, styles.container]}>
      {iconUrl ? <Image source={iconUrl} style={styles.icon} /> : null}
      <TextInput
        style={styles.input}
        value={textValue}
        placeholder={title}
        placeholderTextColor="#fff"
        numberOfLines={1}
        secureTextEntry={isShowPass}
        {...rest}
      />
      {password ? (
        <TouchableOpacity onPress={onChangeIcon} style={{ marginLeft: 10 }}>
          <Image source={passwordIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, .2)',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    borderWidth: 0,
  },
});

CustomTextInput.propTypes = {
  iconUrl: PropTypes.any,
  title: PropTypes.string,
  textValue: PropTypes.string,
  // attributes for password
  password: PropTypes.bool,
  hide: PropTypes.bool,
};

export default CustomTextInput;
