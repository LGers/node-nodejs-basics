import fs from 'fs';
import { MESSAGES, PATH_TO_FILES } from './constants.js';

const pathToFile =`${PATH_TO_FILES}/fresh.txt`;
const content = 'I am fresh and young';

const { FS_ERROR, SUCCESS} = MESSAGES;

const create = async () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(pathToFile)) {
      fs.appendFile(pathToFile, content, (err) => {
        if (err) {
          return reject(FS_ERROR);
        } else {
          return resolve(SUCCESS);
        }
      })
    } else {
      throw new Error(FS_ERROR);
    }
  });
};

await create();
