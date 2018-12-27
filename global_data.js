const path = require('path');

module.exports = {
  'root_dir': __dirname,
  'server': {
    'port': 5000
  },
  'client': {
    'port': 8080
  },
  'db': {
    'urls': {
      'posts_table': path.join(__dirname,'db','posts_table.json')
    }
  }
}
