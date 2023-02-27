require("dotenv").config();
const express = require('express');

const {
  getReviewMeta,
  getReviews,
  postReview,
  updateReviewReport,
  updateReviewHelpfulness} = require('./controller.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/reviews/meta/', getReviewMeta);
app.get('/reviews/', getReviews);
app.post('/reviews', postReview);
app.put('/reviews/:review_id/report', updateReviewReport);
app.put('/reviews/:review_id/helpful', updateReviewHelpfulness);
app.get('/loaderio-bc70e5778afdb5e2af98b094fe15b402.txt', (req, res) => {
  res.sendFile('loaderio-bc70e5778afdb5e2af98b094fe15b402.txt', {root:__dirname});
})

const server = app.listen(process.env.PORT, () => {
  console.log('Listening to port ', process.env.PORT)
  console.log('DB ', process.env.DB_HOST)
});

module.exports = server;
