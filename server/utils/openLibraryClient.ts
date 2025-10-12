import 'dotenv/config';
import axios from "axios";
import {AppDataSource as db} from '../src/data-source.ts';

export async function fetchFromOpenLibrary(endpoint: string | undefined) {
  const url = `https://openlibrary.org/search.json?q=${endpoint}&limit=3`;


  const start = Date.now();
  const res = await axios.get(url, {
    headers: {
      "User-Agent": `LitLounge/1.0 ${process.env.EMAIL}`
    }
  });

  const response_time = Date.now() - start;
  const status_code = res.status;
  console.log(`[OpenLibrary] ${url} took ${response_time}ms`);

  await db.query("INSERT INTO api_usage_logs (endpoint, status_code, response_time_ms) VALUES ($1, $2, $3);", [endpoint, status_code, response_time]);

  return res.data;
}
