import { createHash } from 'crypto';
import fs from 'fs';

const uniCode = 'utf8';
const pathToFile = './src/hash/files/fileToCalculateHashFor.txt';

const readFile = (pathToFile) => {
  return new Promise((res, rej) => {
    try {
      fs.readFile(pathToFile, uniCode, (err, data) => {
        if (err) {
          throw new Error(err);
        }
        res(data);
      });
    } catch (err) {
      rej(new Error(err));
    }
  });
};

const calculateHash = async () => {
  const data = await readFile(pathToFile);

  const hash = createHash('sha256').update(data).digest('hex');

  console.log(hash);
  return hash;
};

await calculateHash();
