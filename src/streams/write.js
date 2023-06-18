import { fileURLToPath } from 'url';
import path from 'path';
import { createWriteStream } from 'fs';
import { MESSAGES } from '../fs/constants.js';

const uniCode = 'utf8';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {
  const writeable = createWriteStream(pathToFile, { encoding: uniCode });

  writeable.on('error', (err) => {
    if (err.code === 'ENOENT') {
      throw new Error(MESSAGES.FS_ERROR);
    }
  });

  process.stdin.on('data', (data) => {
    writeable.write(data.toString());
  });
};

await write();