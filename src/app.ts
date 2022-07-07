import express, {Express, Request, Response} from "express";
import "dotenv/config";

const app: Express = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    console.log(req);
    res.send("Web Server is already running");
});

app.listen(port, () => {
    console.log(`Web Server listening on port ${port}`);
});

