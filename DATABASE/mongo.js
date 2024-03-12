const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-login-tut')

.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log('failed');
});