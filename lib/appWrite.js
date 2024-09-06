import { Account, Client } from "react-native-appwrite";

export const appWriteConfig = {
	endpoint: "https://cloud.appwrite.io/v1",
	platform: "com.zwane71.umlimi",
	projectId: "66dae52300314889feaf",
	databaseId: "66db204c002dfcde8c03",
	userCollectionId: "66db2086001a28789e2c",
	storageId: "66db23070031862ed278",
};

// Init your React Native SDK
const client = new Client();

client
	.setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
	.setProject(appWriteConfig.projectId) // Your project ID
	.setPlatform(appWriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
	// Register User
	account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
		function (response) {
			console.log(response);
		},
		function (error) {
			console.log(error);
		}
	);
};
