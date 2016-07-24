$(window).ready(function(){
	// 顶部下拉菜单开始
	// 左侧
	$(".li2>.over").fadeOut(0);
	$(".li2").hover(function(){
		$(".li2>.over").stop(true,true);
		var index=$(this).index(".li2");
		$(".li2>.over").eq(index).fadeIn(500);	
		$("a").eq(index).addClass("am");	
		if(index==1){
			$(".li2").eq(1).addClass("wechat");
			// $(".zuo>s").eq(1).css({"backgroundPosition": -224 -88})
		}else if(index==2){
			$(".li2").eq(2).addClass("appphone");
			// $(".zuo>s").eq(2).css({"backgroundPposition": 0 -20})
		}// else if(index==0){
		// 	$(".zuo>s").eq(0).css({"backgroundPposition": -224 -27})
		// }
	},(function(){
         $(".li2>.over").stop(true,true);
         var index=$(this).index(".li2");
		$(".li2>.over").eq(index).fadeOut(500);
		$("a").eq(index).removeClass("am");	
		if(index==1){
			$(".li2").eq(1).removeClass("wechat");
		}else if(index==2){
			$(".li2").eq(2).removeClass("appphone");
		}  
	}))
    // 右侧
    $(".you>.yiji>.erji").fadeOut(0);
    $(".you>.yiji").hover(function(){
    	$(".yiji>.erji").stop(true,true);
    	$(".yiji>.erji").fadeIn(0);
    	$(".yiji").css({"background":"#fff"})
    },(function(){
    	$(".yiji>.erji").stop(true,true);
    	$(".yiji>.erji").fadeOut(0);
    	$(".yiji").css({"background":""})
    }))



    // topnav开始
    $(".topnav .kuang").fadeOut(0);
    $(".topnav li").hover(function(){
    	   $(".topnav .kuang").stop(true,true);
           var index=$(this).index(".topnav li");
           $(".topnav .kuang").eq(index).fadeIn(0);
    },function(){
    	   $(".topnav .kuang").stop(true,true);
           var index=$(this).index(".topnav li");
           $(".topnav .kuang").eq(index).fadeOut(0);
    })


    // banner轮播开始
    var num=0;
    function change(type){
        type=type||"r";
        if(type=="r"){
        	num++;
           if(num>=$(".banner>a").length){
              num=0;  
          }
        }else if(type=="l"){
        	num--;
        	if(num<0){
        		num=$(".banner>a").length-1
        	}
        }
        $(".banner>a").stop(true,true);
        $(".bgimg>img").stop(true,true);
        $(".banner>a").fadeOut(0).eq(num).fadeIn(0);
        $(".bgimg>img").fadeOut(0).eq(num).fadeIn(0);
        $(".btnbox>.btn").css({"background":"#211616"}).eq(num).css({"background":"#e5004f"});
       
    }
    var lunBo=setInterval(function(){change("r")},1500);

    // 鼠标滑上停止轮播
    $(".menu").hover(function(){
    	clearInterval(lunBo)
    	$(".left").show(0);
    	$(".right").show(0);

    },function(){
    	lunBo=setInterval(function(){change("r")},1500);
    	$(".left").hide(0);
    	$(".right").hide(0);
    })

    // 鼠标滑上按钮
    $(".btnbox>.btn").mouseover(function(){
    	$(".banner>a").stop(true,true);
        $(".bgimg>img").stop(true,true);
    	var index=$(this).index();
    	$(".banner>a").fadeOut(0).eq(index).fadeIn(0);
        $(".bgimg>img").fadeOut(0).eq(index).fadeIn(0);
        $(".btnbox>.btn").css({"background":"#211616"}).eq(index).css({"background":"#e5004f"});
        num=index;
    })


    // 左右按钮.调用函数
    $(".left").click(function(){   	
    	change("l")
    })
    $(".right").click(function(){    	
    	change("r")
    })

    //选项卡.
    $(".selectcell").hide(0);
    $(".leftnav dl").hover(function(){
        $(".selectcell").stop(true,true);
        var index=$(this).index(".leftnav dl");
        $(".leftnav>dl").eq(index).css({"background":"#e5004f"});
        $(".chun").eq(index).css({"textDecoration":"underline"});
        $(".chun").eq(index).css({"textDecorationColor":"white"});
        $(".tubiao").eq(index).attr("src","images/nav"+(index+1)+"a"+".jpg");  
        $(".jiantou").eq(index).hide(0);     
        $(".selectcell").eq(index).show(0);
    },function(){
        $(".selectcell").stop(true,true);
        var index=$(this).index(".leftnav>dl");
        $(".leftnav>dl").eq(index).css({"background":"#333333"});
        $(".chun").eq(index).css({"textDecoration":"none"});
        $(".tubiao").eq(index).attr("src","images/nav"+(index+1)+".jpg");
        $(".jiantou").eq(index).show(0);    
        $(".selectcell").eq(index).hide(0);
    })

    $(".selectcell").hide(0);
    $(".selectcell").hover(function(){
        $(".selectcell").stop(true,true);
        var index=$(this).index(".selectcell");
        $(".leftnav>dl").eq(index).css({"background":"#e5004f"});
        $(".chun").eq(index).css({"textDecoration":"underline"});
        $(".chun").eq(index).css({"textDecorationColor":"white"});
        $(".tubiao").eq(index).attr("src","images/nav"+(index+1)+"a"+".jpg");  
        $(".jiantou").eq(index).hide(0);     
        $(".selectcell").eq(index).show(0);
    },function(){
        $(".selectcell").stop(true,true);
        var index=$(this).index(".selectcell");
        $(".leftnav>dl").eq(index).css({"background":"#333333"});
        $(".chun").eq(index).css({"textDecoration":"none"});
        $(".tubiao").eq(index).attr("src","images/nav"+(index+1)+".jpg");
        $(".jiantou").eq(index).show(0);    
        $(".selectcell").eq(index).hide(0);
    })


    
    $(".rightimg").hover(function(){
        $(".rightimg").css({"right":"10px"})
    },function(){
        $(".rightimg").css({"right":0})
    })






    // 特卖选项卡开始
    $(".chao").hover(function(){
        $(".xuanitem").stop(true,true);
        $(".salejt").stop(true,true);
        var index=$(this).index(".chao");
        $(".salejt").hide(0).eq(index).show(0);
        $(".chao").removeClass("borColor").eq(index).addClass("borColor");
        $(".xuanitem").hide(0).eq(index).show(0);
    },function(){
        $(".salejt").stop(true,true);
        var index=$(this).index(".chao");
        $(".salejt").eq(index).hide(0);
        $(".chao").eq(index).removeClass("borColor");
    })

     // 专柜选项卡开始
    $(".zgtitle").hover(function(){
        $(".zgjt").stop(true,true);
        $(".zgitem").stop(true,true);
        var index=$(this).index(".zgtitle");
        $(".zgjt").hide(0).eq(index).show(0);
        $(".zgtitle").removeClass("zgColor").eq(index).addClass("zgColor");
        $(".zgitem").hide(0).eq(index).show(0);
    },function(){
        $(".zgjt").stop(true,true);
        var index=$(this).index(".zgtitle");
        $(".zgjt").eq(index).hide(0);
        $(".zgtitle").eq(index).removeClass("zgColor");
    })








   
// 楼层左侧  翻页效果

    $(".chunkleft").click(function(){
        var index=$(this).index(".chunkleft");
      $(".itembox").stop(true,true);
      $(".itembox").eq(index).animate({left:-180},function(){
        var fa=$(".itembox").eq(index);
        $(".itemboxs:first",$(fa)).appendTo($(fa))
        $(".itembox").eq(index).css({left:0})
      })
    })
    $(".chunkright").click(function(){
         var index=$(this).index(".chunkright");
        $(".itembox").stop(true,true);       
        $(".itembox").eq(index).css({left:-180});
        var fa=$(".itembox").eq(index);
        $(".itemboxs:last",$(fa)).prependTo($(fa));
        $(".itembox").eq(index).animate({left:0})
    })

    //楼层中间轮播图
   
$(".cell2").each(function(){
        var as=$("a",$(this));
        var w=as.outerWidth();
        as.css("left",w).eq(0).css("left",0);
        var rbtn=$(".cell2right",$(this));
        var lbtn=$(".cell2left",$(this));
        var btnw=lbtn.outerWidth();
        var cell2btn=$(".cell2btn",$(this));
        cell2btn.eq(0).css("background","#E71960");
        var now=0;
        var next=0;
        function cell2Move(type){
            if(type=="r"){
                next++;
                if(next>=as.length){
                    next=as.length-1;
                    return false;
                }
                as.eq(now).animate({left:-w});
                as.eq(next).animate({left:0});
            }else if(type=="l"){
                next--;
                if(next<0){
                    next=0;
                    return false;
                }
                as.eq(now).animate({left:w});
                as.eq(next).animate({left:0});  
            }
            now=next;
            cell2btn.css("background","").eq(next).css("background","#E71960");

        }
        $(this).hover(function(){
            lbtn.stop(true,true);
            rbtn.stop(true,true);
            lbtn.animate({left:0},200)
            rbtn.animate({right:0},200)
        },function(){
            lbtn.stop(true,true);
            rbtn.stop(true,true);
            lbtn.animate({left:-btnw},200)
            rbtn.animate({right:-btnw},200)
        })
        rbtn.click(function(){
            cell2Move("r");
        })
        lbtn.click(function(){
            cell2Move("l");
        })
        cell2btn.click(function(){
            var index=$(this).index();
            if(index>now){
                cell2Move("r");
            }else if(index<now){
                cell2Move("l");
            }
        })
        
    })


    

// 右侧固定定位
   $(window).scroll(function(){

        var tops=$(window).scrollTop();
        var clicknow=0;
        if(tops>=1200){
            $(".floatnav").show(10);
        }else{
            $(".floatnav").hide(10);
        }

      //楼层自动跳转
        $(".floor").each(function(index,nowobj){
            if(tops>$(nowobj).position().top-300){
                $(".floorbtn").removeClass("factive").eq(index).addClass("factive");
            } 
            clicknow=index;          
        })

        //图片按需加载
        
        $("img").each(function(index,nowobj){
            if(tops+$(window).height()>$(nowobj).position().top){
                $(nowobj).attr("src",$(nowobj).attr("data-src"));
            }
         })  

         
        //按钮点击,加返回顶部
        $(".f").click(function(){
            var index=$(this).index();            
            if(index<9){
                var ftops=$(".floor").eq(index).position().top-50;
            }else if(index=9){
                var ftops=1;
            }
            var objj={st:tops};
            $(objj).animate({st:ftops},{
                speed:1000,
                step:function(){
                  $(window).scrollTop(objj.st);
                }
            })    
            $(".f").removeClass("factive").eq(index).addClass("factive");
            clicknow=index;
        })
  })
        //按钮划过
        $(".f").hover(function(){
             var index=$(this).index();
             if(index!=clicknow){
               $(".f").removeClass("factive").eq(index).addClass("factive"); 
             }
                
         },function(){
            if(index!=clicknow){
              $(".f").eq(index).removeClass("factive");
            }
        })
 
// var floor=$(".floor");
//     var f=$(".f").not(".f:last");
//     var clicknow=0;
//     $(window).scroll(function(){
//         var tops=$(window).scrollTop();
//         // document.title=tops;
//         if(tops>760){
//             $(".floatnav").fadeIn(100);
//         }else{
//             $(".floatnav").fadeOut(100);
//         }
//         // console.log(floor.eq(0).offset().top)
//         floor.each(function(num){
//             if($(this).offset().top<=tops){
//                 f.removeClass("factive").eq(num).addClass("factive");
//             }
            
//         })
    
//     })
//     f.click(function(){
//         var index=$(this).index();
//         $(this).removeClass("factive").eq(num).addClass("factive");
//         $("html,body").animate({scrollTop:floor.eq(index).offset().top})
//         clicknow=index;
//     })
//     f.hover(function(){
//         if(clicknow!=$(this).index()){
//             $(this).addClass("factive");
//         }
        
//     },function(){
//         if(clicknow!=$(this).index()){
//             $(this).removeClass("factive");
//         }
//     })

//     /*********返回顶部********/ 
//     $(".backtop").hover(function(){
//         $(this).addClass("factive");
//     },function(){
//             $(this).removeClass("factive");
//     })
//     $(".floor_top").click(function(){
//         $("html,body").animate({scrollTop:0})

//     })




//鼠标悬停动态边框
    $(".tu").hover(function(){
            var w=$(this).outerWidth();
            var h=$(this).outerHeight();
            // $(".tu .left").style.display="block";
            // $(".tu .right").style.display="block";
            // $(".top").style.display="block";
            // $(".bottom").style.display="block";
            $(".left").stop(true,true);
            $(".right").stop(true,true);
            $(".top").stop(true,true);
            $(".bottom").stop(true,true);

            $(".left",$(this)).animate({height:h});
            $(".right",$(this)).animate({height:h});
            $(".top",$(this)).animate({width:w});
            $(".bottom",$(this)).animate({width:w});
        },function(){
            $(".left").stop(true,true);
            $(".right").stop(true,true);
            $(".top").stop(true,true);
            $(".bottom").stop(true,true);

            $(".left",$(this)).animate({height:0});
            $(".right",$(this)).animate({height:0});
            $(".top",$(this)).animate({width:0});
            $(".bottom",$(this)).animate({width:0});
        })


})