import { account, ID,storage,StoreId,Permission, Role} from '../Config/config';

export async function AddImage(file){
    try {
        console.log(storage);
        let result = await storage.createFile(
            StoreId,
            ID.unique(),
            file);
        return result;
    } catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}
export async function Preview(fileid){
    let result = await storage.getFilePreview(StoreId,fileid);
    return result;
}