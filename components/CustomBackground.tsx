import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CustomBackground = ({ title, handlePress, logo }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			style={{
				height: 103,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",

				borderRadius: 15,
				marginTop: 65,
				padding: 9,
				width: 115,
			}}>
			<Image source={logo} style={{ width: 42, height: 31 }} />
			<Text
				style={{
					color: "#1D7707",
					fontWeight: 600,
					fontSize: 14,
					textAlign: "center",
				}}>
				{" "}
				{title}
			</Text>

			<StatusBar backgroundColor='white' style='dark' />
		</TouchableOpacity>
	);
};

export default CustomBackground;
