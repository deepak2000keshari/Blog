import {ID ,databases,DatabaseId} from '../Config/config';
import { Query } from 'appwrite';

// let collectionId = '67cdccf7000690d1f506'
let collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID
// let  databasesiD = '67cdcce000168f2ce71f'

export async function Add(Title,Description,Image,user){
    try {
    return await databases.createDocument(DatabaseId,collectionId, ID.unique(), {"Id":ID.unique(),"Title":Title,"Context":Description,"ImageId":Image,"UserId":user});
    }catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}
export async function Get(id='',userId= ''){
    try {
        if (id) {
            return await databases.getDocument(DatabaseId,collectionId,id);
        } else if (userId) {
            return await databases.listDocuments(DatabaseId,collectionId,
                [
                    Query.equal('UserId', userId)
                ]
            );
        }
        else {
            return await databases.listDocuments(DatabaseId,collectionId);
        }
    }catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}

export async function Update(docid,Id,Title,Description,Image,user){
    return await databases.updateDocument(DatabaseId,collectionId,docid,{"Title":Title,"Context":Description,"ImageId":Image,"UserId":user});
}

export async function Delete(id){
    return await databases.deleteDocument(DatabaseId,collectionId, id);
}