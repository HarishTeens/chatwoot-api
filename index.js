import Express from "express";
import Routes from "./routes.js";
import cors from "cors";

const app = Express();
app.use(Express.json());

// Please modify this to your own domain
const whitelist = ['http://example1.com', 'http://example2.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

app.use(Routes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});