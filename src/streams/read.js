import { fileURLToPath } from 'url';
import path from 'path';
import { createReadStream } from 'fs';
import { MESSAGES } from '../fs/constants.js';

const uniCode = 'utf8';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
  const readable = createReadStream(pathToFile, { encoding: uniCode });

  readable.on('error', (err) => {
    if (err.code === 'ENOENT') {
      throw new Error(MESSAGES.FS_ERROR);
    }
  });

  readable.pipe(process.stdout);
};

await read();