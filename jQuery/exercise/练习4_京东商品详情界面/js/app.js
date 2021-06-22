/*
 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

 (function(){
    $(function(){
        
        var store_tabs_index = 0;
        var product_tabs_index = 0;
        var $pic_list = $("#icon_list > li");
        var PIC_WIDTH = 62;
        var pic_index = 0;
        
        //1
        $("#app_jd").hover(function(){
            $(this).children("#app_jd_items").css("display", "block");
        }, function(){
            $(this).children("#app_jd_items").css("display", "none");
        });
        
        
        $("#service").hover(function(){
            $(this).children("#service_items").css("display", "block");
        }, function(){
            $(this).children("#service_items").css("display", "none");
        });

        $("#site_nav").hover(function(){
            $(this).children("#site_nav_items").css("display", "block");
        }, function(){
            $(this).children("#site_nav_items").css("display", "none");
        });

        
        $("#my_jd").hover(function(){
            $(this).children("#my_jd_items").css("display", "block");
        }, function(){
            $(this).children("#my_jd_items").css("display", "none");
        });

        $("#settle_up").hover(function(){
            $(this).children("#settle_up_items").css("display", "block");
        }, function(){
            $(this).children("#settle_up_items").css("display", "none");
        });
        
        //2
        $("#category")
        .hover(function(){
            $(this).children("#category_items").css("display", "block");
        }, function(){
            $(this).children("#category_items").css("display", "none");
        })
        .find(".cate_item:eq(0)")
        .hover(function(){
            $(this).find(".sub_cate_box").css("display", "block");
        }, function(){
            $(this).find(".sub_cate_box").css("display", "none");
        })
        .next()
        .hover(function(){
            $(this).find(".sub_cate_box").css("display", "block");
        }, function(){
            $(this).find(".sub_cate_box").css("display", "none");
        })


        //3
        $("#search_box input:text")
        .keydown(function(){
            $("#search_helper").css("display", "block");    
        })
        .focus(function(){
            if($(this).val() != ""){
                $("#search_helper").css("display", "block"); 
            }
        })
        .blur(function(){
            $("#search_helper").css("display", "none");
        });

        //4
        $("#dd > a:last").click(function(){
           
            $(this).children().toggleClass("backword");
             if($(this).children().attr("class") == "backword"){
                $(this).parent().css("width", 200);
                $(this).prevAll("a:eq(0),a:eq(1)").css("display","block");
                
             }else{
                $(this).parent().css("width", 155);
                $(this).prevAll("a:eq(0),a:eq(1)").css("display","none");
             }
        });

        
        //5,6
        $("#store_select")
        .hover(function(){
            $(this).children("#store_content").css("display", "block");
        }, function(){
            $(this).children("#store_content").css("display", "none");
        })
        .find("#store_tabs > li").click(function(){
            var target_store_tabs = $(this).index();
            $("#store_tabs > li").eq(store_tabs_index).removeClass("hover");
            $("#store_tabs > li").eq(target_store_tabs).addClass("hover");
            store_tabs_index = target_store_tabs;
        });


        //7
        $("#minicart").hover(function(){
            $(this).children("div")
            .css({"display": "block"})
            .addClass("minicart");
            
        }, function(){
            $(this).children("div").css("display", "none");
        });


        //8
        $("#product_detail > ul > li").click(function(){
            var target_product_tabs = $(this).index();
            if(product_tabs_index != target_product_tabs){
                $("#product_detail > ul > li").eq(product_tabs_index).removeClass("current");
                $("#product_detail > ul > li").eq(target_product_tabs).addClass("current");
                $("#product_detail > div:gt(0)").eq(product_tabs_index).css("display", "none");
                $("#product_detail > div:gt(0)").eq(target_product_tabs).css("display", "block");
                product_tabs_index = target_product_tabs;
            }
        });

        
        //9
        if($pic_list.length > 5){
            $("#preview > h1 > a:last").attr("class", "forward");
        }
        
        $("#preview > h1 > a").click(function(){
            var current_left = $("#icon_list").position().left;
            
            if($(this).index() == 0){

                if(current_left <= -($pic_list.length - 5)*PIC_WIDTH){
                    PIC_WIDTH = 62;
                }

                if(current_left >= 0){
                    $("#preview > h1 > a:first").attr("class", "backward_disabled");
                    PIC_WIDTH = 0
                }
                
                $("#icon_list").css({left: current_left+PIC_WIDTH})
                current_left = $("#icon_list").position().left;
                console.log(current_left);
                
                

            }else if($(this).index() == 1){
                
                if(current_left >= 0){
                    PIC_WIDTH = 62;
                }
                
                $("#icon_list").css({left: current_left-PIC_WIDTH});
                current_left = $("#icon_list").position().left;
                
                if(current_left <= -($pic_list.length - 5)*PIC_WIDTH){
                    $('#preview > h1 > a:last').attr("class", "forward_disabled");
                    PIC_WIDTH = 0;
                }
            }

            if(current_left < 0){
                $("#preview > h1 > a:first").attr("class", "backward");
            }

            if(current_left > -($pic_list.length - 5)*PIC_WIDTH){
                $('#preview > h1 > a:last').attr("class", "forward");
            }
            
   
        });

        // 10
        $("#icon_list > li").hover(function(){
           
            var pic = $(this).children().attr("src");
            var pic_list = pic.split(".");
            var med_pic = pic_list[0]+"-m."+pic_list[1];
            
            $("#mediumImg").attr("src", med_pic );
            $(this).children().addClass("hoveredThumb");
        }, function(){

            $(this).children().removeClass("hoveredThumb");

        });


        //11
        $("#medimImgContainer")
        .mousemove(function(event){
            var x_position = event.offsetX;
            var y_position = event.offsetY;
            console.log(x_position, y_position);
            
            $("#mask").css({
                "display": "block",
                "left": x_position,
                "top": y_position   
            })

            
        })
        .mouseout(function(){
            $("#mask").css("display", "none");
        })


    })
 })();