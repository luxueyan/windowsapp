;(function(window,$){
	$.fn.extend({
		imgBoxer: function(){
			return this.each(function(){
				$(this).on('click',function(){
					$('body .mark').remove();
					var mark = $('<div class="mark"><div class="body"></div></div>');
					mark.find('.body').html($(this).clone());
					mark.find('img').click(function(e){
						e.stopPropagation();
						if(e.screenX >= window.innerWidth/2){
							var index = +$(this).attr('index') + 1;
						} else {
							var index = +$(this).attr('index') - 1;
						}
						$('img[index="'+ index +'"]').trigger('click');
					});
					mark.click(function(){
						$(this).remove();
					});
					$('body').append(mark);
				});
			});
		},
		toolTip: function(){
			return this.each(function(){
				$(this).mousemove(function(){

				});
			});
		},
		tabs: function(opt){
			var defaultOpt = {
				beforeTab: function(){
					return;
				},
				callback: function(){
					return;
				}
			};
			opt = $.extend(defaultOpt,opt || {});
			return this.each(function(){
				var that = this;
				$(this).find('a').click(function(e){
					var _this = this;
					e.preventDefault();
					if(!$(this).hasClass('sel') ){
						opt.beforeTab.call(this,function(){
							$(_this).addClass('sel').siblings('a').removeClass('sel');
							opt.callback.call(_this);
						});
					} 
				});
			});
		}
	});
})(window,jQuery);