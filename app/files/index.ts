import {existsSync} from 'fs'
import { basename } from 'path';

 export const getCurrentDirectoryBase = () => {
    return basename(process.cwd());
  }

  export const directoryExists = (filePath:string) => {
    return existsSync(filePath);
  }
