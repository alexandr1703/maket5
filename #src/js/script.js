$('.slider__com').slick({
    infinite: true,
    dots: true,
    arrows:false,
    // autoplay: true,
    // autoplaySpeed:10000,
    slidesToShow: 2,
    slidesToScroll: 1
});


$("#formButton").click(function() {
    let form =$("#form")
    let name= $(".inpName").val();
    let email= $(".inpEmail").val();
    let subject= $(".inpSubject").val();
    let message= $(".message").val();
    let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
    let regMail = /^\S+@\S+\.\S+$/;
    let errorArray = [0, 0, 0, 0];
    if (name==null || name=="" || name.search(nameReg)){
        $(".inpName").attr("placeholder", "Заповніть це поле");
        $(".inpName").addClass("wrong_inp");
        errorArray[0] = 1;
    } else {
      $(".inpName").removeClass("wrong_inp");
      errorArray[0] = 0;
    }

    if(subject==null || subject=="" || subject.search(nameReg)){
        $(".inpSubject").attr("placeholder", "Заповніть це поле");
        $(".inpSubject").addClass("wrong_inp");
        errorArray[1] = 1;
    } else {
      $(".inpSubject").removeClass("wrong_inp");
      errorArray[1] = 0;
    }

    if(email==null || email=="" || email.search(regMail)) {
        $(".inpEmail").attr("placeholder", "Заповніть це поле");
        $(".inpEmail").addClass("wrong_inp");
        errorArray[2] = 1;
    } else {
      $(".inpEmail").removeClass("wrong_inp");
      errorArray[2] = 0;
    }

    if(message==null || message=="" || message.search(nameReg)){
        $(".message").attr("placeholder", "Заповніть це поле");
        $(".message").addClass("wrong_inp");
        errorArray[3] = 1;
      } else {
        $(".message").removeClass("wrong_inp");
        errorArray[3] = 0;
      }
    if (errorArray[0] == 1 || errorArray[1] == 1 || errorArray[2] == 1 || errorArray[3] ==1){
        return false;
    }

    if (errorArray[0] == 0 && errorArray[1] == 0 && errorArray[2] == 0 && errorArray[3] ==0){
      $(".inpEmail").removeClass("wrong_inp");
      $(".inpName").removeClass("wrong_inp");
      $(".inpSubject").removeClass("wrong_inp");
      $(".message").removeClass("wrong_inp");
      $('input').val('');
      $('textarea').val('');
      form.submit();
      return true;
    }
  });

  