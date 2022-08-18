import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://wais:TNUQSaUC5lb0Mcyo@cluster0.pknnx6q.mongodb.net/auth-demo?retryWrites=true&w=majority"
    );
    return client;
  } catch (error) {
    console.log("db: " + error);
  }
}
