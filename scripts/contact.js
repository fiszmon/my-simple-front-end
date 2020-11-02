function all_not_empty(){
    const name = document.getElementsByName("name")[0].value.length;
    const email = document.getElementsByName("mail")[0].value.length;
    const msg = document.getElementsByName("message")[0].value.length;

    if(name > 0 && email > 0 && msg > 0){
        document.getElementById("submit").removeAttribute("disabled");
    }
}


function validate_name() {
    const name = document.getElementsByName("name")[0];

    if (/^([A-Z][a-z]+\s?)*([A-Z][a-z]+)+$/g.test(name.value))
    {
        document.getElementById("err_name").className = "passed";
    }
    else
    {
        document.getElementById("err_name").className = "failed";
    }
}

function validate_email() {
    const email = document.getElementsByName("mail")[0];
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value))
    {
        document.getElementById("err_mail").className = "passed";
    }
    else
    {
        document.getElementById("err_mail").className = "failed";
    }

}

function on_submit(e){
    e.preventDefault();
    validate_email();
    validate_name();
    const msg = document.getElementsByName("message")[0];
    if(/^\s*$/g.test(msg.value))
    {
        document.getElementById("err_mes").className = "failed";
    }
    else
    {
        document.getElementById("err_mes").className = "passed";
    }

    const err = document.getElementsByClassName("failed").length;
    if(err === 0){
        document.getElementsByName("name")[0].value = '';
        document.getElementsByName("mail")[0].value = '';
        document.getElementsByName("message")[0].value = '';
        let att = document.createAttribute("disabled");
        document.getElementById("submit").setAttributeNode(att);
        document.getElementById("err_mes").className = "passed";
        document.getElementById("err_mail").className = "passed";
        document.getElementById("err_name").className = "passed";
        alert("Message has been sent!");
    }
    return false;
}