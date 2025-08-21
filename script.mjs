// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3,
    };
    let finaldata = {};
    let username = "";
    let website = "";
    let company = "";
    try{
        if (id >= 1 && id<= 10 && typeof id=='number') {
        const returneddb = await central(id);
        console.log(returneddb);

        const returnedName = await dbs[returneddb](id);
        username = returnedName.username;
        website = returnedName.website;
        company = returnedName.company;
        // console.log(username);
        // console.log(website);
        // console.log(company);
        finaldata.id = id;
        finaldata.username = username;
        finaldata.website = website;
        finaldata.company = company;
        const returnedUserInfo = await vault(id);
        let name = returnedUserInfo.name;
        // console.log(name);
        finaldata.name = name;
        let email = returnedUserInfo.email;
        // console.log(email);
        finaldata.email = email;
        let address = returnedUserInfo.address;
        // console.log(address);
        finaldata.address = address;
        let phone = returnedUserInfo.phone;
        // console.log(phone);
        finaldata.phone = phone;
        // console.log("finaldata is in function is", finaldata);
    } 
    else {
        throw new Error("Id should be a number between 1 and 10 only.")
    }
    return finaldata;
    // console.log(dbs.db1);
}catch(Error){
    console.error(Error.message);
    process.exit();
}
}

async function main(){
let returnedData = {};

returnedData =await getUserData(8);
console.log("finaldata is", returnedData);
}
main();