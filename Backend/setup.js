const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/usersdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple schema and model
const exampleSchema = new mongoose.Schema({
  name: String,
});

const Example = mongoose.model('myapp', exampleSchema);

// Create a new document to ensure the collection is created
Example.create({ name: 'Example' })
  .then(() => {
    console.log('Database and collection created successfully.');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error creating database and collection:', err);
  });
