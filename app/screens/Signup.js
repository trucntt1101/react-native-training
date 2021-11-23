import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import LongButton from '../components/LongButton';
import InlineTextButton from '../components/InlineTextButton';
import Heading from '../components/Heading';
import { useForm, Controller } from 'react-hook-form';
import StringsOfLanguage from '../localization/StringsOfLanguage';
import { connect } from 'react-redux';

const strings = StringsOfLanguage;

function Signup({ navigation, langBoolean }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const [reload, setReload] = useState(0);

  const onSubmit = (data) => console.log('REGISTER FORM', data);

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
      <Heading
        title={strings.createAccount}
        style={{ position: 'absolute', top: 55 }}
        // changeLang={changeLanguage}
      />
      {/* LOGIN FORM */}
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={strings.name}
              textValue={value}
              onChangeText={(name) => setName(name)}
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={strings.phone}
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
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={strings.email}
              textValue={value}
              keyboardType="email-address"
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
              textValue={value}
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
              password
              hide
            />
          )}
        />
        <Controller
          control={control}
          name="retype-pass"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={strings.retypePass}
              textValue={value}
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
              password
            />
          )}
        />
        <Text style={styles.agreement}>{strings.agreement}</Text>
        <LongButton title={strings.signup} onPress={handleSubmit(onSubmit)} />
      </View>
      <InlineTextButton
        textContent={strings.haveAccount}
        btnContent={` ${strings.login}`}
        restTextContent={` ${strings.now}`}
        style={styles.inlineTextBtn}
        onPress={() => navigation.navigate('Login')}
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
  marginTop: {
    marginTop: 35,
  },
  agreement: {
    color: '#fff',
    paddingLeft: 15,
    paddingTop: 20,
  },
  inlineTextBtn: {
    position: 'absolute',
    bottom: 50,
  },
});

const mapStateToProps = (state) => ({
  langBoolean: state.language.langBoolean,
});

export default connect(mapStateToProps)(Signup);
