(function(){
	'use strict';

	var button = document.getElementById("button");

	// 結果確保配列の設定
	var deme = [];

	// div要素をオブジェクトとして取得
	var pl = document.getElementById('panel');
	var st = document.getElementById('stop');
	
	var timer;
 	





	// 入力をクリックした時の配列格納処理
	button.addEventListener("click", function(e) {
 	
	 	var textForm;

	    e.preventDefault();
	 
	    // フォームの値を取得
	    textForm = document.getElementById("textForm").value;
	 	
	    console.log(textForm);

	    // 取得した値を別のフォームに表示

	    var resultForm;

	    resultForm = document.getElementById("textForm");
	    resultForm.value = textForm;

	    num = [];
		for(var i=1; i<=resultForm.value; i++){
			num.push(i);
		}

		console.log(num);

	});



	// 抽選配列の設定
	var num = [];
	for(var i=1; i<=document.getElementById('textForm'); i++){
		num.push(i);
	}

	console.log(num);



	// スロットをスタートする処理
	start.addEventListener('click', function(){

		if(this.className.indexOf('inactive')!==-1){
			return;
		}

		// ボタン色の制御
		if(textForm.value!==''){
			this.className = 'inactive';
			st.className = '';
		}

		runslot();

	});




	// スロット内の描画関数
	function runslot(){
		if(textForm.value===''){
			return;
		}
		timer = setTimeout(function(){
			
			pl.innerHTML=num[Math.floor(Math.random()*num.length)];
			
			runslot();

			var last = document.getElementById('resultForm');
			last.innerHTML = num.length-1;

			// くじがおわってもスタートボタンを押してしまった場合の処理
			if(last.innerHTML==-1){
				last.innerHTML = "おしまい";
				ima.innerHTML = "おしまい";
				pl.innerHTML = "終";
			}

		},1);
	}




	// スロットを止める関数
	function initPanel(){
		st.addEventListener('click',function(){
		
		if(this.className.indexOf('inactive')!==-1){
			return;
		}

		clearTimeout(timer);

		// 結果の取得
		var res;
		res = document.getElementById('ima');
		res.innerHTML = pl.innerHTML;
	
		var ky = num.indexOf(parseInt(res.innerHTML));
		
		// 出目の保持
		if(ky != -1){
			num.splice(ky, 1);
			deme.push(parseInt(res.innerHTML));
		}


		// 出目の表示
		deta.innerHTML = deme;

		// ボタン色の制御
		if(textForm.value!==''){
		this.className = 'inactive';
		start.className = '';
		}

		});
	}

	initPanel();

	


})();