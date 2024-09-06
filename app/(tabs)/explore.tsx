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

					<View
						style={{
							backgroundColor: "white",
							marginTop: 35,
							marginLeft: 15,
							bottom: -15,
							width: 166,
							height: 246,
							borderRadius: 15,
							alignContent: "center",
							alignItems: "center",
						}}>
						<Image
							source={sheep}
							style={{
								alignContent: "center",
								alignItems: "center",
								marginTop: 10,
							}}
						/>
						<Text
							style={{
								fontSize: 13,
								fontWeight: 600,
								marginLeft: -45,
								marginTop: 10,
							}}>
							Thabiso Thar
						</Text>
						<Text
							style={{
								fontSize: 13,
								fontWeight: 200,
								marginLeft: -65,
								marginTop: 1,
							}}>
							Farmer
						</Text>
						<Text
							style={{
								backgroundColor: "green",
								padding: 3,
								borderRadius: 10,
								borderColor: "black",
								color: "white",
								textAlign: "center",
							}}>
							{" "}
							Connect
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
