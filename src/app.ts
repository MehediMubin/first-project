import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the API',
    });
});

// global error handling middleware
app.use(globalErrorHandler);

// not found middleware
app.use(notFound);

export default app;
