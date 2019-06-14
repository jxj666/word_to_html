/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-06-14 10:35:47
 * @LastEditTime: 2019-06-14 10:50:28
 * @LastEditors: 靳肖健
 */
$(document).ready(
  () => {
    $('.btn').on('click', () => {
      wordToHtml()
    })
  }
)
function wordToHtml () {
  var str1 = $('#zhq').val();
  // console.log(str1)
  var reg1 = /<body.*?>[\s\S\f\n\r]*?<\/body.*?>/igm
  var arr1 = reg1.exec(str1)
  // console.log(arr1)
  if (arr1) {
    var str2 = arr1[0]
    var str3 = str2.replace(/style='[\S\s\f\n\r]*?'/igm, '')
      .replace(/&nbsp;/igm, '')
      .replace(/class=\w+/igm, '')
      .replace(/align=\w+/igm, '')
      .replace(/datetime="[\s\S]*?"/igm, '')
      .replace(/cite=".*?"/igm, '')
      .replace(/width=\d+/igm, '')
      .replace(/height=\d+/igm, '')
      .replace(/<del[\S\s\f\n\r]*?del>/igm, '')
      .replace(/<\/?ins>/igm, '')
      .replace(/<\/?span[\S\s\f\n\r]*?>/igm, '')
      .replace(/<\/?a[\S\s\f\n\r]*?>/igm, '')
      .replace(/<\/?u>/igm, '')
      .replace(/lang=\S+/igm, '')
      .replace(/[\f\n\r\s]+/igm, ' ')


    // console.log(str3)
    var str4 = `
<!DOCTYPE html>
<html>

<head lang="en">
<meta charset="UTF-8" />
<title>借款成功小贴士</title>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection" content="telephone=no, email=no, address=no" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="x5-orientation" content="landscape" />
<meta name="screen-orientation" content="landscape" /> 
<!-- @@include('../../template/shence.html') -->
<link rel="stylesheet" href="https://api-m.haohuan.com/public/asset/css/main.css" />
</head>
${str3}
</html>
`
    $('#zhh').val(str4)
  } else {
    alert('代码不合法,请检查代码!')
  }

}
