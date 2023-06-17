import { MESSAGES, PATH_TO_FILES } from './constants.js';
import fs from 'fs';

const { FS_ERROR } = MESSAGES;

const pathToReadFilename = `${PATH_TO_FILES}/fileToRead.txt`;
const uniCode = 'utf8';

const read = async () => {
  return new Promise((res, rej) => {
    if (fs.existsSync(pathToReadFilename)) {
      fs.readFile(pathToReadFilename, uniCode, (err, data) => {
        if (err) {
          rej(err);
        }

        console.log(data);
        res(data);
      });
    } else {
      throw new Error(FS_ERROR);
    }
  });
};

await read();
