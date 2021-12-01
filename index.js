$(".form").validate({
 rules:{
     email:{
        email: true,
        minlength:2
     },
     password:{
         required:true,
        minlength:8,
        maxlength:15
     }
 },
  messages:{
 email:{
     required:"Please,type your email",
    minlength: "At least 2 characters ",
    email: "type real email"
 },
 password:{
    minlength: "At least 8 characters ",
    required:"Please,type your password"
 }
  }
   });