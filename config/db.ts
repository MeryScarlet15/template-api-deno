import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const DB_TYPE: string = "mongodb";
const DB_URL: string = "localhost:27017";
const DB_NAME: string = "meryHooks";
const COMPLETE_URL = `${DB_TYPE}://${DB_URL}/${DB_NAME}`;

export const client = new MongoClient();
export const database = client.database(DB_NAME);

export const createDBConnection = () => {
  return client.connectWithUri(COMPLETE_URL);
};
