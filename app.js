const { default: axios } = require('axios');
const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 4000;

app.get('/search/repositories', (req, res) => {

    axios.get('https://api.github.com/search/repositories?q=' + req.query.q)
        .then(response => {
            res.status(200).send({
                msg: "success",
                data: response.data
            });
            console.log(res);  
        })
        .catch(err => {
            res.send('oops! error occurred!');
            console.log(err);
        })

})

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})