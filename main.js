/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-06-14 10:35:47
 * @LastEditTime: 2019-11-19 18:56:16
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
    var str3 = str2
      .replace(/style='[\S\s\f\n\r]*?'/igm, '')

    // 要素滤除
    var reg = [
      /&nbsp;/igm,
      /class=\w+/igm,
      /valign=\w+/igm,
      /align=\w+/igm,
      /datetime="[\s\S]*?"/igm,
      /cite=".*?"/igm,
      /width=\d+/igm,
      /width="\d+%"/igm,
      /height=\d+/igm,
      /lang=\w*-?\w*/igm,
      /[\f\n\r\s]/igm
    ]

    reg.forEach((x) => {
      str3 = str3.replace(x, ' ')
    })

    //无效标签滤除
    var reg2 = [
      /<\/?span\s*>/igm,
      /<del.*?>.*?<\/del>/igm,
      /<\/?ins.*?>/igm,
      /<b\s*>\s*<\/b>/igm,
      /<p\s*>\s*<\/p>/igm,
      /<p\s*>\s*\d*\.*\s*<\/p>/igm,
    ]
    reg2.forEach((x) => {
      str3 = str3.replace(x, ' ')
    })
    str3 = str3.replace(/<body.*?>([\s\S\f\n\r]*?)<\/body.*?>/, `<body><div id='tem'>$1</div></body>`)
    var str4 = `
<!DOCTYPE html>
<html>

<head lang="en">
<meta charset="UTF-8" />
<title>协议</title>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection" content="telephone=no, email=no, address=no" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="x5-orientation" content="landscape" />
<meta name="screen-orientation" content="landscape" /> 
<!-- @@include('../../template/shence.html') -->
<!-- <link rel="stylesheet" href="../../asset/css/main.css" /> -->
<link rel="stylesheet" href="https://api-m.haohuan.com/public/asset/css/main.css" />
</head>
${str3}
<!-- <script src="../../asset/lib/jquery/jquery.min.js"></script> -->
<!-- <script src="../../asset/js/protocol/**.js"></script> -->
>
</html>
`
    $('#zhh').val(str4)
  } else {
    alert('代码不合法,请检查代码!')
  }

}
