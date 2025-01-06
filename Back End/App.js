let express = require('express');
let app = express();
let port = 9121
const dotenv = require('dotenv');
dotenv.config();
let cors = require('cors');
app.use(cors());


app.get('/',(req,res) => {
    res.send("Hiii From Express")
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})