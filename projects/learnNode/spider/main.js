// import './index.html';

const http = require('http');
const https = require('https');
const cheerio = require('cheerio');

const url = 'https://www.lagou.com';
https.get(url, (res) => {
  let html = '';
  res.on('data', (data) => {
    html += data;
  });
  res.on('end', () => {
    const result = filterMenu(html);
    printMenu(result);
  });
  res.on('error', (err) => {
    console.log(err);
  });
});

function filterMenu(html) {
  const $ = cheerio.load(html);
  const menu = $('.menu_main');
  let menuData = [];
  menu.each((index, value) => {
    const menuTitle = $(value).find('h2').text();
    const menuLists = $(value).find('a');
    const menuList = [];
    menuLists.each((index, value) => {
      menuList.push($(value).text());
    });
    menuData.push({
      menuTitle,
      menuList
    });
  });
  return menuData;
}
function printMenu(menu) {
  menu.forEach((element) => {
    console.log(element.menuTitle + '\n');
    element.menuList.forEach((ele) => {
      console.log(ele);
    });
  });
}
