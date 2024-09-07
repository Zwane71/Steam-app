import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, Text, View, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Background({ icon, title, position }) {
	return (
		<View>
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
					source={icon}
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
					{title}
				</Text>
				<Text
					style={{
						fontSize: 13,
						fontWeight: 200,
						marginLeft: -65,
						marginTop: 1,
					}}>
					{position}
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
	);
}
