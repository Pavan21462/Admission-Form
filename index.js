function match (){
    
    var usernam = document.getElementById("username").value;
    var userpass = document.getElementById("password").value;


    var real_username = "Pavanj";
    var real_userpass = "pavan1020"

    if(usernam == real_username && userpass == real_userpass){
        window.location.href="interface/PART1.HTML";
    }
    else{
        var info = document.querySelector("h5")
            info.innerHTML="Username or Password incorrect...!"
            info.style.color="red"
    
        if(username != real_username){
    var inputinfo = document.querySelector(".box form .inputbox input:valid ~ span, .box form .inputbox input:focus ~ span ")
            {
                inputinfo.style.color ="rgb(242, 34, 19)"
                inputinfo.style.font-size("0.8em")
                inputinfo.style.transform="translateY(-40px)"
            }
        }

        if(userpass != real_userpass){
            var inputinfo = document.querySelector(".box form .inputbox input:valid ~ span, .box form .inputbox input:focus ~ span")
                    {
                        inputinfo.style.color ="rgb(242, 34, 19)"
                        inputinfo.style.font-size("0.8em")
                        inputinfo.style.transform="translateY(-40px)"
                    }
                }
    }
}
