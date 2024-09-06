import CustomBackground from "@/components/CustomBackground";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function CropInsurance() {
	const background = require("../../../assets/images/home.png");
	const logo = require("../../../assets/icons/logo.png");
	const animal = require("../../../assets/icons/Vector.png");
	const crop = require("../../../assets/icons/sun.png");
	const farm = require("../../../assets/icons/Vector-2.png");

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ backgroundColor: "#1D7707", height: 900 }}>
					<ImageBackground
						source={background}
						style={{ width: 420, height: 400 }}>
						<Image source={logo} style={{ margin: "auto" }} />
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
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
