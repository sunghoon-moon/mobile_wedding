// main.js

// 갤러리 사진 클릭시 large img 변경
$(function(){
    $('#gallery .row > li').click(function(){
        var src = $(this).find('img').attr('src');

        $('#gallery .large_img > img').attr('src', src);
    })
})

// 갤러리 사진 클릭시 클릭한 이미지 opacity 조절
$(function(){
    var img_num = 0;
    $('#gallery .row > li img').removeClass('active');
    $('#gallery .row > li img').eq(img_num).addClass('active');

    $('#gallery .row > li img').click(function(){
        $('#gallery .row > li img').removeClass('active');
        $(this).eq(img_num).addClass('active');
    })
})