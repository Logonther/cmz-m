$(function () {
    mui.init();
    mui('.mui-scroll-wrapper').scroll({
        //deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators:false
    });
    /*点击切换分类*/
    $('#segmentedControl a').on('click',function () {
        $('#segmentedControl a').removeClass('mui-active');
        $(this).addClass('mui-active');
        $('.mui-content-padded .mui-control-content').eq($(this).index()).show().siblings().hide();
    })
    /*点击显示地址信息*/
    $('.orderinfo .address span').on('click',function () {
        mui.toast($(this).attr('title'))
    })
    /*点击显示物品名字*/
    $('.good .pic i').on('click',function () {
        mui.toast($(this).attr('title'))
    })
})