import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const background = require("../../assets/images/home.png");

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ backgroundColor: "#1D7707", height: 900 }}>
					<ImageBackground
						source={background}
						style={{ width: 420, height: 400 }}></ImageBackground>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
