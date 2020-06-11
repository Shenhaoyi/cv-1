let html = document.querySelector("#html"); //通过css选择器找到这个元素
let style = document.querySelector("#style");
let string = `/* 你好，我叫小黑
 * 接下来的演示一下我的前端功底
 * 首先我要准备一个div
 */
#div1{
    width:200px;
    height:200px;
}
/* 接下来我把div编程八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
// 注意string[0] = '';需要进行替换
// 但是 console.log(string) 则能显示回车？
// string = string.replace("\n", "<br>"); //只能替换掉第一个 方法1
// string = string.replace(/\n/g, "<br>"); //正则表达式  但是显示的时候会显示<，还是不行 方法2
let n = -1;
let string2 = "";

//每各一段就执行
// setInterval(() => {
//   n += 1;
//   html.innerHTML = n;
// }, 1000);

let step = () => {
  setTimeout(() => {
    n += 1;
    if (string[n] === "\n") {
      //遇到回车符，替换成br元素
      //方法3
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n]; //照搬
    }
    //简化
    // string2 += string[n] === "\n" ? "<br>" : string[n];
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n); //css代码外的内容需要注释
    // html.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //自动滚动到底部
    html.scrollTo(0, 99999); //手机端是将html的div进行滚动
    if (n < string.length - 1) {
      step();
    }
  }, 50);
};
step();

// setTimeout(() => {
//   style.innerHTML = `
//     body{
//         color:red;
//     }
//     `;
// }, 2000);
