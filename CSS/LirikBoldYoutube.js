<script type='text/javascript'>//<![CDATA[
function do_rate() {
  document.frmRating.submit();
}

function cancel_rate() {
  document.frmRating.no_vote.value = "1";
  document.frmRating.submit();
}

function update_song(link) {
  $.getJSON(
    link,
    function(data) {
      if (data.result) {
        $("#song").html(data.song);
      }
    }
  );
}

function setupEnv() {
  var toggle_lyrics_mode = 0;
  var toggle_download_mode = 0;
  var bold = 0;

  $("#com_name").hide();
  $("#com_isi").hide();
  $("#com_sub").hide();
  $("pre#lyrics_only").hide();
  $("pre#download_only").hide();
  
  $('.toggle_lyrics').click(function(event) {
    event.preventDefault();
    if (toggle_lyrics_mode  == 0) {
    $("pre#lyrics_only").show();
    $(".post-body img").show();
	$("pre#download_only").hide();
    $("pre#song").hide();
    $("#toollist .non-bordered").hide();
    toggle_lyrics_mode = 1;
    }
    else {
    $("pre#lyrics_only").hide();
	$("pre#download_only").hide();
    $("pre#song").show();
    $("#toollist .non-bordered").show();
    $(".post-body img").show();
    toggle_lyrics_mode = 0;
    }
  });

  $('.toggle_bold').click(function(event) {
    bold = 1 - bold;
    if(bold) {
      $('pre').each(function () {
        this.style.fontWeight="bold";
      });
    } else {
      $('pre').each(function () {
        this.style.fontWeight="";
      });
    }
    return false;
  });
  
   $('.toggle_download').click(function(event) {
    event.preventDefault();
    if (toggle_download_mode  == 0) {
    $("pre#download_only").show();
	$("pre#lyrics_only").hide();
    $("pre#song").hide();
    $(".post-body img").hide();
    $("#toollist .non-bordered").hide();
    toggle_download_mode = 1;
    }
    else {
    $("pre#ldownload_only").hide();
	$("pre#lyrics_only").hide();
    $("pre#song").show();
    $(".post-body img").show();
    $("#toollist .non-bordered").show();
    toggle_download_mode = 0;
    }
  });

  $('.toggle_print').click(function(event) {
    childWindow = window.open('#');
    childWindow.bold = bold;
    if (toggle_lyrics_mode == 0) {
      childWindow.song = $('#song').html();
    } else {
      childWindow.song = $('#lyrics_only').html();
    }
    return false;
  });

  $("#new_com").click(function(){
    $("#new_com").hide();
    $("#com_name").show();
    $("#com_isi").show();
    $("#com_sub").show();
    $("#com_isi_el").focus();
  });
}

function addHideShowEvent(eventId, targetId) {
  $('#'+eventId).click(function(event) {
    isHide = !$(this).data('is_hide');
    $(this).data('is_hide', isHide);
    if (isHide) {
      $('#'+targetId).hide('normal');
      $('#'+eventId+' #plusmin').html('+');
    } else {
      $('#'+targetId).show('normal');
      $('#'+eventId+' #plusmin').html('-');
    }
  });
}//]]></script>