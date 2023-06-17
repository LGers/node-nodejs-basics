import { MESSAGES, PATH_TO_FILES } from './constants.js';
import fs from 'fs';

const wrongFilename = 'fileToRemove.txt';

const { FS_ERROR, SUCCESS } = MESSAGES;

const pathToDeleteFilename = `${PATH_TO_FILES}/${wrongFilename}`;

const remove = async () => {
  return new Promise((res, rej) => {
    if (fs.existsSync(pathToDeleteFilename)) {
      fs.unlink(pathToDeleteFilename, (err) => {
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

await remove();