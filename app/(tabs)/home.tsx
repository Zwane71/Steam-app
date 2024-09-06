import CustomBackground from "@/components/CustomBackground";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, View, Image, Text } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBack from "@/components/CustomBack";

export default function Index() {
	const background = require("../../assets/images/home.png");

	const animal = require("../../assets/icons/Vector.png");
	const crop = require("../../assets/icons/sun.png");
	const farm = require("../../assets/icons/Vector-2.png");
	const logo = require("../../assets/icons/logo.png");
	const tracker = require("../../assets/icons/map-pin.png");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style='auto' />
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={{ backgroundColor: "#1D7707", flex: 1 }}>
					<ImageBackground
						source={background}
						style={{ width: "100%", height: 400 }}>
						<Image
							source={logo}
							style={{
								alignItems: "center",
								justifyContent: "center",
								margin: "auto",
							}}
						/>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								gap: 20,
								position: "absolute",
								bottom: -49,
								marginLeft: 15,
							}}>
							<CustomBackground
								title='Animal Health Insurance'
								handlePress={() => router.push("/animal-insurance")}
								logo={animal}
							/>
							<CustomBackground
								title='Crop Insurance'
								handlePress={() => router.push("/insurance")}
								logo={crop}
							/>
							<CustomBackground
								title='Farm Equipment Insurance'
								handlePress={() => router.push("/farm-insurance")}
								logo={farm}
							/>
						</View>
					</ImageBackground>
					<Text
						style={{
							marginTop: 105,
							marginLeft: 25,
							fontSize: 25,
							fontWeight: 600,
							color: "white",
						}}>
						Communities
					</Text>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<CustomBack
							title='Thabong Farm Communty'
							handlePress={() => router.push("/community")}
							place='Thabon,Maseru'
							track={tracker}
						/>
						<CustomBack
							title='Butha-Buthe Farming'
							handlePress={() => router.push("/community")}
							place='Butha-Buthe'
							track={tracker}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
