const express = require('express')
const app = express()
const port = 3009;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

const APIs = require('./api/index');
app.use('/api', APIs);

app.use((req, res) => {
    res.status(404).json({ message: `[404] not found` })
});

app.listen(port, () => {
    console.log(`server is running on port no ${port}`)
})