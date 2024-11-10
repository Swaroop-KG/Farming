import express from 'express';

const app = express(); 
app.listen(3002, () => {
    console.log("Server listening at port 3002!!");
});
