async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById("url").value;
    let encodeUrl = encodeURIComponent(url) || undefined;

    console.log("::: Form Submitted :::");

    document.getElementById("error").innerHTML = "";

    const response = await fetch(`/getData/${encodeUrl}`);
    const json = await response.json();
    let msg = json.status.msg;
    console.log(json);
    Client.formSubmitValidator(msg, json);
}

export { handleSubmit };
