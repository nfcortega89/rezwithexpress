const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/send', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nfcortega89@gmail.com',
      pass: 'Ilovesoda007'
    }
  });
  const mailOptions = {
    from: `${req.body.email}`,
    to: 'nfcortega89@gmail.com',
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
