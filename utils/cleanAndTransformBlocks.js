
import {v4 as uuid} from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON))

    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid()
            //console.log('blocks', block.innerBlocks?.length)
            if (block.innerBlocks?.length){
                assignIds(block.innerBlocks)
            }
        }); 

    }
    
    assignIds(blocks)
    return blocks
}
