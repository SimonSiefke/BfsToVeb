import { getVeb } from './veb'
import fs from 'fs'

export function print(height, chars = false) {
    let result = new Array(2 ** height - 1)
    for (let bfsnumber = 0; bfsnumber < 2 ** height - 1; bfsnumber++) {
        if (chars) {
            if (bfsnumber < 26) {
                result[getVeb(bfsnumber, height)] = String.fromCharCode(65 + bfsnumber);
            } else {
                result[getVeb(bfsnumber, height)] = String.fromCharCode(71 + bfsnumber);

            }
        } else {
            result[getVeb(bfsnumber, height)] = bfsnumber

        }
    }
    let prettyResult = []
    let i
    for (i = 0; 2 ** (i + 1) < result.length; i++) {
        prettyResult.push(result.slice(2 ** i - 1, 2 ** (i + 1) - 1, result.length))
    }
    prettyResult.push(result.slice(2 ** i - 1, result.length))

    console.log(prettyResult)
    fs.writeFileSync("./result.txt", prettyResult.join('\n'))

    return prettyResult.join('\n')

}

print(5, true)
