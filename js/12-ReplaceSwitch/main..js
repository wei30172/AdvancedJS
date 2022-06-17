// https://www.youtube.com/watch?v=7T051-eeacQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=13

// Switch
const extension = '.css';
  let contentType;
  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/js';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'text/png';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;
    default: 
      contentType = 'text/html';
  }

// great ways to replace switch statements
const extensionObj = {
  '.css': 'text/css',
  '.js': 'text/js',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.png': 'text/png',
  '.txt': 'text/plain',
}
console.log(extensionObj[extension] || 'text/html'); // text/css

const extensionMap = new Map([
  ['.css', 'text/css'],
  ['.js', 'text/js'],
  ['.jsong', 'application/json'],
  ['.jpg', 'image/jpeg'],
  ['.png', 'text/png'],
  ['.txt', 'text/plain'],
])
console.log(extensionMap.get(extension) || 'text/html'); // text/css