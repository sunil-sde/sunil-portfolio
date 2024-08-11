import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  const folderPath = '../../../public/static/education'; // Specify the path to your image folder
  const imagePaths = fs.readdirSync(path.join(process.cwd(), folderPath))
    .filter(file => /\.(png|jpe?g|svg)$/i.test(file))
    .map(file => `/static/education/${file}`);
  res.status(200).json({ imagePaths });
}
