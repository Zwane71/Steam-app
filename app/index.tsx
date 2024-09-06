import { StatusBar } from "expo-status-bar";
import { Image, Text, View, StyleSheet } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import ImageBackground from "@/components/Image";

export default function Index() {
	return (
		<SafeAreaView>
			<View
				className=' bg-green-800  '
				style={{ backgroundColor: "#1D7707", height: 900 }}>
				<ImageBackground />

				<CustomButton
					title='Sign In'
					handlePress={() => router.push("/sign-in")}
				/>
			</View>

			<StatusBar style='auto' />
		</SafeAreaView>
	);
}
