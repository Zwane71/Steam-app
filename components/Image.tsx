import { StatusBar } from "expo-status-bar";
import { Image, Text, View, StyleSheet } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function ImageBackground() {
	return (
		<SafeAreaView>
			<Image
				source={require("../assets/images/truck.jpeg")}
				style={{ width: "full", height: 450 }}
				resizeMode='contain'
			/>
		</SafeAreaView>
	);
}
