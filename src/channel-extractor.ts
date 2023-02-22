import sharp from 'sharp'
type channelRGB={
    blue:number[]
    green:number[]
    red:number[]
}
export async function extractRGBFFromImage(path:string):Promise<channelRGB>{
    try{
        let input=sharp(path)
        let blue=await input.extractChannel("blue").raw().toBuffer()
        let blueArr=[...blue]
        let red=await input.extractChannel("red").raw().toBuffer()
        let redArr=[...red]
        let green=await input.extractChannel("green").raw().toBuffer()
        let greenArr=[...green]
        return {
            blue:blueArr,
            green:greenArr,
            red:redArr,
        }
    }
    catch(err){
        throw err
    }
}