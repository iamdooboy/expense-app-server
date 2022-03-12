const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.json({
        msg: err?.message,
        stack: process.env.NODE_ENV === 'production' ? null : err?.stack,
    });

    res.status(statusCode);
};

const notFound = (req, res, next) => {
    const error = new Error(`Page not found - ${req?.originalUrl}`);
    res.status(404);
    next(error);
};

export { errorHandler, notFound };
