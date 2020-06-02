function toTop(){
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 500, 'swing');
}

function changeSign(n){
    var collaps = document.getElementsByClassName('collasplable');
    if (collaps[n-1].className.indexOf('active') == -1){
        collaps[n-1].className += ' active';
    }else{
        collaps[n-1].className = collaps[n-1].className.replace(" active", "");
    }
}

function index(nlist){
    var i = 0;
    for (i; i < nlist.length; i++){
        if (nlist[i].className.indexOf('active') != -1){
            return i+1;
        }
    }

}

function showInfo(n){
    var collaps = document.getElementsByClassName('collasplable');
    var curCollap = index(collaps);

    if (n==1){
        changeSign(n);
        $('#sic').slideToggle('slow');
        
        if (curCollap == 2){
            $('#wp').slideUp('slow', changeSign(2));
        }else if (curCollap == 3){
            $('#ecoo').slideUp('slow', changeSign(3));
        }

    }else if (n==2){
        changeSign(n);
        $('#wp').slideToggle('slow');

        if (curCollap == 1){
            $('#sic').slideUp('slow', changeSign(1));
        }else if (curCollap == 3){
            $('#ecoo').slideUp('slow', changeSign(3));
        }

    }else if (n==3){
        changeSign(n);
        $('#ecoo').slideToggle('slow');

        if (curCollap == 1){
            $('#sic').slideUp('slow', changeSign(1));
        }else if (curCollap == 2){
            $('#wp').slideUp('slow', changeSign(2));
        }
    }
}

function dropDown(n){
    if (n == 1){
        $('#mpa').toggleClass('w3-show');
    }else if (n == 2){
        $('#ccc').toggleClass('w3-show');
    }else if (n == 3){
        $('#ml-button').toggleClass('w3-hide');
        $('#ml').toggleClass('w3-show');
    }
}
function changeTheme(isSpace){
    $('body').toggleClass('theme2');
    $('#topbar i').toggleClass("w3-text-black");

    if (isSpace){
        $('.parallax').css("background-image", "url(City.jpg)");
        isSpace = false;
    }else{
        $('.parallax').css("background-image", "url(Space.jpg)");
        isSpace=true;
    }
    $('#welcomeSign').toggleClass('w3-text-dark-grey');
    $('.w3-sidebar').toggleClass('w3-black');
    $('#logo').toggleClass('w3-dark-grey');

    return isSpace;
}

function moveTo(n){
    var body = $("html, body");
    if (n == 1){
        var pos = $('#About').position();
    }else if (n == 2){
        var pos = $('#Skills').position();
    }else if (n == 3){
        var pos = $('#Works').position();
    }else if (n == 4){
        var pos = $('#More').position();
    }
    body.stop().animate({scrollTop:pos.top}, 500, 'swing');
}

function closeModal(event){
    var modal1 = document.getElementById('modal01');
    var modal2 = document.getElementById('modal02');
    var modal3 = document.getElementById('modal03');
    var currentImg = $('.imgShow img.active');
    var currentDot = $('.dot.active');
    if (event.target == modal1 || event.target == modal2 || event.target == modal3){
        currentImg.removeClass('active');
        $('.imgShow img:first-child').addClass('active');

        currentDot.removeClass('active');
        $('.dot:first-child').addClass('active');
        modal1.style.display="none";
        modal2.style.display="none";
        modal3.style.display="none";
    }
}

function prevOne(){
    var currentImg = $('.imgShow img.active')
    var currentDot = $('.dot.active')
    
    var prevImg = currentImg.removeClass('active').prev();
    var prevDot = currentDot.removeClass('active').prev();
    if(prevImg.length == 0){
        $('.imgShow img:nth-child(5)').addClass('active');
        $('.dot:last-child').addClass('active');
    }else{
        prevImg.addClass('active');
        prevDot.addClass('active');
    }
}

function nextOne(n){
    var currentImg = $('.imgShow img.active')
    var currentDot = $('.dot.active')
    
    var nextImg = currentImg.removeClass('active').next();
    var nextDot = currentDot.removeClass('active').next();

    if(n == 4){
        $('.imgShow img:first-child').addClass('active');
        $('.dot:first-child').addClass('active');
        n = 0

    }else{
        nextImg.addClass('active');
        nextDot.addClass('active');
        n = n+1
    }
    return n;
}

function curDot(n){
    var currentDot = $('.dot.active');
    currentDot.removeClass("active");

    var currentImg = $('.imgShow img.active');
    currentImg.removeClass('active');

    if (n == 1){
        $('.imgShow img:first-child').addClass('active');
        $('.dot:first-child').addClass('active');
    }else{
        $('.imgShow img:nth-child('+n+')').addClass('active');
        $('.dot:nth-child('+n+')').addClass('active');
    }
    
}

