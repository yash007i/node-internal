const http = require('http')
const express = require('express')

const app = express();

app.get('/',() => res.end("Home Page"))
app.get('/about-us',() => res.end("About Us Page")) // now pass app into below function than can`t write that function


const server = http.createServer(function (req, res) {
    console.log("Incoming req.");
    
    switch (req.method) {
        case 'GET':
            {
                if(req.url === '/') return res.end("Home Page");
                if(req.url === '/about-us') return res.end("About us Page");
            }
            break;
            case 'POST':
                {
                    if(req.url === '/register') return res.end("Register Page");
                    if(req.url === '/login') return res.end("Login Page");
                }
                break;
        
    }
    res.end("Res comming.")
});

server.listen(8080, () => {
    console.log("Server Started");
})


// function handlerFunction (req, res) { // pass into above function para.
//     console.log("Incoming req.");
    
//     switch (req.method) {
//         case 'GET':
//             {
//                 if(req.url === '/') return res.end("Home Page");
//                 if(req.url === '/about-us') return res.end("About us Page");
//             }
//             break;
//             case 'POST':
//                 {
//                     if(req.url === '/register') return res.end("Register Page");
//                     if(req.url === '/login') return res.end("Login Page");
//                 }
//                 break;
        
//     }
//     res.end("Res comming.")
// }