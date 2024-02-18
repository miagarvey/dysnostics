process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to make the API call and store the response
// app.use(async (req, res, next) => {
// });

// app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Route to serve the stored response to the front end
app.post('/data', (req, res) => {
    // if (responseData) {
    //     res.json(responseData);
    //     res.render("front.html", {name:responseData});
    //     fs.writeFile('example.txt', responseData, (err) => {
    //         if (err) throw err;
    //         console.log('Data has been written to file successfully.');
    //     });
    // }

    // else {
    //     res.status(404).send('Data not found');
    // }
    const company = req.body;
    const axios = require('axios');
    let data = JSON.stringify({
        "input_variables": {
            "prompt": "Evaluate in detail " + company + " on the categories surveillance & privacy, manipulation of information & behavior, inequality, dependence on technology/the product, polarization, and one category based on the specific product of the company where it could cause potential harm in the future based on reading dystopian novels and media and referencing relevant titles."
        },
        "stream": false,
        "n": 1,
        "temperature": 0,
        "max_tokens": 2048
    });

    let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: 'https://990192fd-945a-4864-b39d-4cbed9268def.monsterapi.ai/generate',
        headers: {
            'accept': 'application/json',
            'Authorization': '************',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
            res.send(error);
        });

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

