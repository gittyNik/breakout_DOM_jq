// $("document").ready(() => {
// 	window.alert("hi");
// })

$("document").ready(function(){

	const button = document.querySelector("#increaseBtn");

	button.addEventListener('click', event => {
  		
  		let counter = document.getElementById("counter")
  		counter = counter.innerHTML
  		counter = parseInt(counter)
  		counter = counter + 1;
  		document.getElementById("counter").innerHTML = counter;

	});
});


$("document").ready(function(){

	$("#increaseBtn").click(function() {
		let counter = $("#counter").text()
  		counter = parseInt(counter)
  		counter = counter + 1;
  		$("#counter").text(counter);

	})

});