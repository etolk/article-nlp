async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById("url").value;
    let encodeUrl = encodeURIComponent(url);

    console.log("::: Form Submitted :::");

    document.getElementById("error").innerHTML = "";

    if (encodeUrl) {
        const response = await fetch(`/getData/${encodeUrl}`);
        const json = await response.json();
        let msg = json.status.msg;
        Client.formSubmitValidator(msg, json);
    } else {
        document.getElementById("error").innerHTML = "Please enter the valid URL";
        document.getElementById("score_tag").innerHTML = "";
        document.getElementById("confidence").innerHTML = "";
        document.getElementById("irony").innerHTML = "";
    }
}

export { handleSubmit };
