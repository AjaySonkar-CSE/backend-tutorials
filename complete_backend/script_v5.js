// form handling and working with the forms

// handle backend process of forms and  making sure the data coming from any frontend lib, fw, templating engines
//  we still handle it at the backend

// session || cookie



const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

