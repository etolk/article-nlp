function formSubmitValidator(msg, res) {
    // create object to transform the API result into readable values
    const polarity = {
        "P+": "strong positive 😄",
        "P": "positive 🙂",
        "NEU": "neutral 😐",
        "N": "negative 🙁",
        "N+": "strong negative 😠",
        "NONE": "without polarity 🤷‍♂️",
    };

    let scoreTag = res.score_tag;
    // assign the undefined value to avoid the error toLowerCase() of undefined
    let irony = res.irony || "undefined";
    let confidence = res.confidence;

    // get readable values of score tag
    function getPolarity(scoreTag) {
        return polarity[scoreTag] || scoreTag;
    }

    if (msg == "OK") {
        document.getElementById("score_tag").innerHTML = `Polarity: ${getPolarity(scoreTag)}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${confidence}% 😎`;
        document.getElementById("irony").innerHTML = `Irony: ${irony.toLowerCase()} 😏`;
    } else {
        // clear previous results if error
        document.getElementById("error").innerHTML = "Please enter the valid URL";
        document.getElementById("score_tag").innerHTML = "";
        document.getElementById("confidence").innerHTML = "";
        document.getElementById("irony").innerHTML = "";
    }
}

export { formSubmitValidator };
