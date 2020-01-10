let form = document.getElementById("addContactBtn")
if(form){
    form.addEventListener("click", function(event){
    /*Je modifie le comportement par défault de l'event */
    event.preventDefault();
    let name = document.querySelector(".name").value;
    let surname = document.querySelector(".surname").value;
    let avatar = document.querySelector(".avatar").value;
    let  numberGSM= document.querySelector(".numberGSM").value;
    let numberFix = document.querySelector(".numberFix").value;
    let mail = document.querySelector(".mail").value;
    
        fetch('/contact', {
            method: 'POST',
            headers : {
                /*je spécifie ce que je veux envoyer ici du json */
                'Content-Type':'application/json'
            },
            body :JSON.stringify({
                name: name,
                surname: surname,
                avatar:avatar,
                numberGSM: numberGSM,
                numberFix:numberFix,
                mail:mail
            })

        })
        .then(function(){
            window.location.reload();
        })
    })
}
let formComment =document.getElementById("addComment");
if(formComment){
    formComment.addEventListener("submit", function(event){
        event.preventDefault();
        let comment= document.getElementById('comment').value;
        var pathname = window.location.pathname;
        fetch(pathname+'/comments', {
            method: 'POST',
            headers : {
                /*je spécifie ce que je veux envoyer ici du json */
                'Content-Type':'application/json'
            },
            body :JSON.stringify({
                comment:comment
            })

        })
        .then(function(){
            window.location.reload();
        })
    })
}
let btnDelete = document.querySelector(".btnDelete");
if(btnDelete){
    btnDelete.addEventListener("click", function(){
        let  comment ="";
        var pathname = window.location.pathname;
        fetch(pathname+'/comments', {
            method: 'POST',
            headers : {
                /*je spécifie ce que je veux envoyer ici du json */
                'Content-Type':'application/json'
            },
            body :JSON.stringify({
                comment:comment
            })

        })
        .then(function(){
            window.location.reload();
        })
     })
}
let formUpdate= document.getElementById("modifier");
if(formUpdate){
    formUpdate.addEventListener("submit", function(event){
        event.preventDefault();
        let name = document.querySelector(".name").value;
        let surname = document.querySelector(".surname").value;
        let  numberGSM= document.querySelector(".numberGSM").value;
        let numberFix = document.querySelector(".numberFix").value;
        let mail = document.querySelector(".mail").value;
       
        fetch('', {
            method: 'PUT',
            headers : {
                /*je spécifie ce que je veux envoyer ici du json */
                'Content-Type':'application/json'
            },
            body :JSON.stringify({
                name: name,
                surname: surname,
                numberGSM: numberGSM,
                numberFix:numberFix,
                mail:mail,
              
            })
        
        })
        .then(function(){
            window.location.replace('/');
        })   
    })
}
