import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Main sign-up component
export default function SignUp() {
  const logo = require("../../assets/icons/logo.png");
  const background = require("../../assets/images/truck.jpeg");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const isPasswordValid = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    );
  };

  const submit = async () => {
    setPasswordError("");
    setSignUpError("");

    // Validate password
    if (!isPasswordValid(form.password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include uppercase, lowercase, digits, and special characters."
      );
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("http://192.168.1.41:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to ConfirmationCodePage and pass email as param
        router.push({
          pathname: "/code",
          params: { email: form.email },
        });
      } else {
        setSignUpError(data.message);
      }
    } catch (error) {
      console.error(error);
      setSignUpError("An error occurred during sign up");
    } finally {
      setSubmitting(false);
    }
  };

  const formStyles = StyleSheet.create({
    formfield: {
      marginTop: 7,
    },
    errorText: {
      color: "red",
      fontSize: 14,
      marginTop: 5,
    },
  });
  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  
  
    // Validate email
    if (!isEmailValid(form.email)) {
      setSignUpError("Please enter a valid email address.");
      return;
    }
  
    // Validate password
    if (!isPasswordValid(form.password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include uppercase, lowercase, digits, and special characters."
      );
      return;
    }
  
   
  
      
  return (
    <SafeAreaView style={{ backgroundColor: "#1D7707", height: "100%" }}>
      <ScrollView>
        <ImageBackground
          source={background}
          style={{ width: "100%", height: 300 }}
        >
          <Image
            source={logo}
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: 25,
              padding: 35,
            }}
          />
          <Text
            style={{
              marginTop: 15,
              color: "white",
              textAlign: "center",
              backgroundColor: "#1D7707",
              width: "100%",
              padding: 25,
              fontWeight: "600",
              fontSize: 32,
            }}
          >
            Sign Up
          </Text>
        </ImageBackground>

        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles={formStyles.formfield}
        />

        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={formStyles.formfield}
          keyboardType="email-address"
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={formStyles.formfield}
          secureTextEntry
        />
        {passwordError ? (
          <Text style={formStyles.errorText}>{passwordError}</Text>
        ) : null}

        <CustomButton
          title={isSubmitting ? "Signing Up..." : "Sign Up"}
          handlePress={submit}
          disabled={isSubmitting}
        />
        {signUpError ? (
          <Text style={formStyles.errorText}>{signUpError}</Text>
        ) : null}

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/sign-in")}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CustomButton({ title, handlePress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

function FormField({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType = "default",
  secureTextEntry = false,
}) {
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1D7707",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#aaa",
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  linkText: {
    color: "#3498db",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
