export const debug = true;
//  測試開發>營運網址
export const devUrl = 'http://localhost:3000';
export const prodUrl = 'http://www.abc.com';

export const pathnameList = [
  '>products',
  '>products>surfboard',
  '>products>surfboard>long',
  '>products>surfboard>short',
  '>products>surfboard>happy',
  '>products>surfboardaccessory',
  '>products>surfboardaccessory>rudder',
  '>products>surfboardaccessory>footrope',
  '>products>surfboardaccessory>footpad',
  '>products>surfboardaccessory>platebag',
  '>products>clothes',
  '>products>clothes>surfcapetowel',
  '>products>clothes>wetsuit',
  '>customized',
  '>course',
  '>course>coursecontent',
  '>article',
  '>surfspot',
];

export const pathnameTextList = [
  '>衝浪商品',
  '>衝浪商品>衝浪板',
  '>衝浪商品>衝浪板>長板',
  '>衝浪商品>衝浪板>短板',
  '>衝浪商品>衝浪板>快樂板',
  '>衝浪商品>衝浪板配件',
  '>衝浪商品>衝浪板配件>衝浪板舵',
  '>衝浪商品>衝浪板配件>腳繩',
  '>衝浪商品>衝浪板配件>腳踏墊',
  '>衝浪商品>衝浪板配件>衝浪板袋',
  '>衝浪商品>衝浪相關衣物',
  '>衝浪商品>衝浪相關衣物>衝浪斗篷毛巾衣',
  '>衝浪商品>衝浪相關衣物>防寒衣',
  '>客製化衝浪板',
  '>衝浪課程',
  '>衝浪課程>課程內容',
  '>文章',
  '>浪點',
];

// breadcrumb面包屑使用
// 用pathname英文對照中文的名稱(類似關聯陣列的物件)
// 使用方式需用 ex. pathnameLocale['productcategory']
// 下面是防止自動格式化使用註解
// eslint-disable */
export const pathnameLocale = {
  products: '衝浪商品',
  surfboard: '衝浪板',
  long: '長板',
  short: '短板',
  happy: '快樂板',
  surfboardaccessory: '衝浪板配件',
  rudder: '衝浪板舵',
  footrope: '腳繩',
  footpad: '腳踏墊',
  platebag: '衝浪板袋',
  clothes: '衝浪相關衣物',
  surfcapetowel: '衝浪斗篷毛巾衣',
  wetsuit: '防寒衣',
  customized: '客製化衝浪板',
  course: '衝浪課程',
  coursecontent: '課程內容',
  article: '文章',
  surfspot: '浪點',
};
/* eslint-enable */
