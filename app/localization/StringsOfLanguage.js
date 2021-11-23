import LocalizedStrings from 'react-native-localization';

const StringsOfLanguage = new LocalizedStrings({
  en: {
    phone: 'Phone number',
    password: 'Password',
    login: 'Login',
    forgotPassword: 'Forgot password?',
    anotherLogin: 'Or login by',
    signup: 'Sign up',
    haveAccount: 'Already have an account?',
    now: 'now',
    createAccount: 'Create a new account',
    name: 'Full name',
    email: 'Email address',
    retypePass: 'Re-type new password',
    agreement:
      "By creating this account, you agree to Mr.Tho's Condition os uses and Privacy policy.",
    notHaveAccount: 'New to Mr.Tho?',
    getPassword: 'Reset password',
    resetPassGuideline: 'Please enter your email address or phone number to reset your password.',
  },
  vi: {
    phone: 'Số điện thoại',
    password: 'Mật khẩu',
    login: 'Đăng nhập',
    forgotPassword: 'Quên mật khẩu?',
    anotherLogin: 'Hoặc đăng nhập bằng',
    signup: 'Đăng ký tài khoản',
    haveAccount: 'Bạn đã có tài khoản?',
    now: 'ngay',
    createAccount: 'Đăng ký tài khoản',
    name: 'Họ và tên',
    email: 'Địa chỉ email',
    retypePass: 'Nhập lại mật khẩu',
    agreement:
      'Khi bạn đăng ký tài khoản, bạn đã đồng ý với các điều khoản sử dụng & chính sách dịch vụ của Mr.Thợ.',
    notHaveAccount: 'Bạn chưa có tài khoản?',
    getPassword: 'Lấy lại mật khẩu',
    resetPassGuideline: 'Vui lòng nhập địa chỉ email hoặc số điện thoại để lấy lại mật khẩu.',
  },
});

export default StringsOfLanguage;
