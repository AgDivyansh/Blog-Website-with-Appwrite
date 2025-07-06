const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

};




// VITE_APPWRITE_PROJECT_ID = "685ba629000454ae685c"
// VITE_APPWRITE_DATABASE_ID = "685ba7a40017cc8fc95a"
// VITE_APPWRITE_COLLECTION_ID = "685ba81000368356ca92"
// VITE_APPWRITE_BUCKET_ID = "685bc92c000135ab1895"

export default conf;