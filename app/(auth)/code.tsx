import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";

export default function ConfirmationCodePage() {
  const { email } = useLocalSearchParams(); // Fetching email from URL params
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false); // State for resend code status

  const truckImage = require("../../assets/images/truck.jpeg"); // Background image
  const logo = require("../../assets/icons/logo.png"); // Logo image

  const handleVerifyCode = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://192.168.1.41:4000/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json(); // Parse response directly as JSON

      if (response.ok) {
        // Code verified, navigate to another page (e.g., home or dashboard)
        router.push("/home");
      } else {
        setError(data.message || "Invalid confirmation code.");
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setError("An error occurred during code verification.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResending(true);
    setError("");

    try {
      const response = await fetch("http://192.168.1.41:4000/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json(); // Parse response directly as JSON
      if (response.ok) {
        alert("A new confirmation code has been sent to your email.");
      } else {
        setError(data.message || "Failed to resend the code.");
      }
    } catch (error) {
      console.error("Error resending code:", error);
      setError("An error occurred while resending the code.");
    } finally {
      setResending(false);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#1D7707", height: "100%" }}>
      <ImageBackground source={truckImage} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>Enter Confirmation Code</Text>

          {/* Code Input */}
          <TextInput
            style={styles.input}
            placeholder="Confirmation Code"
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
          />

          {/* Display error message */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Verify Button */}
          <TouchableOpacity
            style={[styles.button, loading && styles.disabledButton]}
            onPress={handleVerifyCode}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Verifying..." : "Verify Code"}
            </Text>
          </TouchableOpacity>

          {/* Resend Code Section */}
          <Text style={styles.resendText}>Didn't receive the code?</Text>
          <TouchableOpacity
            onPress={handleResendCode}
            disabled={resending}
          >
            <Text style={styles.resendButton}>
              {resending ? "Resending..." : "Resend Code"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1D7707",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#aaa",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
  resendText: {
    color: "#fff",
    marginTop: 20,
    fontSize: 16,
  },
  resendButton: {
    color: "blue",
    fontSize: 16,
    fontWeight: "500",
  },
});
