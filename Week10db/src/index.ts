//Write a function to create a users table in your db
import { Client } from "pg";
const client = new Client({
    connectionString: "postgresql://LittleLampDb_owner:Aliy1V4pRnSU@ep-silent-flower-a17mjjr4.ap-southeast-1.aws.neon.tech/LittleLampDb?sslmode=require"
})
client.connect()
//Create the table
async function createUsersTable() {
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}
//createUsersTable()

async function insertData(username: string, email: string, password: string) {

    //Insecure way you should not put data directly into db which got from user. someone can do SQL INJECTION
    // const res =  await client.query(`
    //     INSERT INTO users (username,email,password)
    //     VALUES ('username1','user1@example.com','user_password');
    // `)
    // console.log("Insertion success",res);

    //So final way to do it 
    const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1, $2, $3)`;
    //here dollar represent the postion in array 
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res);
}
//insertData("username2","user2@example.com","user2_password")

//Query data
//Write a function getUser that lets you fetch data from the database given a email as input.
async function getUser(email: string) {
    const query = `SELECT * FROM users WHERE email = $1`
    const values = [email];
    const result = await client.query(query, values);
    if (result.rows.length > 0) {
        console.log("User found:", result.rows[0]);

    } else {
        console.log("No user found with the given email.");

    }
}
// getUser("user1@example.com")


//Relationships 
//there is not object in table so we need to create another table and relate it with another table 

async function createAddressTable() {
    const result = await client.query(`
            CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `)
    //the last line do relate the table to the another table
    console.log(result)
}
//createAddressTable()

async function insertAddress(user_id: number, street: string, city: string, country: string, pincode: number) {
    const insertaddressQuery = `INSERT INTO addresses (user_id,street,city,country,pincode) VALUES ($1, $2, $3, $4, $5);`
    const address = await client.query(insertaddressQuery, [user_id, street, city, country, pincode]);
    console.log("Address Insertion successful", address)
}
// insertAddress(1,"123 Broadway St","New York","USA",10001);

//study transaction 
async function insertDataModified(username: string, email: string, password: string, street: string, city: string, country: string, pincode: number) {
    try {
        await client.query("BEGIN");
        //insert user
        const insertUserQuery = `INSERT INTO users (username,email, password)
    VALUES ($1,$2,$3)jjj
    RETURNING id;`
        const user = await client.query(insertUserQuery, [username, email, password]);
        const userId = user.rows[user.rows.length - 1].id;//get id 
        //insert address using the userId
        const insertAddressQuery = `INSERT INTO addresses (user_id, city, country, street ,pincode )
VALUES ($1, $2, $3, $4, $5);`
        await client.query(insertAddressQuery, [userId, city, country, street, pincode]);
        //COMMIT THE TRANSACTION
        await client.query("COMMIT")
        console.log("user and address inserted succesfully");
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("Error during transaction ", error)
    }






}

// insertDataModified(
//     'johndoe', 
//     'john.doe@example.com', 
//     'securepassword123', 
//     'New York', 
//     'USA', 
//     '123 Broadway St', 
//     10001
// );

//joins
//relationship is easy 
//joining data from 2 or more table is hard
//above we done to query in one function
//join reduces the query operations which make app faster 
//
async function getUserDetailsWithAddress(userId: string) {
    const query = `SELECT u.id,u.username,u.email,a.city,a.country,a.pincode
                    FROM users u
                    JOIN addresses a ON u.id = a.user_id
                    WHERE u.id = $1`
    const result = await client.query(query, [userId]);
    if (result.rows.length > 0) {
        console.log('User and address found:', result.rows[0]);

    } else {
        console.log("NO user or address found with the given ID.");

    }

}
//getUserDetailsWithAddress("1")
