import * as _ from 'lodash';

let { log } = console;
let arrChunk = [1,2,3,4,5,6];
let chunkArr = _.chunk(arrChunk,3);
log('chunk',chunkArr);

let arrCompact =[1,0,false,'',2,3,false,undefined,4];
let compactArr = _.compact(arrCompact)
log('compact',compactArr)

let arrDiff1=['liugezhou','18','coding','stydy','rich'];
let arrDiff2=['liugezhou','28','playing','study','rich'];
log('diffrence',_.difference(arrDiff1,arrDiff2));