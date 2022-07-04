
function myFunction(imageId, videoId){
$(imageId).toggle();
$(videoId).toggle();
}

function toggleThumbnail(id){
$("#image_"+id).toggle();
$("#video_"+id).toggle();
}

function toggleVideo(id){
$("#thumbnail_"+id).toggle();
$("#yt_"+id).toggle();
}

function openUrl(url){
window.open(url, '_blank');
}

//Tests
function hover(element){
element.setAttribute('src', "./imgs/NS_gameplay-short-5s.gif");
}

function unhover(element){
element.setAttribute('src', "./imgs/NS_cover-art.png");
}

function setExtra(id, showElementId){
    $("#play-instructions_"+id).hide();
    $("#more-info_"+id).hide();
    $("#full-video_"+id).hide();
    $("#empty-space_"+id).hide();
    $("#"+showElementId+id).show();
}