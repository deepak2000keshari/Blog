import {ID ,databases,DatabaseId} from '../Config/config';
import { Query } from 'appwrite';

// let collectionId = '67cdccf7000690d1f506'
let collectionId = import.meta.env.VITE_APPWRITE_LIKE_ID


export async function Add(blogid= '',likeby){
    try {
       return await databases.createDocument(DatabaseId,collectionId, ID.unique(), {"id":ID.unique(),"BlogId":blogid,"LikeBy":likeby});
    }catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}

export async function Get(BlogId='',userId =''){
    try {
        if (BlogId != '' && userId == '') {
            return await databases.listDocuments(DatabaseId,collectionId,
                [
                    Query.equal('BlogId',BlogId),
                ]
            );
        } else if (BlogId != '' && userId != '') {
            return await databases.listDocuments(DatabaseId,collectionId,
                [
                    Query.equal('BlogId',BlogId),
                    Query.equal('LikeBy',userId)
                ]
            );
        }
        // else {
        //     return await databases.listDocuments(DatabaseId,collectionId);
        // }
    }catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}

export async function Delete(id){
    try {
        return await databases.deleteDocument(DatabaseId,collectionId, id);
    }catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}