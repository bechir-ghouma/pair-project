//Cheching mdp && name
var arr=[{
    username:'bechir',
    password:'123'
}]
    $('#btnsin').on('click',function(e){
        console.log(arr)
        e.preventDefault()
        for (var i=0;i<arr.length;i++){
        if(arr[i].username === $('#username').val() && arr[i].password === $('#password').val()){
            console.log(username , password)
        window.location.href = './index.html'
        }
        else{
        alert('Verify your email or password')
        }
    }
        })
$('#btnsup').on('click',function(e){
    e.preventDefault()
    arr.push({username: $('.usernameLog').val(),password: $('.passwordLog').val()})
    console.log(arr)
    alert('saved')
    window.location.href = './index.html'
})

// $('#btnsup').on('click',function(){
//     $('#mydiv').toggle()
// })
// $('#btnsup').on('click',function(){
//     $('#login-box').toggle()
// })   
$('.boutp').on('click',function(e){
    e.preventDefault()
    alert('Nice choice my friend , I like it too')
})


$('.boutn').on('click',function(e){
    e.preventDefault()
    alert('Thank you for submitting')
})
