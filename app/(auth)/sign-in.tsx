import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	ImageBackground,
	ScrollView,
	Text,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Redirect, router } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const logo = require("../../assets/icons/logo.png");
	const background = require("../../assets/images/truck.jpeg");

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const formStyles = StyleSheet.create({
		formfield: {
			marginTop: 7,
		},
	});

	return (
		<View style={{ backgroundColor: "#1D7707", height: 800 }}>
			<ScrollView>
				<ImageBackground
					source={background}
					style={{ width: 420, height: 300 }}>
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
							alignContent: "center",
							alignItems: "center",
							textAlign: "center",

							backgroundColor: "#1D7707",
							width: "100%",
							padding: 25,
							fontWeight: 600,
							fontSize: 32,
						}}>
						Welcome Back
					</Text>
				</ImageBackground>

				<FormField
					title='Email'
					value={form.email}
					handleChangeText={(e) => setForm({ ...form, email: e })}
					otherStyles={formStyles.formfield}
					keyboardType='email-address'
					style={{ marginTop: 25 }}
				/>
				<FormField
					title='password'
					value={form.password}
					handleChangeText={(e) => setForm({ ...form, password: e })}
					otherStyles={formStyles.formfield}
				/>

				{/* <Text
					style={{
						marginLeft: 35,
						marginTop: 15,
						color: "white",
						fontSize: 16,
						fontWeight: 500,
					}}>
					Remember Me
				</Text> */}
				<Text
					style={{
						marginTop: 15,
						color: "white",
						fontSize: 16,
						fontWeight: 500,
						right: -250,
					}}>
					Forgot Password ?
				</Text>

				<CustomButton
					title='Sign In'
					handlePress={() => router.push("/home")}
				/>
				<Text
					style={{
						marginTop: 15,
						color: "white",
						fontSize: 15,
						fontWeight: 500,
						margin: "auto",
					}}>
					Don’t have an account ?{" "}
					<TouchableOpacity onPress={() => router.push("/sign-up")}>
						<Text
							style={{
								marginLeft: 10,
								color: "blue",
								fontSize: 15,
								fontWeight: 500,
							}}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</Text>
				<StatusBar style='auto' />
			</ScrollView>
		</View>
	);
}
