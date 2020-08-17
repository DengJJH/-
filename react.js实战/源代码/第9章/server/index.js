import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
// 服务端是没有BrowserRouter 所以用StaticRouter
import { StaticRouter, matchPath } from 'react-router-dom';
// 引入renderToString
import { renderToString } from 'react-dom/server';
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// 引入antd css
// import 'antd-mobile/dist/antd-mobile.css';

import App from '../src/App';
import routes from '../src/routes';

// 处理css
// import csshook from 'css-modules-require-hook/preset';
// 处理图片
// import assethook from 'asset-require-hook';
// assethook({
//     extensions: ['png', 'jpg']
// });

const app = express();
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());
// app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/*', (req, res) => {
    const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
    const promise = currentRoute.fetchData ? currentRoute.fetchData() : Promise.resolve(null);

    promise.then(data => {
        const context = {
            data,
        };

        const renderedString = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App></App>
            </StaticRouter>
        );
        // 新建骨架
        const _frontHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>React Server Side Rendering</title>
            </head>
            <body>
                <div id="root">${renderedString}</div>
                <script>window.__ROUTE_DATA__ = ${JSON.stringify(data)}</script>
                <script src="/app.js"></script>
            </body>
            </html>`
        
        res.send(_frontHtml);
    }).catch(error => {
        console.log('server.catch', error);
    });
});

// app.listen(9000);

app.listen("9000", function () {
    console.log("open Browser http://localhost:9000");
});