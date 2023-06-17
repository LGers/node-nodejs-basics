import { MESSAGES, PATH_TO_FILES } from './constants.js';
import fs from 'fs';

const { FS_ERROR } = MESSAGES;

const list = async () => {
  return new Promise((res, rej) => {
    if (fs.existsSync(PATH_TO_FILES)) {
      fs.readdir(PATH_TO_FILES, (err, files) => {
        if (err) {
          rej(err);
        }

        console.log(files);
        res(files);
      });
    } else {
      throw new Error(FS_ERROR);
    }
  });
};

await list();
