const port = 3000,
http = require("http");
const router = require("./router");
fs = require('fs');
httpStatus= require("http-status-codes");
const plainTextCT = {
    "Content-Type": "text/plain",
};
const htmlCT = {
    "Content-Type": "text/html",
};
const pngCT = {
    "Content-Type": "image/png"
};

router.get("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/home.html", res);
});
router.get("index.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/index.html", res);
});
router.get("/books.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/books.html", res);
});
router.get("/thehungergames.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/thehungergames.html", res);
});
router.get("/catchingfire.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/catchingfire.html", res);
});
router.get("/mockingjay.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/mockingjay.html", res);
});
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/contact.html", res);
});
router.get("/survey.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlCT);
    customReadFile("views/survey.html", res);
});
router.get("/images/book.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngCT);
    customReadFile("public/images/book.png", res);
});
router.get("/images/thehungergames.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngCT);
    customReadFile("public/images/thehungergames.png", res);
});
router.get("/images/catchingfire.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngCT);
    customReadFile("public/images/catchingfire.png", res);
});
router.get("/images/mockingjay.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngCT);
    customReadFile("public/images/mockingjay.png", res);
});
router.get("/images/library.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, pngCT);
    customReadFile("public/images/library.png", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextCT);
    res.end("POSTED");
});
const app = http.createServer(router.handle);
app.listen(port)                                                                                                                                                                                                                           
console.log(                                                                                                                                                                                                                                
    `the server has started and is litening on port number: ${port}` );                                                                                                                                                                      

customReadFile= (file_path, res) => {
    fs.readFile(`./${file_path}`, (errors, data) => {
        if (errors) {
            console.log("Error reading file");
        }
        res.end(data);
    });
};
                                                                      