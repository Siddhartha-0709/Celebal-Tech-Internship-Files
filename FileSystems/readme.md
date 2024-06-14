# Assignment - 2

##  File Management Application with NodeJS

This assignment helps us in understanding the file system operations using Node.js by creating a simple file management tool. This project leverages Node.js core modules such as `fs` (File System), `path`, and `http` to perform basic file operations through an HTTP server interface. 

## **File System Operations**:
**Create and Write Files**: Using `fs.writeFileSync` to create new files or overwrite existing ones with 	 specified content.
**Read Files**: Using `fs.readFileSync` to read the content of files synchronously.
**Delete Files**: Using `fs.unlinkSync` to delete specified files from the file system.
**Error Handling**: If the files dosenot exists then the program crashes. Displaying message accordingly.

## **To run the application:**
```bash
npm start
```
## **The URL Parameters:**

*Base URL*- `http://localhost:3000/`
**Query Params-**
*Write File*- `http://localhost:3000/?fileName=NameofTheFile&mode=write&data=TheMessageToWriteToFile`
*Read File*- `http://localhost:3000/fileName=NameofTheFile&mode=read`
*Delete File*- `http://localhost:3000/?fileName=newFileToTest&mode=delete`

### Submitted By:

**Name-** **Siddhartha Mukherjee**
**Domain-** **Node JS**
**Email-** **siddharthamukherjee0709@gmail.com**