$(document).ready(function(){

    $('#topbar').on('click', toTop);
    $('#topBtn').click(toTop);
    $('.prev').click(prevOne);

    n = 0;
    $('.next').click(function(){
        n = nextOne(n);
    });

    $(window).on('click', closeModal);

    $(window).scroll(function(event){
        var pos = $(this).scrollTop();
        var a_pos = $('#About').position();
        var s_pos = $('#Skills').position();
        var w_pos = $('#Works').position();
        var m_pos = $('#More').position();

        if (pos >= a_pos.top/2){
            $('#topbar').addClass('w3-card').addClass('w3-orange').addClass('w3-animate-top');
            $('.w3-sidebar').removeClass('w3-hide');
        }else{
            $('#topbar').removeClass('w3-card').removeClass('w3-orange').removeClass('w3-animate-top');
        }
        
        if (pos >= a_pos.top/2 && pos < s_pos.top/2){
            $('#About .w3-center').addClass('w3-show').delay(300).queue(function(next){
                $("#contact").addClass("w3-show").delay(300).queue(function(next){
                    $("#bgInfo").addClass("w3-show").delay(300).queue(function(next){
                        $("#hobLang").addClass("w3-show");
                        next();
                    });
                    next();
                });
                next();
            });
        } 

        if (pos >= s_pos.top/1.25 && pos < w_pos.top/1.5){
            $('#Skills .w3-center').addClass('w3-show');

        }
        if (pos >= s_pos.top/1.15 && pos < w_pos.top/1.5){
            $('#Skills .w3-center').addClass('w3-show');
            $('#skfBar1').animate({width:'90%'},'slow');
            $('#skfBar2').animate({width:'70%'},'slow');
            $('#skfBar3').animate({width:'70%'},'slow');
            $('#skfBar4').animate({width:'65%'},'slow');
            $('#skfBar5').animate({width:'80%'},'slow');

            $('#skfBar6').animate({width:'85%'},'slow');
            $('#skfBar7').animate({width:'80%'},'slow');
            $('#skfBar8').animate({width:'85%'},'slow');
            $('#skfBar9').animate({width:'70%'},'slow');
            $('#skfBar10').animate({width:'45%'},'slow');

            $('#skfBar11').animate({width:'65%'},'slow');
            $('#skfBar12').animate({width:'45%'},'slow');

            $('#skfBar13').animate({width:'70%'},'slow');
            $('#skfBar14').animate({width:'50%'},'slow');
            $('#skfBar15').animate({width:'65%'},'slow');
            $('#skfBar16').animate({width:'45%'},'slow');
            $('#skfBar17').animate({width:'80%'},'slow');
        }

        if(pos >= w_pos.top/1.2 && pos < m_pos.top/1.3){
            $('#Works .w3-center').addClass('w3-show').delay(300).queue(function(next){
                $('#ninjaM').addClass('w3-show').delay(300).queue(function(next){
                    $('#liftJ').addClass('w3-show').delay(300).queue(function(next){
                        $('#ProsH').addClass('w3-show').delay(100).queue(function(next){
                            $('#moreW').addClass('w3-show');
                            next();
                        })
                        next();
                    })
                    next();
                })
                next();
            });
        }

        if(pos >= m_pos.top/1.15 && pos < m_pos.top){
            $('#ac').addClass('w3-show').delay(300).queue(function(next){
                $('#awards').addClass('w3-show').delay(300).queue(function(next){
                    $('#ac ul').addClass('w3-show');
                    next();
                })
                $('#cert').addClass('w3-show');
                $('#eca').addClass('w3-show');
                $('#ecaT').addClass('w3-show');
                next();
            })
        }
    });

    $('#pLangs #la').click(function(){
        $('#pLangs').addClass('w3-hide');
        $('#pLangs2 #ra').addClass('w3-text-teal');
        $('#pLangs2').removeClass('w3-hide');
    });

    $('#pLangs2 #ra').click(function(){
        $('#pLangs2').addClass('w3-hide');
        $('#pLangs').removeClass('w3-hide');
    });

    $('#frameworks #la').click(function(){
        $('#frameworks').addClass('w3-hide');
        $('#frameworks2 #ra').addClass('w3-text-teal');
        $('#frameworks2').removeClass('w3-hide');
    });

    $('#frameworks2 #ra').click(function(){
        $('#frameworks2').addClass('w3-hide');
        $('#frameworks').removeClass('w3-hide');
    });

    isSpace = true;

    $('#me').click(function(){
        isSpace = changeTheme(isSpace);
    });

    window.onkeydown = function(e){

        if (e.which == 39){
            n = nextOne(n);
        }
        if(e.which == 37){
            prevOne();
        }

        if (e.which == 70){
            isSpace = changeTheme(isSpace)
        }
        if (e.which == 73){
            toTop();
        }
    }

});
