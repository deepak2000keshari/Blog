
import { Client,Databases, Account,Storage} from 'appwrite';
export const client = new Client();

let ProjectId = import.meta.env.VITE_APPWRITE_PROJECT
let Endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT
let DatabasesId =  import.meta.env.VITE_APPWRITE_DATABASE_ID
let StorageId = import.meta.env.VITE_APPWRITE_BUCKET_ID
// let ProjectId = '67bb792800026ff5ac16';
// let Endpoint = 'https://cloud.appwrite.io/v1';
// let DatabasesId = '67cdcce000168f2ce71f';
// let StorageId = '67cdcf690002ca936460';

client
    .setEndpoint(Endpoint)
    .setProject(ProjectId); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const DatabaseId = DatabasesId;
export const StoreId = StorageId;
export { ID, Permission, Role} from 'appwrite';
