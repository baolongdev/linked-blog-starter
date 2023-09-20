import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { q },
    method,
  } = req
  if (method != 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).send(`Method ${method} Not Allowed`)
  }
  
  const slug = 'public/project/project.canvas';
  const fullPath = path.join(process.cwd(), slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  res.status(200).json(content);
}