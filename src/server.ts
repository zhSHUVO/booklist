import { Server } from "http";
import app from "./app";
import config from "./config";

let server: Server;

async function main() {
    try {
        server = app.listen(config.port, () => {
            console.log(
                "\x1b[32m%s\x1b[0m",
                `Server is listening on port ${config.port}`
            );
        });
    } catch (error) {
        console.log("\x1b[31m%s\x1b[0m", `Database connection error, ${error}`);
    }
}

main();
