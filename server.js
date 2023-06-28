const express = require('express');
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

// app.set("views", path.join(__dirname, "views"));

//  connect css files and js files 
app.use(express.static("public"));



app.get('/',(req,res)=>{
    res.redirect('home');
});


app.get("/home", (req, res) => {
  res.render('home');
});








app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`);
});






