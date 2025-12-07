import {Account, Client, Databases,Storage} from "appwrite";

export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
};

// Connect to Appwrite project
export const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

// Services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
