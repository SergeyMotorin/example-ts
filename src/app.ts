
import express, {Express, Request, Response} from "express";
import "dotenv/config";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Web Server is already running")
});



