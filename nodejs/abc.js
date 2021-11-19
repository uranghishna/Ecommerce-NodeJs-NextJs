// const { request, response } = require("express");

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// const blogs = [
//     { id: 1, title: "Belajar Laravel" },
//     { id: 2, title: "Belajar ReactJs" },
//     { id: 3, title: "Belajar Express" },
// ];

// app.get("/", (request, response) => {
//     response.send({
//         title: "hello world"
//     })
// });


// //get blog
// app.get("/blogs", (req, res) => {
//     res.send({
//         blogs,
//     });
// });


// //create blog
// app.post("/blog", (req, res) => {
//     const {title} = req.body
    
//     //validasi
//     if(!title){
//         return res.send({
//             error: true,
//             message: "Harus input title"
//         });
//     }
//     const ids = blogs.map((blog) => +blog.id);

//     const latestId = Math.max(...ids)

//     const newBlog = {
//         id: latestId + 1,
//         title,
//     };

//     blogs.push(newBlog);

//     res.send({
//         status: "success",
//         blog: newBlog,
//     })
// });


// //update blog
// app.patch("/blog/:id", (req, res) => {
//     const {id} = req.params;
//     const {title} = req.body;
//     const idIndex = blogs.findIndex((blog) => blog.id === +id);
//     if(idIndex == -1){
//         res.send({
//             error: true,
//             message: "id tidak ditemukan",
//         });
//     }
//     blogs.splice(idIndex, 1, {
//         id: +id,
//         title,
//     });
//     res.send({
//         status: "success",
//         message: "berhasil update",
//     });
// });


// //delete blog
// app.delete("/blog/:id", (req, res) =>{
//     const {id} = req.params;

//     const idIndex = blogs.findIndex((blog) => blog.id === +id);

//     blogs.splice(idIndex, 1);

//     res.send({
//         status: "success",
//         message: "berhasil hapus",
//     });
// })

// app.listen(port, () => {
//     console.log(`aplikasi anda di port ${port}`);
// });