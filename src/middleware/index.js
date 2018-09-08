import express from 'express';
import Router from 'express';


/**
 *  Return Middleware Route list
 */
export default () => {
    let routes = Router();

    routes.use(function (req, res, next) {
        console.log('Time:', Date.now())
        next()
    })
    return routes;
}