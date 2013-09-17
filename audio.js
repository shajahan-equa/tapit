//<![CDATA[
function drawJPlayer(){
	var id = '';
	
	var flag = 1;
	var isAudio = false;
	$('div.jp-jplayer').each(function(i, element){
		var path = '';
		isAudio = true;
		var str = '';
		id = element.id;
		id_index = id.substring(id.lastIndexOf('_') + 1);
		$('#jp_span_'+id_index+'+br').remove();
		$('#jp_span_'+id_index).remove();
		
		str = '<span id="jp_span_'+id_index+'" class="jp-span"><div id="jp_container_'+id_index+'" class="jp-audio">'
			+'<div class="jp-type-single">'
				+'<div class="jp-gui jp-interface">'
					+'<ul class="jp-controls">'
						+'<li><a href="javascript:;" class="jp-play" tabindex="'+id_index+'">play</a></li>'
						+'<li><a href="javascript:;" class="jp-pause" tabindex="'+id_index+'">pause</a></li>'
					+'</ul>'
				+'</div>'
			+'</div>'
		+'</div></span>';
		$("#"+id).after(str);
		path = element.title;
		path = path.substring(0,path.lastIndexOf('.'));
		
		if(path.indexOf('http://') == -1){
			path = 'http://' + document.domain + path;
		}
		$("#"+id).jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					m4a:path +'.m4a',
					oga:path +'.ogg'
				});
			},
			play: function() { // To avoid multiple jPlayers playing together.
				$(this).jPlayer("pauseOthers");
			},
			swfPath: "/js2/jplayer24",
			supplied: "m4a, oga",
			solution: "flash, html",
			cssSelectorAncestor: "#jp_container_"+id_index,
			wmode: "window",
			smoothPlayBar: true,
			keyEnabled: true
		});
		
		
	});
	
	if(isAudio){
		$('.qfoil p:nth-child(1) br').replaceWith('');
		$('.qfoil p:nth-child(1)').replaceWith($('.qfoil p:nth-child(1)').html());
		$('.jp-span').css({'position':'relative','display':'inline-block','top':'10px','margin':'-10px 0px 0px 5px'});
		$('.jp-jplayer').css({'display':'inline'});
		$('.audio-text').css({'float':'left','display':'inline','padding-top':'8px'});
		$('.jp-span+p').css({'clear':'left'});
		$('.answer .jp-span').css({'margin-top':'-20px','top':'15px'});
		$('.answer .jp-span').after('<br/>');
	}
	
}
//]]>