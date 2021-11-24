import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import LongButton from '../components/LongButton';
import CircleButton from '../components/CircleButton';
import InlineTextButton from '../components/InlineTextButton';
import Heading from '../components/Heading';
import { useForm, Controller } from 'react-hook-form';
import StringsOfLanguage from '../localization/StringsOfLanguage';
import { connect } from 'react-redux';

const strings = StringsOfLanguage;

function ForgotPassword({ navigation, langBoolean }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const [reload, setReload] = useState(0);

  const onSubmit = (data) => console.log('FORGOT PASSWORD FORM', data);

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
        title={strings.forgotPassword}
        style={{ position: 'absolute', top: 55 }}
        navigation={navigation}
        back
      />
      <View>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title={`${strings.email}/${strings.phone}`}
              textValue={value}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <LongButton
          title={strings.getPassword}
          style={styles.btnGetPass}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <Text style={styles.guideline}>{strings.resetPassGuideline}</Text>
      <View style={styles.registerGroup}>
        <View style={styles.lineThrough} />
        <InlineTextButton
          textContent={strings.notHaveAccount}
          btnContent={strings.signup}
          restTextContent={` ${strings.now}`}
          style={styles.inlineTextBtn}
          onPress={() => navigation.navigate('Signup')}
        />
        <View style={styles.groupBtnAnotherLogin}>
          <CircleButton iconUrl={require('../assets/facebook.png')} style={styles.marginRight} />
          <CircleButton iconUrl={require('../assets/google.png')} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGetPass: {
    marginTop: 50,
  },
  lineThrough: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 25,
  },
  guideline: {
    color: '#fff',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    fontStyle: 'italic',
  },
  registerGroup: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
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
    marginTop: 20,
  },
});

const mapStateToProps = (state) => ({
  langBoolean: state.language.langBoolean,
});

export default connect(mapStateToProps)(ForgotPassword);
