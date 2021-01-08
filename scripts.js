var time = function(){
    document.getElementById('placeholder').innerHTML = Date();
}

var evaluateEmail = function(){
    var email = document.getElementById('input-box').value;
    document.getElementById('placeholder').innerHTML = evaluateEmailFunction(email);
}

var evaluateEmailFunction = function(e){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(e)){
        return "Match";
    }
    return "Do not";
}