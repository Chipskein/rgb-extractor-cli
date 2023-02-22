import { extractRGBFFromImage } from './channel-extractor';
import { writeFile } from 'fs/promises';
import { exists } from 'fs-extra';
export async function run(inputpath:string,outputpath:string){
    if(!await exists(inputpath)){
        return "File Doesnt Exists"
    }
    const output=await extractRGBFFromImage(inputpath)
    await writeFile(outputpath,JSON.stringify(output))
}
