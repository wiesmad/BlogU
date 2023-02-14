const express = require('express');
const app = express();
require('dotenv').config();
require('./config/dbConnect');
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const commentRoutes = require('./routes/commentRoutes');
const viewRoutes = require('./routes/viewRoutes');

app.set('view engine', 'ejs');

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/users', viewRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/comments', commentRoutes);
app.use('/api/v1/categories', categoryRoutes);

//Error handlers middleware
app.use(globalErrorHandler);

//404 erorr
app.use('*', (req, res) => {
  res.status(404).json({
    error: `${req.originalUrl} - Page not found!`,
  });
});

//Listen to server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server run ${port}`);
});
