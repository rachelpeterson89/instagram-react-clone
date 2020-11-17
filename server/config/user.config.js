const mongoose = require('mongoose');

const database = "database";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log(`You are now connected ${process.env.DB_NAME}`))
    .catch(err => console.log(`Something went wrong...${err}`))