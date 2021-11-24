import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import LongButton from '../components/LongButton';
import CircleButton from '../components/CircleButton';
import InlineTextButton from '../components/InlineTextButton';
import Heading from '../components/Heading';
import { useForm, Controller } from 'react-hook-form';
import StringsOfLanguage from '../localization/StringsOfLanguage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { getObjectData } from '../utils/LocalStorage';
import _ from 'lodash';

const strings = StringsOfLanguage;

const formDefault = {
  email: '',
  name: '',
  password: '',
  phone: '',
  retypePass: '',
};

function Login({ navigation, langBoolean, actions }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' });
  const [reload, setReload] = useState(0);

  const onSubmit = (data) => {
    reset(formDefault);
    console.log('LOGIN FORM', data);
    getObjectData('list_user').then((users) => {
      console.log('users ', users);
      const index = _.findIndex(users, (user) => {
        return user.phone === data.phone && user.password === data.password;
      });
      if (index !== -1) {
        // user login is true
        // get user item -> store to redux
        const currentUser = users[index];
        console.log('current user ', currentUser);
        actions.changeLoginStatusToTrue(currentUser);
      }
    });
  };
  useEffect(() => {
    if (!langBoolean) StringsOfLanguage.setLanguage('vi');
    else StringsOfLanguage.setLanguage('en');

    setReload((previousState) => previousState + 1);
  }, [langBoolean]);
  return (
    <LinearGradient
      colors={['#228ee8', '#1465d0', '#0129ac']}
      style={styles.container}
      reload={reload}
    >
      <Heading style={{ position: 'absolute', top: 55 }} />
      {/* LOGIN FORM */}
      <View>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={strings.phone}
              iconUrl={require('../assets/user.png')}
              textValue={value}
              keyboardType="numeric"
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={strings.password}
              iconUrl={require('../assets/lock.png')}
              textValue={value}
              style={styles.passwordInput}
              onBlur={onBlur}
              onChangeText={onChange}
              password
              hide
            />
          )}
        />
        <LongButton title={strings.login} onPress={handleSubmit(onSubmit)} />
      </View>
      <TouchableOpacity
        style={styles.btnForgotPass}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotPassText}>{strings.forgotPassword}</Text>
      </TouchableOpacity>
      <View style={styles.lineThrough} />
      <Text style={styles.anotherLoginText}>{strings.anotherLogin}</Text>
      {/* LOGIN WITH ANOTHER WAY */}
      <View style={styles.groupBtnAnotherLogin}>
        <CircleButton iconUrl={require('../assets/fingerprint.png')} style={styles.marginRight} />
        <CircleButton iconUrl={require('../assets/facebook.png')} style={styles.marginRight} />
        <CircleButton iconUrl={require('../assets/google.png')} />
      </View>
      <InlineTextButton
        textContent={strings.notHaveAccount}
        btnContent={` ${strings.signup}`}
        restTextContent={` ${strings.now}`}
        style={styles.inlineTextBtn}
        onPress={() => navigation.navigate('Signup')}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    marginTop: 35,
  },
  btnForgotPass: {
    marginTop: 20,
  },
  forgotPassText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  lineThrough: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 25,
  },
  anotherLoginText: {
    color: '#fff',
    marginTop: 20,
  },
  groupBtnAnotherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  marginRight: {
    marginRight: 20,
  },
  inlineTextBtn: {
    position: 'absolute',
    bottom: 50,
  },
});

const mapStateToProps = (state) => ({
  langBoolean: state.language.langBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
