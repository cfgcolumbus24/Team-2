import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), '../backend/data/netcare_financial_data.csv');
  const file = fs.readFileSync(filePath, 'utf-8');
  const parsedData = Papa.parse(file, { header: true });
  res.status(200).json(parsedData.data);
}
