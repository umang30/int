
//open function:-
// r    =   To open file to read and throws exception if file doesn't exists.
// r+   =   Open file to read and write. Throws exception if file doesn't exists.
// rs+  =   Open file in synchronous mode to read and write.
// w    =   Open file for writing. Fite is created if it doesn't exists.
// wx   =   It is same as •w' but fails if path exists.
// w+   =   Open file to read and write. File is created if it doesn't exists.
// wx+  =   It is same as 'w+' but tails if path exists.
// a    =   Open file to append. File is created it it doesn't exists.
// ax   =   It is same as •a' but fails if path exists.
// a+   =   Open file for reading and appending. File is created if it doesn't exists.
// ax+  =   It is same as •av but fails if path exists.


//Que- create a node js application to open a file node.txt and prints a message "file empty" if the file is empty, otherwise append the content of files to new file new.txt



const e = require('express');
const fs = require('fs')

fs.open('./first.txt' , 'rs+', (err, f)=>{
    if (err) throw err;

    else{
        data = fs.readFileSync('./first.txt')
        length = fs.readFileSync('./first.txt').length;
        if(length === 0 ) {
        console.log("the file is empty")
}
    else {
        console.log("the file is not empty")
        fs.appendFile('new.txt', data, (err)=> {
        if (err) 
        console.log(err)
        else
        console.log('appended');
  });

}

}

})







// ------------------------------------------------------------------------------------------------------



// const open = fs.openSync('./empty.txt')

// const readFile = fs.readFileSync('./empty.txt', 'utf-8')


// const length = readFile.length;

// console.log(readFile);
// console.log(length);

// if(length === 0 ) {
//     console.log("the file is empty")
// }
// else {
//  console.log("the file is not empty")
//  fs.appendFile('new.txt', readFile, (err)=> {
//     if (err) 
//     console.log(err)
//     else
//     console.log('appended');
//   });
// }


