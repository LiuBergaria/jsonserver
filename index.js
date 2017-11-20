var fs = require('fs')

function createFolder(folderName) {
  var dirs = folderName
  if (!Array.isArray(dirs)) {
    if (typeof dirs === 'string') {
      dirs = []
      dirs.push(folderName)
    } else {
      var error = new Error('Parameter can only be string or Array of string')
      error.name = 'InvalidParameters'
      throw error
    }
  }
  dirs.forEach((dir) => {
    if (typeof dir !== 'string') {
      var error = new Error('Parameter can only be string or Array of string')
      error.name = 'InvalidParameters'
      throw error
    }
    if (!fs.existsSync(dir)) {
      try {
        fs.mkdirSync(dir)
        console.log('Folder Created:', dir)
      } catch (e) {
        var err = new Error('Parent folder is not present: ' + dir)
        err.name = 'FolderNotFound'
        throw err
      }
    }
  })
  return true
}

module.exports = exports = createFolder