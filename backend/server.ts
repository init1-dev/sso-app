import { app } from "./src/app";

const port = process.env.PORT || 5000;

app.listen(port, () => 
    console.log(`Server listening on http://localhost:${port}`)
)