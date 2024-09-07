import Background from "@/components/CommunityBackgroun";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, Text, View, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const background = require("../../assets/images/home.png");
	const logo = require("../../assets/icons/logo.png");
	const sheep = require("../../assets/images/image1.png");
	const white = require("../../assets/images/farmer2.png");
	const black = require("../../assets/images/farmer1.png");
	const farm = require("../../assets/images/image.png");

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ backgroundColor: "#1D7707", height: 900 }}>
					<ImageBackground
						source={background}
						style={{ width: 420, height: 300 }}>
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
					<View style={{ display: "flex", flexDirection: "row" }}>
						<Background icon={sheep} title='Thabiso Thar' position='Farmer' />
						<Background icon={white} title='Tankiso Mat' position='Investor' />
					</View>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<Background icon={black} title='Thato nk' position='Farmer' />
						<Background icon={farm} title='thu uom' position='Investor' />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
