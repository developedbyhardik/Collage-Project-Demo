import {client} from '../db.js';

export const user = client.db("College_Project").collection("user");

export const session = client.db("College_Project").collection("session");