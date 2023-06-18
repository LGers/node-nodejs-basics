import { createGzip } from 'zlib';
import { pipeline } from 'stream';

import {
  createReadStream,
  createWriteStream,
} from 'fs';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFileRead = `${__dirname}/files/fileToCompress.txt`;
const pathToFileWrite = `${__dirname}/files/archive.gz`;

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(pathToFileRead);
  const destination = createWriteStream(pathToFileWrite);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();
