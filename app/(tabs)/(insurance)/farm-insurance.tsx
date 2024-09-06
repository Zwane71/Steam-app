import CustomBackground from "@/components/CustomBackground";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	ImageBackground,
	ScrollView,
	Text,
	View,
	Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FarmInsurance() {
	const background = require("../../../assets/images/home.png");
	const farm = require("../../../assets/icons/Vector-2.png");
	const { width } = Dimensions.get("window");

	return (
		<SafeAreaView>
			<StatusBar style='light' />
			<ScrollView>
				<View style={{ backgroundColor: "#1D7707", height: 900 }}>
					<ImageBackground source={background} style={{ width, height: 400 }}>
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
