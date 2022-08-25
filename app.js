function requestOfServer(){

    $.ajax({
        type: 'get',
        url:"http://localhost:8000/hello-world?info=oi"
    }).done(function(data){
        console.log(data);
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_varible_info
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')
    });

}