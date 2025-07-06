import conf from "../conf/conf"

import { Client, ID, Databases, Storage, Query } from "appwrite"


export class Service {
    client = new Client() ;
    databases ;
    bucket ;

    constructor ()
    {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
        this.databases = new Databases(this.client) ;
        this.bucket = new Storage(this.client) ;


    }


    async createPost ({title, slug, content, featuredImage, status, userID })
    {
        try {
                return await this.databases.createDocument(
                    conf.appwriteDATABASEId,
                    conf.appwriteCOLLECTIONId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userID
                    }
                ) ;
        } catch (error) {
                console.log(`Appwrite servie :: createPost :: error`, error);
                
        }
    }


    async updatePost ({slug, content, featuredImage, status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDATABASEId,
                conf.appwriteCOLLECTIONId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(`Appwrite service :: updatePost :: error `, error);
            
        }
    }

    async delatePost (slug)
    {
        try {
            await this.databases.deleteDocument(
                    conf.appwriteDATABASEId,
                    conf.appwriteCOLLECTIONId,
                    slug,

                )
                return true ;
        } catch (error) {
                console.log(`Appwrite service :: deletePost :: error`, error);
                
                return false ;
        }
    }

    async getPost (slug)
    {
        try {
            return await this.databases.getDocument(
                conf.appwriteDATABASEId,
                conf.appwriteCOLLECTIONId,
                slug
            )
        } catch (error) {
            console.log(`Appwrite service :: getPost :: error`, error);
            
        }
    }

    async getPosts (queries = [Query.equal("status", "active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDATABASEId,
                conf.appwriteCOLLECTIONId,
                queries,
            )
        } catch (error) {
            console.log(`Appwrite service :: getPosts :: eooro`, error);
            return false ;
            
        }
    }

    
    // file upload  services 

    async uploadFile (file)
    {
        try {
            return await this.bucket.createFile (
                conf.appwriteBUCKETId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`Appwrite service :: uploadFile :: error` , error);
            
        }
    }

    async deleteFile (fileId)
    {
        try {
             await this.bucket.deleteFile
             (

                 conf.appwriteBUCKETId,
                 fileId
                )
            
            return true ;
        } catch (error) {
            console.log(`Appwrite service :: deleteFile :: error`, error);
                return false ;
        }   
    }

    getFilePreview (fileId)
    {
        return this.bucket.getFilePreview(
            conf.appwriteBUCKETId,
            fileId
        )
    }

}

const service = new Service() ;
 export default service ;


