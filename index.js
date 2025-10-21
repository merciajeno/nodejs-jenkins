
const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
    res.send({"message":"jenkins pipeline"})
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})