var evaluateEmail = function(){
    var email = document.getElementById('input-box').value;
    document.getElementById('placeholder').innerHTML = evaluateEmailFunction(email);
}

var evaluateEmailFunction = function(e){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(e)){
        successfullySubscribe();
    }
    else{
        document.getElementById('input-box').style.borderColor = "red";
        return document.getElementById('placeholder').innerHTML = "A valid email is required";
    }
}

var successfullySubscribe = function() {
    document.open();
    document.write(" <h1> Thank you </h1> Your subscription was a success!");
    document.close();
}