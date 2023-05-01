import fetch from "node-fetch";
async function getData() {
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

     const users1 = await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    

    users.map((item) => {
        console.log(item);
    });
    users1.map((item) => {
        console.log(item);
    });
    console.log("users", users);
    console.log("users1", users1);
}



getData();