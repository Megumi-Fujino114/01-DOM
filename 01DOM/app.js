// DOMとは Document Object Modelの略
// HTMLのタグをObject（部品）と見立ててjavascriptで操作できる方法の事

// タグ名を指定して、DOM操作する方法
// getElementsByTagName
let list = document.getElementsByTagName("a");
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[0].href);



let fuga = document.getElementsByClassName("fuga");
console.log(fuga);
console.log(fuga[1]);
for(let i = 0 ; i < 3 ;i++){
	console.log(fuga[i].textContent);
}

// これでも可能↓
// let fuga = document.getElementsByClassName("fuga");
// console.log(fuga);
// console.log(fuga[1]);
// // 配列名.lengthで要素の個数
// for(let i = 0 ; i < fuga.length ;i++){
// 	console.log(fuga[i].textContent);
// }

// querySelector(単一の要素の取得)
let tako = document.querySelector("#tako .ika");
// IDがイカでクラスはtakoなど複数選択したいときに使い
// 一個目のイカだけだす
console.log(tako);

// querySelectorAll(合致するすべての要素の取得)
let ika = document.querySelectorAll("#tako .ika");
// IDがイカでクラスはtakoなど複数選択したいときに使う
// 2個のイカだす
console.log(ika);


// 親要素を取得(子要素を元にどう取得するのか)
let first_ika = document.querySelector(".ika");
console.log(first_ika);
let ul = first_ika.parentElement;
console.log(ul);

// // 変数使わない場合
// let ul = first_ika.parentElement;
// console.log(ul);
// console.log(document.querySelector(".ika").parentElement);


// 子要素を取得
let parent = document.querySelector("#hogehoge");
console.log("parentの指定");
console.log(parent);
console.log("parent.childrenの指定");
console.log(parent.children);


// takoリストの一番上の項目にtextblueクラスを当てる
first_ika.classList.add("textblue")

// 練習問題
// id=hogehogeのリストに全部textblueクラスを当てよう
let hoge1 = document.querySelector("#hogehoge");
console.log(hoge1);
let ul1 = hoge1.parentElement;
console.log(ul1);
hoge1.classList.add("textblue")


// id=hogehogeのリストに全部textblueクラスを当てよう
// ↓でもいい
// let hoge1 = document.querySelector("#hogehoge");
// hoge1.classList.add("textblue")

// id=hogehogeのリストに全部textblueクラスを当てよう
// ulそのものに指定
// let parent = document.querySelector("#hogehoge");
// parent.classList.add("textblue");


// id=hogehogeのリストに全部textblueクラスを当てよう
// 各liに指定
// let parent = document.querySelector("#hogehoge");
// for (let li of parent.children){
// 	li.classList.add("textblue")
// }

// もし何番目の何にクラスを表示したい場合
for (let li of parent.children){
	// console.log(li.textContent)
   if(li.textContent == "2"){
   	console.log(li.textContent)
   	li.classList.add("textred");
   }
}

// for文使わない
parent.children[3].classList.add("textred");

// クラスの削除
parent.children[0].classList.remove("textred")

// inputタグの入力情報の取得
var input = document.querySelector("#input_name");
console.log(input.value);
function getInput(){
	console.log(input.value);

// 値の編集
input.value = input.value + "様";
}

// イベントリスナー
let text = document.querySelector("#text");
text.addEventListener("click",function(){
	this.style.color = "red";
	// thisは”自分”という意味,イベントが発生したそのものの部品
});
// addEventListener(click,mouseoverなどのイベント名(){行いたい処理}

let html = document.querySelector("#html");
html.addEventListener("mouseover",function(){
	this.style.color = "blue";
});
    html.addEventListener("mouseleave",function(){
	this.style.color = "";
});

// 要素の作成、追加
// let michiko = document.querySelector("#parent");

// // 要素の作成追加
// let akemi = document.createElement("div");
// akemi.textContent = "あけみ";
// michiko.appendChild(akemi);

// 追加する要素の指定
var parent_text = document.querySelector("#text");
// 新しく追加予定のｐタグを生成
var child_p = document.createElement("p");
child_p.textContent = "ふが";
// 新しく生成したｐタグを親要素に追加
parent_text.appendChild(child_p);

// 指定した要素の手前にタグを追加する方法
var child_moge = document.createElement("p");
child_moge.textContent = "moge";
// 追加するための親.insertBefore(追加したい要素、追加済みの要素);
// こう指定すると追加できる
parent_text.insertBefore(child_moge,child_p);

// ボタンAを押したら、id=textのほげの部分にｐタグが追加される
function btna_click(){
	console.log("btna_click");
	var parent_text = document.querySelector("#text");
	var child_p_for_btn = document.createElement("p");
	// 押されたボタンの文字を表示する
	child_p_for_btn.textContent = document.querySelector("#btnA").textContent;
	// idの追加
	child_p_for_btn.id ="add_in";
	child_p_for_btn.style.color = "blue";

   // 生成したｐタグの追加
    parent_text.appendChild(child_p_for_btn);
  }

  // 要素の削除
  // 削除したい要素そのものを指定して、要素.remove();と削除する方法
  // ありが削除される
let ant = document.querySelector('#ant');
ant.remove();
// 削除したい要素が含まれている親要素に対して、要素.remove();と削除する方法
  // ありが削除されたので次のゴキブリが削除される
let room = document.querySelector('#room');
// room.removeChild(room.firstElementChild);

// 削除したい要素が含まれている親要素に対して、要素.removeChild(消したい要素);
room.removeChild(document.querySelector("#cockroach"));






