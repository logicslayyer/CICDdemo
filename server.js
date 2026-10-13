// import express from "express";

// const app = express();
// const PORT = 8000;


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;
    res.json({ sum: parseInt(a) + parseInt(b) });
    
})