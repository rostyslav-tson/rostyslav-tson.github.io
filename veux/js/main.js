$(document).ready(function(){
	$('.burger').click(function(){
		$(this).toggleClass('open');
		$('.header .right').slideToggle();
	});

	$('.openmodal').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).fadeIn();
	});

	$('.closebut , .closef').click(function(){
		$('.popup_wrap').fadeOut();
	});

	$('.popup_wrap').click(function(e){
		if($(e.target).closest('.wrap').length == 0){
			$(this).fadeOut();
		}
	});

	$('.popup_wrap form').submit(function(e){
		e.preventDefault();
		$(this).remove();
	});
});


/*
$(document).ready(function() {
	$('.minus').click(function () {
	var $input = $(this).parent().find('.quantity');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
	});
$('.plus').click(function () {
var $input = $(this).parent().find('.quantity');
$input.val(parseInt($input.val()) + 1);
$input.change();
return false;
});
});
*/

$(document).ready(function() {
	function change($tr, val) {
	  var $input = $tr.find('.quantity');
	  var count = parseInt($input.val()) + val;
	  count = count < 1 ? 1 : count;
	  $input.val(count);
	  var $price = $tr.find('.count_price');
	  $price.text(count * $price.data('price'));
	}
	$('.minus').click(function() {
	  change($(this).closest('tr'), -1);
	});
	$('.plus').click(function() {
	  change($(this).closest('tr'), 1);
	});
	$('.quantity').on("input", function() {
	  var $price = $(this).closest('tr').find('.count_price');
	  $price.text(this.value * $price.data('price'));
	});
  });