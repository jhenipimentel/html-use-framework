function requestOfServerGet(){
    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=Getting"
    }).done(function(data){
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value_of_variable').innerHTML = data.value_of_variable_info
        document.getElementById('company_site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });
}

function requestOfServerPost(){
    $.ajax({
        type: 'post',
        url: "http://localhost:8000/hello-rota?info=Posting"
    }).done(function(data){
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value_of_variable').innerHTML = data.value_of_variable_info
        document.getElementById('company_site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });
}

function submitDataOfUser(){
    const nameOfUser = $("#name").val()
    const lastNameOfUser = $("#lastname").val()
    const ageOfUser = $("#age").val()
    $.ajax({
        "url": "http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            name:nameOfUser,
            last_name:lastNameOfUser,
            age: ageOfUser
        }),
    }).done(function (response) {
        if (response.success) {
            $("#error-record-msg").css('display','none')
            
            $("#success-record-msg").css('display','block')

            $("#name").val('')
            $("#lastname").val('')
            $("#age").val('')
        }else{
            $("#success-record-msg").css('display','none')
            
            let errorMsg;
            let errorWidth = '350px'

            if(response.missingAttribute === 'name'){
                errorMsg = 'O campo de nome está ausente, favor preencher'
                errorWidth = '415px'
            }
            if(response.missingAttribute === 'last_name'){
                errorMsg = 'O campo de sobrenome está ausente, favor preencher'
                errorWidth = '435px'
            }
            if(response.missingAttribute === 'age'){
                errorMsg = 'O campo de idade está ausente, favor preencher'
                errorWidth = '415px'
            }

            $("#error-record-msg").css('display','block')
            $("#content-error-record-msg").html(errorMsg)
            $("#error-record-msg").css('width',errorWidth)
        }
    });
}


function closeSuccessMsg(){
    $("#success-record-msg").css('display','none')
}
function closeFailureMsg(){
    $("#error-record-msg").css('display','none')
}