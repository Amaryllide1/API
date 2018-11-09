import express from 'express';
import routers from './Route/api';

const app = express();
app.use(express.json());
app.use('./api', routers);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;
