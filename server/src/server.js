import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './grapghql'
let app = express();

mongoose.connect('mongodb+srv://demo:demo@cluster0-8plem.mongodb.net/server?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection.once('open', () => {
    console.log('db connected')
});


app.use(cors());

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use((req, res) => {
    res.status(404).json({
        errors: { global: "Page Not Found." }
    })
});

let port = 4000
app.listen(port, () => console.log('Running on localhost:' + port))