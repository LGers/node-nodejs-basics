import { createUnzip } from 'zlib';
import { pipeline } from 'stream';

import {
  createReadStream,
  createWriteStream,
} from 'fs';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = `${__dirname}/files/fileToCompress.txt`;
const pathToFileZip = `${__dirname}/files/archive.gz`;

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(pathToFileZip);
  const destination = createWriteStream(pathToFile);

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await decompress();