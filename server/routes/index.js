const express = require('express');
const fs = require('fs');
const global_data = require('../../global_data');
const posts_table_file = global_data.db.urls.posts_table;

const router = express.Router();

// Get posts
router.get('/',(req, res)=>{
  //read posts from json file
  res.json(JSON.parse(fs.readFileSync(posts_table_file)));
});


// Add posts
router.post('/add',(req, res)=>{
  let id = Date.now();
  let new_data = {
    '_id': id,
    'post': req.body.text,
    'createdAt': new Date()
  }
  fs.readFile(posts_table_file, (err, data)=> {
    if(err){
      res.status(401).send('Error: something wrong with db !');
    }
    let d = JSON.parse(data);
    d.push(new_data);
    fs.writeFileSync(posts_table_file, JSON.stringify(d))
    res.status(200).send('Success !');
  });
})


// Delete posts
router.delete('/delete', (req, res)=>{
  //res.status(501).send();
  fs.readFile(posts_table_file, (err, data)=> {
    if(err){
      res.status(401).send('Error: something wrong with db !');
    }
    let d = JSON.parse(data);

    d.splice(d.length-1, 1);
    fs.writeFileSync(posts_table_file, JSON.stringify(d))
    res.status(200).send('Success !');
  });
})

module.exports = router;
