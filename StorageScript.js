
function initiate(){
    var btnSave = document.getElementById("save");
    var btnRetrieve = document.getElementById("retrieve");
    var btnDelete = document.getElementById("delete");
    var btnReview = document.getElementById("review");
    btnSave.addEventListener("click", saveItem);
    btnRetrieve.addEventListener("click", retrieveItem);
    btnDelete.addEventListener("click", deleteItem);
    btnReview.addEventListener("click", reviewAll);
    console.log('initiate method called');
}

function saveItem(){
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    sessionStorage[key]=value;
    console.log('save method called for '+key);
}

function retrieveItem(){
    var key = document.getElementById("key").value;
    var data = document.getElementById("data");
    var value = sessionStorage[key];
    console.log('retrieve method called for '+key);
    data.innerHTML = '<div>' + key + " : " + value + '<div>';
}

function deleteItem(){
    if(confirm("Delete?")){
        var key = document.getElementById('key').value;
        var data = document.getElementById("data");
        sessionStorage.removeItem(key);
        console.log(key + ' deleted');
        data.innerHTML = '<div>'+'Item Deleted'+'<div>';
    }
}

function reviewAll(){
    for(var i=0; i<sessionStorage.length; i++){
        var key = sessionStorage.key(i);
        var value = sessionStorage[key];
        var data = document.getElementById("data");
        data.innerHTML += '<div>'+ key + ' : ' + value + '<br/><div>';
    }
}

addEventListener("load", initiate);