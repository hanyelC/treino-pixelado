import Express from "express";

const app = Express();
app.use(Express.json());

const PORT = 3000;

app.use(Express.json());

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
