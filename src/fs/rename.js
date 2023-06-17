import { MESSAGES, PATH_TO_FILES } from './constants.js';
import fs from 'fs';

const wrongFilename = 'wrongFilename.txt';
const properFilename = 'properFilename.md';

const { FS_ERROR, SUCCESS } = MESSAGES;

const pathToWrongFilename = `${PATH_TO_FILES}/${wrongFilename}`;
const pathToProperFilename = `${PATH_TO_FILES}/${properFilename}`;

const rename = async () => {
  return new Promise((res, rej) => {
    if (fs.existsSync(pathToProperFilename)) {
      throw new Error(FS_ERROR);
    }

    if (fs.existsSync(pathToWrongFilename)) {
      fs.rename(pathToWrongFilename, pathToProperFilename, (err) => {
        if (err) {
          rej(err);
        }

        res(SUCCESS);
      });
    } else {
      throw new Error(FS_ERROR);
    }
  });
};

await rename();
