import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SignUp() {
  const logo = require('../../assets/icons/logo.png');
  const background = require('../../assets/images/truck.jpeg');

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const submit = async () => {
    setSubmitting(true);
    try {
      const response = await fetch('http://192.168.1.28:3000/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
        await AsyncStorage.setItem('token', data.token);
        router.push('/home');
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1D7707',
      height: height,
      width: width,
    },
    imageBackground: {
      width: '100%',
      height: height * 0.3,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      marginTop: 25,
      padding: 35,
    },
    title: {
      marginTop: 15,
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#1D7707',
      width: '100%',
      padding: 25,
      fontWeight: '600',
      fontSize: 32,
    },
    formfield: {
      marginTop: 7,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    linkText: {
      color: '#3498db',
      marginLeft: 10,
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={background} style={styles.imageBackground}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Sign Up
          </Text>
        </ImageBackground>

        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles={styles.formfield}
        />
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={styles.formfield}
          style={{ marginTop: 25 }}
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={styles.formfield}
          secureTextEntry
        />

        <CustomButton
          title="Sign Up"
          handlePress={submit}
          isLoading={isSubmitting}
        />

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Already have an account?
          </Text>
          <Link href="/sign-in">
            <Text style={styles.linkText}>
              Login
            </Text>
          </Link>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
