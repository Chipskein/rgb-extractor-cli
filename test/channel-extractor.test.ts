import {afterAll, beforeAll, describe, expect, it} from 'vitest'
import { run } from '../src/process'
import { readdir } from 'fs/promises'
import { emptyDir } from 'fs-extra'
import { resolve } from 'path'
const rootDir=resolve()
const test_images_dir=`${rootDir}/test/assets/imgs/`
const output_dir=`${resolve()}/test/assets/json/`
const test_images:string[]=[]
beforeAll(async ()=>{
    const filenames=await readdir(test_images_dir)
    filenames.map(filename=>test_images.push(test_images_dir+filename))
})
describe("Should Test Extract Command",()=>{
    it("Should Extract Each Image in test directory",async ()=>{
        await Promise.all(
            test_images.map(async (inputpath,index)=>{
                const output=`${output_dir}output-${index}.json`
                const err=await run(inputpath,output)
                expect(err).toBeUndefined()
            })
        )
    })
    it("Should Not Extract Image That Doesnt Exists",async ()=>{
        const output=`${output_dir}output-invalid.json`
        const input=test_images_dir+'doesntexists.jpg'
        const err=await run(input,output)
        expect(err).toBe("File Doesnt Exists")
    })
})
afterAll(async ()=>{
    await emptyDir(output_dir)
})





