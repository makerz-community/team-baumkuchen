//=============================================
//dawer
//=============================================
$(".menu-btn").on("click", function () {
	//.menu-btnをクリックすると
	$(".menu-btn").toggleClass("close"); //.menu-btnrにcloseクラスを付与
	$(".nav-wrapper").fadeToggle(500); //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
	$("body").toggleClass("noscroll"); //bodyにnoscrollクラスを付与(スクロールを固定)
	$(".menu-btn").toggleClass("menu-btn-after"); //menuアイコンの切り替え
});

if ($(window).width() < 770) {
	//デバイスの幅が770以下のとき
	$(".nav-item > a", ".menu-btn").on("click", function () {
		//.nav-item>a 又は .menu-btnをクリックすると
		$(".nav-wrapper").fadeOut(500); //.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
		$(".menu-btn").removeClass("close"); //.menu-btnのcloseクラスを削除
		$("body").removeClass("noscroll"); //bodyのnoscrollクラスを削除
	});
}
