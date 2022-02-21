import express from "express";
import cors from 'cors'
let app = express()

app.use(express.json())
app.use(cors({ credentials: true }));

app.use(express.static('static', { dotfiles: 'allow' } ));
// app.options('/*', cors(corsOptions))
app.get('/*', (req, res) => {
    console.log('~~~~~~~~~ any ~~~~~~~~~', req.path)
    // res.sendFile('./index.html');
});

// app.options('/*', cors(corsOptions))
app.post('/*',async (req, res) => {
    console.log('~~~~~~~~~ any post ~~~~~~~~~', req.path)
    res.send({key:"value"});
})

let httpPort = 7684

app.listen(httpPort, () => {
    console.log(`HTTPS Server running on port 80-${httpPort}`);
})

// httpsServer.listen(httpsPort,() => {
//     console.log(`HTTPS Server running on port 443-${httpsPort}`);
// });
