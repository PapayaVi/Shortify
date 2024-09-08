const app  = require("./api/index")
require('dotenv').config()


const port = process.env.PORT;
app.listen(port, ()=>{
        // console.log('Server is now live at --- %chttp://localhost:'+port, 'background: #222; color: #bada55'); //chrome
        console.log('Server is now live at --- \u001b[1;32m http://localhost:'+port)
})