$(document).ready(function()
{
    InitSideNavigation();
    InitOwlCarousel();
    InitCartRowSelection();
});


function InitSideNavigation()
{
    const sideNavHandler = () => $('.side-nav').toggleClass("open");
    $('.side-nav__inner').mouseenter(sideNavHandler);
    $('.side-nav__inner').mouseleave(sideNavHandler);
}


function InitOwlCarousel()
{
    $('.slider-sect__carousel').owlCarousel({
        //loop:true,
        margin:90,
        nav:true,
        dots: true,
        navText:[
            "<img src='img/l-arrow.png'>","<img src='img/r-arrow.png'>"
        ],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items: 4
            }
        }
    });
}

let lastCartSelRow;
function InitCartRowSelection(){
    $('.cart__table .row').click(function(){
        if(lastCartSelRow == null)
        {
            $(this).toggleClass('selected');        
            lastCartSelRow = $(this);
            return;
        }
        lastCartSelRow.toggleClass('selected');          
        $(this).find('input').prop('checked', false);

        $(this).toggleClass('selected');     
        $(this).find('input').prop('checked', true);
           
        lastCartSelRow = $(this);
    })
}