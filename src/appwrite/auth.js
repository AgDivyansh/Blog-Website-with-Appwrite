import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

{

    // const client = new Client()
    //     .setEndpoint('https://nyc.cloud.appwrite.io/v1') // from VITE_APPWRITE_URL
    //     .setProject('685ba629000454ae685c'); // from VITE_APPWRITE_PROJECT_ID

    // const account = new Account(client);


    // const user = await account.create(
    //     ID.unique(),
    //     'email@example.com',
    //     'password'
    // ) ;

    // Replace '[USER_ID]' and '' with actual values if needed
    // const promise = account.create(ID.unique(), 'email@example.com', 'yourPasswordHere');

    // promise.then(function (response) {
    //     console.log(response); // Success
    // }, function (error) {
    //     console.log(error); // Failure
    // });

}


// export by creating class in js . 

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another menthod 
                // return userAccount
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }

        } catch (error) {
            throw error;

        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // throw error ;
            console.log(`Appwrite service :: getCurrentUser :: error`, error);

        }
        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions('current');
        } catch (error) {
            // throw error ;
            console.log(`Appwrite services :: logout :: error`);

        }
    }
}
const authService = new AuthService();

export default authService;