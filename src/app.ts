import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../lib/auth';
import notFound from './middleware/error/notFound';
import errorHandler from './middleware/error/globalErrorHandler';

const app = express()
const port = process.env.PORT 


app.use(cors({
    origin: ["http://localhost:3000"], // আপনার ফ্রন্টএন্ডের URL
    credentials: true, // এটা true না দিলে লগইন হবে না (কুকি ব্লক হবে)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));



app.use(express.json());


// better auth
app.all('/api/auth/{*any}', toNodeHandler(auth));


// Routes 
app.use("/")


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})







// not found error
app.use(notFound);

// global error handler
app.use(errorHandler);

export {app}