const express =  require("express");
const app = express();

//QUERY PARAMETER

//browser ka url (query parameter =====   key=value)
// localhost:5656/profile?key=value

// multiple queries

// /profile?key=value&key2=value2

//jo browser ke url se get request hi jaa skti hai ONLY

// app.get("/profile",(req,res)=>{
//     const{username,age} = req.query;
//     console.log(username);
//     res.send("profile page of " + username +" "+ age);
// })

// PARAMS

//  "/profile/:id"

// multilpe params
// "profile/id/username"

// app.get("/profile/:id",(req,res)=>{
//     const {id} = req.params;
//     console.log(id);
//     res.send("profile page of user "+ " "+ id)
// })

// app.get("/profile/:id/:username",(req,res)=>{
//     const {id,username} = req.params;
//     console.log(id);
//     res.send("profile page of user "+ " "+ id+" "+username)
// })

// app.listen(5656,()=>{
//     console.log("server started.......!")
// })

//continue query parameter
// let userData =[
//     (
//         id:2,
//         name:"ritik",
//         address:"Delhi"
//     ),
//     (
//         id:3,
//         name:"nitesh" ,
//         address:"pakistan"
//     ),
//     (
//         id:4,
//         name:"parth",
//         address:"mumbai"
//     )
    
// ]

// app.get("/alluser",(req,res)=>{
//     res.send(userData)
// })


// homework
// create a route to read all blogs
// create a bigdata array to store 
// create a route to send one blog bu id
// create a route to delete a blog by id 



// create rout e to delete user by id

// Sample users data (in-memory)
let users = [
    { id: 1, 
      name: 'John Doe' 
    },
    { id: 2, 
      name: 'Jane Smith' 
    },
    { id: 3, 
      name: 'Alice Johnson' 
    }
];

// Middleware to parse JSON request body (if needed for future use)
app.use(express.json());

// Route to delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    // Find the user by ID
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user from the array
    users.splice(userIndex, 1);

    return res.status(200).json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get("/deleteuserbyid",(req,res)=>{
    res.send()
})




