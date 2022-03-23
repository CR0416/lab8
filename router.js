const httpStatus = require("http-status-codes");
const htmlContentType = {
    "Content-Type": "text/html"
};
const pngContentType = {
    "Content-Type": "image/png"
};
const routes = {
    GET: {
        "/": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/index.html", res);
        },
        "/index.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/index.html", res);
        },
        "/thehungergames.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/thehungergames.html", res);
        },
        "/catchingfire.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/catchingfire.html", res);
        },
        "/mockingjay.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/mockingjay.html", res);
        },
        "/books.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
            customReadFile("views/books.html", res);
        },
       "/contact.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
            customReadFile("views/contact.html", res);
        },
        "/survey.html": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
            customReadFile("views/survey.html", res);
        },
        "/images/thehungergames.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/thehungergames.png", res);
        },
        "/images/mockingjay.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/mockingjay.png", res);
        },
        "/images/catchingfire.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/catchingfire.png", res);
        },
        "/images/library.png": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, pngContentType);
            customReadFile("public/images/library.png", res);
        },
    },
    POST: {},
};

exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};