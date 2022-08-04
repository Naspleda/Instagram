  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});


function like(x) {
    if (x.classList.contains("fa-regular")){
      x.classList.remove("fa-regular");
      x.classList.add("fa-solid");
  }
  else{
    x.classList.remove("fa-solid");
    x.classList.add("fa-regular");
  }
  }


$(document).ready(function() {
    $(".enviar").click(function(){
        let comentario = $("#post").val();
        if(comentario != ''){
            $(".comentario").append('<p><span class="bold">Comment </span>'+'<span>'+comentario+'</span></p>');
            $("#post").val("");
            $("#post").attr("placeholder","Add a comment");
        }else{
            $("#post").attr("placeholder","Add a comment");
        }
    });
});

