const express = require("express")

const guestRouter = require('./routes/guestRouter')
const bookingRouter = require('./routes/bookingRouter')

require ("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const url_base = process.env.URL_BASE || '/api';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(url_base + "/guest",guestRouter)
app.use(url_base + "/booking",bookingRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});