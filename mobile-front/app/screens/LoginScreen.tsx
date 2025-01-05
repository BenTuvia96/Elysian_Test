import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EyeIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import googleIcon from '../assets/Google.png'; 
import logo from '../assets/logo.png';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://elysiantestbackpy-bcegckecarbvawh4.israelcentral-01.azurewebsites.net/api/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      Alert.alert('Success', 'Login successful!');
    } catch (error: any) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

            {/* Logo + Title in normal layout */}
            <View style={styles.logoContainer}>
              <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.title}>Log in</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="email-outline" size={20} color="black" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#828282"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={20} color="black" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!passwordVisible}
                  placeholderTextColor="#828282"
                  value={password}
                  onChangeText={setPassword}
                />
                <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                  <EyeIcon
                    name={passwordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color="black"
                    style={styles.icon}
                  />
                </Pressable>
              </View>
            </View>

            {/* Forgot Password */}
            <View style={styles.forgotPasswordWrapper}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonWrapper}>
              <Pressable style={styles.primaryButton} onPress={handleLogin}>
                <Text style={styles.primaryButtonText}>Log in</Text>
              </Pressable>

              <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.orText}>Or</Text>
              </View>

              {/* Social Login Options */}
              <View style={styles.socialButtons}>
                <Pressable style={styles.socialButton}>
                  <Image source={googleIcon} style={styles.socialIcon} />
                  <Text style={styles.socialLabel}>Google</Text>
                </Pressable>
                <Pressable style={styles.socialButton}>
                  <FacebookIcon name="facebook" size={20} color="#4267B2" style={styles.socialIcon} />
                  <Text style={styles.socialLabel}>Facebook</Text>
                </Pressable>
              </View>
            </View>

            {/* No Account Section */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Have no account yet?</Text>
              <Pressable style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
