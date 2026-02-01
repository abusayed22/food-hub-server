import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../lib/auth';
import notFound from './middleware/error/notFound';
import errorHandler from './middleware/error/globalErrorHandler';
import { mealsRoute } from './modules/meals/meal.route';
import authMiddleware from './middleware/auth/authMiddleware';
import { categoryRoute } from './modules/category/category.route';
import { orderRoute } from './modules/orders/orders.route';
import { Role } from './constants/role.type';
import { adminRoute } from './modules/admin/admin.route';

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
// app.all("/api/auth/*", toNodeHandler(auth));


// Routes 
app.use("/api/meals",mealsRoute)
app.use("/api/categories",categoryRoute)
app.use("/api/orders",orderRoute)

// provider routes
app.use("/api/provider/meals",authMiddleware(Role.provider),mealsRoute)
app.use("/api/provider/orders",authMiddleware(Role.provider),orderRoute)

// admin routes
app.use("/api/admin/users",authMiddleware(Role.admin),adminRoute)


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