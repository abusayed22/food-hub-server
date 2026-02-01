import { app } from "./app";
import { prisma } from "../lib/prisma";
const port = process.env.PORT;
export function main() {
    try {
        prisma.$connect();
        console.log("Connented to Database Successfully!");
        app.listen(port, () => {
            console.log(`The server are successfully running on ${port}`);
        });
    }
    catch (error) {
        console.log(error);
        prisma.$disconnect();
        process.exit(1);
    }
}
//# sourceMappingURL=server.js.map