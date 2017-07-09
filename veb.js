function getVeb(bfsnumber, height) {
    validate(...arguments)

    // base case
    if (bfsnumber === 0) {
        return bfsnumber
    }

    const lvl = getlvl(bfsnumber)
    const splitLvl = Math.ceil(height / 2)

    // if bfsnumber is located in topTree
    if (lvl < splitLvl) {
        return getVeb(bfsnumber, splitLvl)
    }

    const depthInsideLowerTree = lvl - splitLvl
    const rootOfLowerTree = ((bfsnumber + 1) >>> depthInsideLowerTree) - 1

    /* 
     * example for bfsnumber 10:
     *
     *               0            
     *         1            2
     *     ------------------------        
     *      3     4      5      6
     *     7 8   9 10  11 12  13 14       
     * 
     * depthInsideLowerTree(10) = 3 - 2 = 1
     * 
     * rootOfLowerTree(10) = (11 >>> 1)   - 1
     *                     = (1011 >>> 1) - 1 
     *                     = (101)        - 1 
     *                     = 100 
     *                     = 4
     * 
     */


    let newbfs
    if (bfsnumber === rootOfLowerTree) {
        newbfs = 0
    } else {
        newbfs = bfsnumber % rootOfLowerTree
    }

    /* 
     * example for bfsnumber 10:
     *
     *               0                        
     *         1            2                    <- topTree
     *     ------------------------        
     *      3     4      5      6
     *     7 8   9 10  11 12  13 14              <- LowerTrees
     * 
     * newbfsnumber(10) = 10 % 4 = 2
     *
     *
     * We use the fact that the lowerTree    4
     *                                      9 10
     *
     *
     * will be isomorphic to its topTree     0
     *                                     1   2
     *
     * thus 4 ~ 0, 9 ~ 1 and 10 ~ 2
     * 
     */

    const NumberOfElementsInTopTree = 2 ** splitLvl - 1;
    const NumberOfLowerTrees = 2 ** splitLvl
    const sizeOfEachLowerTree = 2 ** (height - splitLvl) - 1;

    // Kein Plan, warum das funktioniert...
    const priorElements = NumberOfElementsInTopTree + ((rootOfLowerTree + 1) & (NumberOfLowerTrees - 1)) * sizeOfEachLowerTree;

    return priorElements + getVeb(newbfs, height - splitLvl)
}


/* 
 * @param {number} bfsnumber
 * @return {number} lvl of bfsnumber
 *
 * example:
 *
 *       0           <- lvl 0
 *     1   2         <- lvl 1
 *    3 4 5 6        <- lvl 2
 *
 */
function getlvl(bfsnumber) {
    let lvl = 0
    while (bfsnumber >= (2 ** (lvl + 1)) - 1) {
        lvl++
    }
    return lvl
}


/* 
 * checks if arguments are valid
 * @param {args}
 *
 */
function validate(...args) {
    if (args.length !== 2) {
        throw 'invalid number of arguments'
    }
    const [bfsnumber, height] = args
    if (typeof bfsnumber !== 'number' || bfsnumber < 0) {
        throw 'bfsnumber is invalid'
    }
    if (typeof height !== 'number' || height < 0) {
        throw 'height is invalid '
    }
    if (getlvl(bfsnumber) + 1 > height) {
        console.log("INVALID", bfsnumber, height)
        throw 'invalid height for bfsnumber'
    }
}


module.exports = { getVeb }
