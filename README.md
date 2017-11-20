# Create Empty Folders

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

It is simple enough to just load the .env files into process.env .
Features:
- Zero-dependency,
- Simple and clean,
- less than 35 lines,
- Easy enough to add your own customizations in to it.

## Install

```bash
npm install create-empty-folders --save
```

## Usage
Require it in your entry file, and use it as a startup script:
```javascript
var createFolders = require('create-empty-folders')

// for creating multiple folders at root
createFolders(['folder1','folder2'])

// for creating nested folders
// Note: folder1 is created first as parent folder should be present before creating child folders
createFolders(['folder1','folder1/folder2','folder1/folder3])
```

It will only create folders once, if folder already exist then will bypass it.

### Development Setup steps:
* clone the repo
* npm install standard --save-dev
* npm install