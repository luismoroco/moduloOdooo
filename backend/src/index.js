import app from './app.js';
import dotenv from 'dotenv';
import { ORM } from '../src/db/db.config.js'

dotenv.config();

const PORT = process.env.PORT;

async function main() {
  try {
    await ORM.authenticate();
    app.listen(PORT, () => {console.log(`running in port: ${PORT}`)})
  } catch (err) {
    console.log(`error in ${PORT}`);
  }
}

main()
