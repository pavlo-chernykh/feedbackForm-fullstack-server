const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/user.routes');
const feedbackRouter = require('./routes/feedback.routes');

const PORT = process.env.PORT || 8080;
const app = express();
const corsOptions = {origin: process.env.URL || '*'};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', userRouter)
app.use('/api', feedbackRouter)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))