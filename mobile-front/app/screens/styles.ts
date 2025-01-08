import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // If you want everything to start near the top, use 'flex-start' or adjust your margins:
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40, // added some padding so the logo doesn't stick to the very top
  },

  logoContainer: {
    // No absolute positioning
    alignItems: 'center',
    // You can tweak this spacing
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10, // some space below the logo before the title
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Lato',
    color: '#3949AB',
  },

  inputWrapper: {
    // Push the inputs further down if you want:
    marginTop: 40,
    width: 300,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'transparent',
  },

  forgotPasswordWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 300,
    marginBottom: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#3949AB',
    fontWeight: '600',
  },

  buttonWrapper: {
    marginTop: 40,
    width: 300,
  },
  primaryButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#3949AB',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // Add shadow for pressed effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryButtonDisabled: {
    backgroundColor: '#959bcc',
    opacity: 0.7,
    // Remove shadow when disabled
    shadowColor: 'transparent',
    elevation: 0,
  },
  primaryButtonPressed: {
    backgroundColor: '#2d3eaa',
    transform: [{ translateY: 2 }],
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 146,
    height: 40,
    borderWidth: 1,
    borderColor: '#3949AB',
    borderRadius: 40,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialLabel: {
    color: '#3949AB',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#7B7B7B',
  },
  secondaryButton: {
    marginTop: 8,
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#3949AB',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#3949AB',
    fontSize: 14,
    fontWeight: '600',
  },
  orText: {
    marginVertical: 16,
    fontSize: 14,
    fontWeight: '600',
    color: '#3949AB',
  },
});

export default styles;
