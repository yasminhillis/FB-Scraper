const express = require('express');
const app = express();
const jsdom = require('jsdom');
const fs = require('fs');



app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})


app.get('/scrape', (req,res)=>{

const json = {message: "", link: "", permalink_url:"", created_time:"", type: "", name:"",id:"",shares:{}, reactions:{},likes:{},comments:{}};
jsdom.env("https://www.facebook.com/GazaSkyGeeks/?ref=br_rs", [
  'http://code.jquery.com/jquery-1.5.min.js'
],
function(errors, window) {
  $0= window
  console.log("The post is : ", $0.document.getElementsByClassName('_5wj-')[0].textContent);
  console.log($0);
});

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
  console.log('File successfully written! - Check your project directory for the output.json file');
  res.send('check your console')
})
  })

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})
