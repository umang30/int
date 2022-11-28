// //create a node js application to demonstrate the use of Zlib and stream module



var zlib=require('zlib');
var fs=require('fs');
var filename="./first.txt";
var compress=zlib.createGzip();
var decompress=zlib.createGunzip();
var readstream=fs.createReadStream(filename);

function compressfile(filename)
{
var newfile=filename+"gz";
var writefile=fs.createWriteStream(newfile);
readstream.pipe(compress).pipe(writefile);
console.log("compressing done!!!")
}
compressfile(filename);
function decompressfile(filename)
{
var newfile=filename.replace("gz","");
var writefile=fs.createWriteStream(newfile);
readstream.pipe(decompress).pipe(writefile);
}


if(/.gz$/i.test(filename)==true)
{
    decompressfile(filename);
    console.log("Decompressing done");
}
else
{
    compressfile(filename);
    console.log("Compressing done");
}



