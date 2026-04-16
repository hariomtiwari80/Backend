const path=require('path')

console.log(path.basename("C:\\Users\\khush\\GenAxis\\client\\src\\pages\\file.js"));   //return filename with ext
console.log(path.extname("C:\\Users\\khush\\GenAxis\\client\\src\\pages\\file.js"));    //return ext name
console.log(path.dirname("C:\\Users\\khush\\GenAxis\\client\\src\\pages\\file.js"));    //return directory name
console.log(path.parse("C:\\Users\\khush\\GenAxis\\client\\src\\pages\\file.js"));      //return object with info about path
console.log(path.isAbsolute("C:\\Users\\khush\\GenAxis\\client\\src\\pages\\file.js")); //return whether path is absolute

const p1=path.join("user","hari","index.js");   //joins the segment into a single path
console.log(p1);
const p2=path.resolve("user","khush","file.txt");  //always join segments from start root directory
console.log(p2);
const p3=path.normalize("/home/./user/../hari/file.js");  //resolve curr and parent directory and give neat and clean path
console.log(p3);
