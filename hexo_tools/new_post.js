const moment = require('moment');
const pug = require('pug');
const fs = require('fs');

let args = process.argv.slice(2);

let title = args[0];
const hexoPath = '/Users/cwz/cwz/develop/hexo/hexo_blog/source/_posts/';
let fileName = moment().format('YYYY-MM-DD') + '-' + title.split(' ').join('-') + '.org';
let dateStr = moment().format('YYYY-MM-DD ddd HH:mm');

let content = pug.renderFile('orgmode_template.pug', {
    title: title,
    dateStr: dateStr
});

fs.writeFile(hexoPath + fileName, content, error => {
    if(error){ 
        console.log(error);
    } else{
        console.log('sucess');
    }
});
