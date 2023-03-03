const fs= require('fs');

 //reading
// fs.readFile('./blog.txt', (err,data) =>{
//     if(err){
//         console.log(err);
//     }
// console.log(data);
// });
//  console.log('last time');


//writing
// fs.writeFile('.blog.txt','hello world',()=>{
//     console.log('file was written');
// });
// fs.writeFile('.blog2.txt','hello world',()=>{
//     console.log('file was written');
// });


//directory
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('foolder created');
//     }); 

// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

//deleting files
if(fs.existsSync('./deleteme.txt')){
    fs.unlink('.deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}