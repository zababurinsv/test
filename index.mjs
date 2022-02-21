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

const port = (process.env.PORT)
    ? process.env.PORT
    : 7684
app.listen(port ,() => {
    console.log('pid: ', process.pid)
    console.log('listening on http://localhost:'+ port);
});