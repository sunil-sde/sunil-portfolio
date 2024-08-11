// src/app/api/image-paths/route.ts

import fs from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';
export async function POST(request: Request) {

    try {
      const data =  await request.json();
      const folderPath = `./public${data.imagesDirectory}`; // Specify the path to your image folder
      const imagePaths = fs.readdirSync(path.join(process.cwd(), folderPath))
        .filter(file => /\.(png|jpe?g|svg|mkv|mp4)$/i.test(file))
        .map(file => 
          `${data.imagesDirectory}/${file}`
        );
      return NextResponse.json({ imagePaths });
    } catch (error) {
      console.error('Error fetching image paths:', error);
      return NextResponse.json({ error: 'Internal Server Error' });
    }
}
