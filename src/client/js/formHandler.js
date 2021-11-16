async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById("url").value;

    // encode url from input to pass in into server via route parameter
    // assign undefined value to exlude the failure API call if the input is empty
    let encodeUrl = encodeURIComponent(url) || undefined;

    // clear error message on form resubmit
    document.getElementById("error").innerHTML = "";

    // send the data from the input to server
    const response = await fetch(`/getData/${encodeUrl}`);
    const json = await response.json();
    let msg = json.status.msg;

    // validate the form submission
    Client.formSubmitValidator(msg, json);
}

export { handleSubmit };
