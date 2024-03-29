const express = require('express');
const app = express();

const port = 3000;
const sass = require('node-sass');
// const fs = require('fs');
// const path = require('path');
var router = express.Router()

app.use(express.static(process.cwd()+'/public/'));
app.use(express.static(process.cwd()+'/src/'));


app.get('/',(req,res)=>{
  res.sendFile(process.cwd() + '/public/tictactoe.html' );
});

// sass.render({
//     // file or data must be specified. In this case we're telling node-sass there's a SCSS file at source/style.scss
//     file: process.cwd()+'public/stylesheets/simon.scss'
//   },
//   // node-sass supports standard nod e style asynchronous callbacks with the signature of function(err, result).
//   // In error conditions, the error argument is populated with the error object.
//   // In success conditions, the result object is populated with an object describing the result of the render call.
//   (error, result) => {
//     if (!error) {
//       // Asynchronously writes data to a file, replacing the file if it already exists.
//       // In this case the file it's writing to is at `public/style.css`
//       // The `result` object contains `css`, the compiled CSS. This is what's written to the style.css file
//       fs.writeFile(process.cwd()+'public/stylesheets/simon.css', result.css.toString(), error => {
//         if (error) {
//           console.log(error,"sass write error");
//         }
//       })
//     }
//   }
// );



var listener = app.listen(port,()=>{
  console.log("Listening on "+ port)

})
