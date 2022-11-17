import Builder from "../../src/components/Builder";

const data = Builder.buidedForm;
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "myProject";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const insertResult = await collection.insertMany([{ data }]);
  console.log("Inserted documents =>", insertResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
