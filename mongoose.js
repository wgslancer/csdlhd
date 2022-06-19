const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://wgslancer:159510tlTL@cluster0.po5j1xf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = {
  client,
};
