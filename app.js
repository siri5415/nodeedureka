const express = require('express');
const LocalStorage = require('node-localstorage').LocalStorage;
const localstorage = new LocalStorage('./scratch');

const port = 5200;

const app = express();

app.get('/test-storage',(req,res)=>{
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2lyaSIsImVtYWlsIjoiU2lyaXNoYUBnYW1pbC5jb20iLCJjb3Vyc2UiOiJOb2RlSlMiLCJpYXQiOjE3MTE3MDU4NzEsImV4cCI6MTcxMTcwNTk2Nn0.sgrohOhNw_c5pZ1N_qxDqsqcCS-_nSSzq1j4nYh2i34`;
    localstorage.setItem('token',token);
    res.send('you can check the server local storage');
})

app.get('/get-storage', (req, res) => {
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2lyaSIsImVtYWlsIjoiU2lyaXNoYUBnYW1pbC5jb20iLCJjb3Vyc2UiOiJOb2RlSlMiLCJpYXQiOjE3MTE3MDU4NzEsImV4cCI6MTcxMTcwNTk2Nn0.sgrohOhNw_c5pZ1N_qxDqsqcCS-_nSSzq1j4nYh2i34`;
  const token = localstorage.getItem('token');
  res.send(token.toString());
})

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})