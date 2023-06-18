import fs from 'fs';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const uniCode = 'utf8';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const a = await readFile(`${__dirname}/files/a.json`);
const b = await readFile(`${__dirname}/files/b.json`);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
