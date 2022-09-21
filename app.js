function requestOfServer(){

    $.ajax({
        type: 'post',
        url:"http://localhost:8000/routenew?info=oi"
    }).done(function(data){
        console.log(data);
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_varible_info
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')
    });

}

function submitDataOfUser(){
    const nameOfUser = $("#name").val()
    const lastNameOfUser = $("#lastname").val()
    const ageOfUser =$("#age").val()

    $.ajax({
        "url": "http:/localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "content-Type": "application/json; charset=UTF-8"
        },
        
        "data": JSON.stringify({
            name: nameOfUser,
            lastName: lastNameOfUser,
            age:ageOfUser
        })
    }).done(function (response){
            if(response.sucess){
                 alert('Deu boa :)!')
            }
     });
    

    console.log(nameOfUser)
    console.log(lastNameOfUser)
    console.log(ageOfUser)
}