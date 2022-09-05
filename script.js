// 'use strict';

// let snowContainer = document.querySelector('.snow-container');

// const createSnow = () => {
// 	/* .snowというクラスを持つspanタグを生成 */
// 	let snow = document.createElement('span'); // Element
// 	snow.classList.add('snow'); // classList.add(追加) vs className(上書き)

// 	const minSize = 5;
// 	const maxSize = 10; // 変数宣言を省略しても可。宣言された変数はグローバルスコープとなる。ただしstrictモードではエラーとなる。strictモードは推奨されない書き方はエラーを出す。通常、使用する変数は変数宣言を行うべき。変数宣言は、let const var に続いて変数を記述する形をいう。


// 	/* width, heightをランダム生成 */
// 	let snowSize = Math.random() * (maxSize - minSize) + minSize;
// 	snow.style.width = snowSize + 'px';
// 	snow.style.height = snowSize + 'px';

// 	/* 雪の降り始めの位置を決定する */
// 	snow.style.left = Math.random() * 100 + '%';

// 	// 要素を生成
// 	snowContainer.appendChild(snow);

// 	/* 10秒ごとに雪を消す */
// 	setTimeout(()=>{snow.remove();},10000); // ツリーから要素を削除
// }
// setInterval(()=>{createSnow();},100);




setInterval(() => {
	document.querySelector('body').style.opacity = 1;
},0);
const snowContainer = document.querySelector('.snow-container');
/* 雪関数 */
const createSnow = () => {
	const snow = document.createElement('span');
	/* 雪の要素生成 */
	snow.classList.add('snow');
	const minSize = 5;
	const maxSize = 10;
	/* 雪の大きさをランダムに決める */
	const snowSize = Math.random() * (maxSize - minSize) + minSize;
	snow.style.width = snowSize + 'px';
	snow.style.height = snowSize + 'px';
	/* 雪の降り始めの位置を決定する */
	snow.style.left = Math.random() * 100 + '%';

	snowContainer.appendChild(snow);

	setTimeout(() => {
		snow.remove();
	},10000);
};
setInterval(() => {
	createSnow();
}, 100);