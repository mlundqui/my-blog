import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import formidable, { File } from 'formidable';
import { parse as parseDocx } from 'docx-parser';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface BlogPost {
  title: string;
  content: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public', 'uploads');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the file.' });
        return;
      }

      const uploadedFile = files.file as File;
      const filePath = uploadedFile.filepath;

      try {
        const fileType = uploadedFile.mimetype;
        let title = uploadedFile.originalFilename || 'Untitled';
        let content = '';

        if (fileType === 'text/plain') {
          content = await fs.readFile(filePath, 'utf-8');
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          content = await parseDocx(filePath);
        } else {
          res.status(400).json({ error: 'Unsupported file type.' });
          return;
        }

        const post: BlogPost = { title, content };
        res.status(200).json(post);
      } catch (error) {
        console.error('Error processing the file:', error);
        res.status(500).json({ error: 'Failed to process the file.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;