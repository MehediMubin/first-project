import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.status(500).json({
        success: false,
        message: err.message,
        error: err,
    });
    next();
};

export default globalErrorHandler;
