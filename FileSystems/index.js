const fs = require('fs')
const path = require('path')
const http = require('http')

const writeFile = (fileName, data)=>{
    try{
        // In this we create a new file in the current directory named 'newFileNodeJS.txt'. 
        // If the file already exists, it will be overwritten.
        // __dirname is used to get the current directory.
        // path.join() is used to join the path with the file name.
        // fs.writeFileSync is used to write the data to the file synchronously.
        console.log('Creating a new file...');
        fs.writeFileSync(path.join(__dirname, fileName), data);
        console.log('File created successfully');
    } catch(err){
        console.log('Error while creating the file');
        console.error(err);
    }
}

const readFile = (fileName)=>{
    try{
        // Read the content of the file 'newFileNodeJS.txt' and print it to the console. If the file does not exist, an error will be thrown. 
        // We have to specify an encoding to read the file as UTF-8.
        console.log('Reading the file...');
        const data = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
        console.log('File read successfully');
        console.log(data);
        return data;
    } catch(err){
        console.log('Error while reading the file');
        console.error(err);
    }
}

const deleteFile = (fileName)=>{
    try{
        //Here we will delete the file we have created.
        // fs.unlinkSync is used to delete the file synchronously. If the file does not exist, an error will be thrown.
        console.log('Deleting the file...');
        fs.unlinkSync(path.join(__dirname, fileName));
        console.log('File deleted successfully');
        return true;
    }catch(err){
        console.log('Error while deleting the file');
        console.error(err);
        return false;
    }
}


http.createServer((req, res) => {
    if(req.method === 'GET'){
        const url = new URL(req.url, `http://${req.headers.host}`);
        const fileName = url.searchParams.get('fileName')+'.txt';
        const mode = url.searchParams.get('mode');
        const data = url.searchParams.get('data');
        console.log(mode);
        console.log(fileName);
        console.log(data);
        if(mode === 'read'){
            const data = readFile(fileName);
            if(data === undefined)
            {
                res.end('File not found');
            }
            res.end('File read successfully the data is-' + data);
        }
        else if(mode === 'write'){
            writeFile(fileName, data);
            res.end('File written successfully');
        }
        else if(mode === 'delete'){
            const data = deleteFile(fileName);
            data?(res.end('File deleted successfully')):(res.end('File not found'));
        }
        else{
            res.end('Invalid request');
        }
    }
    else{
        res.write('Invalid request');
    }
}).listen(3000, () => console.log('Server running on port 3000'));