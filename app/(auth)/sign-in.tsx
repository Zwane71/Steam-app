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

// Main sign-in component
export default function SignInPage() {
	const logo = require("../../assets/icons/logo.png");
	const background = require("../../assets/images/truck.jpeg");

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);

	// Handle the Sign In request to backend
	const handleSignIn = async () => {
		setLoading(true);
		try {
			const response = await fetch("http://192.168.1.28:5000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: form.email,
					password: form.password,
				}),
			});

			const data = await response.json();
			if (response.ok) {
				// Store token locally and navigate to home
				await AsyncStorage.setItem("token", data.token);
				router.push("/home");
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.error(error);
			alert("An error occurred during sign in");
		} finally {
			setLoading(false);
		}
	};

	// Form styles
	const formStyles = StyleSheet.create({
		formfield: {
			marginTop: 7,
		},
	});

	return (
		<SafeAreaView style={{ backgroundColor: "#1D7707", height: "100%" }}>
			<ScrollView>
				<ImageBackground
					source={background}
					style={{ width: "100%", height: 300 }}>
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
						}}>
						Welcome Back
					</Text>
				</ImageBackground>

				{/* Email Input */}
				<FormField
					title="Email"
					value={form.email}
					handleChangeText={(e) => setForm({ ...form, email: e })}
					otherStyles={formStyles.formfield}
					keyboardType="email-address"
				/>

				{/* Password Input */}
				<FormField
					title="Password"
					value={form.password}
					handleChangeText={(e) => setForm({ ...form, password: e })}
					otherStyles={formStyles.formfield}
					secureTextEntry
				/>

				{/* Forgot password */}
				<Text
					style={{
						marginTop: 15,
						color: "white",
						fontSize: 16,
						fontWeight: "500",
						right: -250,
					}}>
					Forgot Password?
				</Text>

				{/* Sign In button */}
				<CustomButton
					title={loading ? "Signing In..." : "Sign In"}
					handlePress={handleSignIn}
					disabled={loading}
				/>

				{/* Sign Up redirect */}
				<Text
					style={{
						marginTop: 15,
						color: "white",
						fontSize: 15,
						fontWeight: "500",
						textAlign: "center",
					}}>
					Don’t have an account?{" "}
					<TouchableOpacity onPress={() => router.push("/sign-up")}>
						<Text
							style={{
								marginLeft: 10,
								color: "blue",
								fontSize: 15,
								fontWeight: "500",
							}}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

// Custom Button Component
function CustomButton({ title, handlePress, disabled }) {
	return (
		<TouchableOpacity
			style={[styles.button, disabled && styles.disabledButton]}
			onPress={handlePress}
			disabled={disabled}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

// Custom Form Field Component
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

// Styles for CustomButton and FormField
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
});
