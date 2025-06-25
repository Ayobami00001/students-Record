const express = require('express');
const app = express()
const port = 3001









// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

let studentRecords=[
    {id:1, studentName:"paul",studentCourse:"web developer", studentLevel:"beginner"},
    {id:2, studentName:"john",studentCourse:"web developer", studentLevel:"intermediate"},
    {id:3, studentName:"jane",studentCourse:"web developer", studentLevel:"advanced"},
    {id:4, studentName:"mary",studentCourse:"web developer", studentLevel:"beginner"},
    {id:5, studentName:"peter",studentCourse:"web developer", studentLevel:"intermediate"},
    {id:6, studentName:"susan",studentCourse:"web developer", studentLevel:"advanced"},
    {id:7, studentName:"mike",studentCourse:"web developer", studentLevel:"beginner"},
    {id:8, studentName:"linda",studentCourse:"web developer", studentLevel:"intermediate"},
    {id:9, studentName:"tom",studentCourse:"web developer", studentLevel:"advanced"},
    {id:10, studentName:"alice",studentCourse:"web developer", studentLevel:"beginner"},
]
app.get("/",(req,res)=>{
    res.send(studentRecords)
});










app.listen(port, () => {
    console.log(`server is running on ${port}`)
    });