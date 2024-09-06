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
import { Link, Redirect, router } from "expo-router";
import { createUser } from "../../lib/appWrite";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
	const logo = require("../../assets/icons/logo.png");
	const background = require("../../assets/images/truck.jpeg");

	const { setUser, setIsLogged } = useGlobalContext();

	const [isSubmitting, setSubmitting] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const formStyles = StyleSheet.create({
		formfield: {
			marginTop: 7,
		},
	});

	const submit = () => {
		createUser;
	};
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
					title='Username'
					value={form.email}
					handleChangeText={(e) => setForm({ ...form, email: e })}
					otherStyles={formStyles.formfield}
					keyboardType='email-address'
					style={{ marginTop: 25 }}
				/>
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
				<CustomButton
					title='Sign Up'
					handlePress={submit}
					isLoading={isSubmitting}
				/>
				<View className='flex justify-center pt-5 flex-row gap-2'>
					<Text className='text-lg text-gray-100 font-pregular'>
						Have an account already?
					</Text>
					<Link
						href='/sign-in'
						className='text-lg font-psemibold text-secondary'>
						Login
					</Link>
				</View>

				<StatusBar style='auto' />
			</ScrollView>
		</View>
	);
}
function useGlobalContext(): { setUser: any; setIsLogged: any } {
	throw new Error("Function not implemented.");
}
