import CustomBack from "@/components/CustomBack";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	ImageBackground,
	ScrollView,
	Text,
	View,
	StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const background = require("../../assets/images/home.png");
	const tracker = require("../../assets/icons/map-pin.png");

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.container}>
					<ImageBackground source={background} style={styles.backgroundImage}>
						<View
							style={{
								backgroundColor: "white",
								marginTop: 265,
								marginLeft: 15,
								bottom: -15,
								width: 156,
								height: 43,
								borderRadius: 10,
								alignContent: "center",
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 13,
									fontWeight: 600,
									textAlign: "center",
									margin: "auto",
								}}>
								Explore Communities
							</Text>
						</View>
					</ImageBackground>
					<View style={styles.customBackContainer}>
						<CustomBack
							title='Thabong Farm Community'
							handlePress={() => router.push("/community")}
							place='Thabon, Maseru'
							track={tracker}
						/>
						<CustomBack
							title='Butha-Buthe Farming'
							handlePress={() => router.push("/community")}
							place='Butha-Buthe'
							track={tracker}
						/>
					</View>
					<View
						style={{
							backgroundColor: "white",
							marginTop: 65,
							marginLeft: 15,

							width: 256,
							height: 63,
							borderRadius: 10,
							alignContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 21,
								fontWeight: 600,
								textAlign: "center",
								margin: "auto",
							}}>
							Create Community
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	scrollViewContent: {
		flexGrow: 1,
	},
	container: {
		backgroundColor: "#1D7707",
		flex: 1,
	},
	backgroundImage: {
		width: "100%", // Adjusted for responsiveness
		height: 300,
		resizeMode: "cover", // Adjust image scaling
	},
	customBackContainer: {
		flexDirection: "row",
		justifyContent: "space-around", // Adjust alignment of CustomBack components
		marginVertical: 20,
	},
});
