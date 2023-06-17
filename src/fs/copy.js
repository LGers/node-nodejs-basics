import fs from 'fs';
import { MESSAGES, PATH_TO_FILES, PATH_TO_COPY } from './constants.js';

const { FS_ERROR, SUCCESS} = MESSAGES;

const copy = async () => {
  return new Promise((res, rej) => {
    if (fs.existsSync(PATH_TO_FILES)) {
      if (fs.existsSync(PATH_TO_COPY)) {
        rej(FS_ERROR);
        throw new Error(FS_ERROR);
      }

      fs.cp(PATH_TO_FILES, PATH_TO_COPY, { recursive: true }, (err) => {
        if (err) {
          rej(err);
        }
      });

      res(SUCCESS);
    } else {
      throw new Error(FS_ERROR);
    }
  });
};

await copy();
