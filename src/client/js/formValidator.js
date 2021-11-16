function formSubmitValidator(msg, res) {
    const polarity = {
        "P+": "strong positive 😄",
        P: "positive 🙂",
        NEU: "neutral 😐",
        N: "negative 🙁",
        "N+": "strong negative 😠",
        NONE: "without polarity 🤷‍♂️",
    };

    let scoreTag = res.score_tag;

    function getPolarity(scoreTag) {
        return polarity[scoreTag] || scoreTag;
    }

    if (msg == "OK") {
        document.getElementById("score_tag").innerHTML = `Polarity: ${getPolarity(scoreTag)}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}% 😎`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony.toLowerCase()} 😏`;
    } else {
        document.getElementById("error").innerHTML = "Please enter the valid URL";
        document.getElementById("score_tag").innerHTML = "";
        document.getElementById("confidence").innerHTML = "";
        document.getElementById("irony").innerHTML = "";
    }
}

export { formSubmitValidator };
