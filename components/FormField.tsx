import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
} from "react-native";

const FormField = ({
	title,
	value,
	placeholder,
	handleChangeText,
	otherStyles,
	...props
}) => {
	const eye = require("../assets/icons/eye.png");
	const show = require("../assets/icons/eye-hide.png");

	const [showPassword, setShowPassword] = useState(false);

	return (
		<View style={[styles.container, otherStyles]}>
			<Text style={styles.title}>{title}</Text>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7B7B8B'
					onChangeText={handleChangeText}
					secureTextEntry={title === "Password" && !showPassword}
					{...props}
				/>

				{title === "Password" && (
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image
							source={!showPassword ? eye : show}
							style={styles.icon}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 55,
		marginBottom: -1, // space-y-2 (spacing between elements)
		marginLeft: 75,
	},
	title: {
		fontSize: 16, // text-base
		color: "#F5F5F5", // text-gray-100
		fontWeight: "500", // font-pmedium
	},
	inputContainer: {
		width: "80%",
		height: 54, // h-16 (height of 16*4)
		paddingHorizontal: 16, // px-4
		backgroundColor: "white", // bg-black-100

		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		flex: 1,
		color: "black", // text-white
		fontWeight: "600", // font-psemibold
		fontSize: 16, // text-base
	},
	icon: {
		width: 24, // changed to make the icon more visible
		height: 24,
		color: "black",
	},
});

export default FormField;
