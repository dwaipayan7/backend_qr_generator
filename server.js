import express from 'express';
import appRoutes from './routes/app.routes.js';

const app = express();
app.use(express.json());

app.use('/api', appRoutes);

app.get('/', (req, res)=>{
    res.send('Dwaipayan');
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})