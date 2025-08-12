//This create a function that will perform asynchronous funtions and be able to use wait

async function fetchUserData() {

    //This set a const to the api source

    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // we create a refrence container so that we can later store the api data in it
    const dataContainer = document.getElementById("api-data");
    

    try {
        //this sends arequest to the api, wait for fetch to finish before storing it in response
        const response = await fetch(apiUrl);
         //since the data is a json it changes it to a javascript object or array and store results in user
          const users = await response.json();
    
     dataContainer.innerHTML = "";
       
   const userList = document.createElement ("ul");

   users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    userList.appendChild(listItem);
   });

   dataContainer.appendChild(userList);


} //Starts the catch block that will run only if something inside the try block fails — for example, if the network is down or the API URL is wrong.
       
catch (error) {
       console.log("Error fetching data:", error);

    dataContainer.innerHTML = "";

    dataContainer.textContent = "Failed to load user data."
}


    
}

document.addEventListener("DOMContentLoaded", fetchUserData);