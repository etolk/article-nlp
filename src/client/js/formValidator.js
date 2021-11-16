function formSubmitValidator(msg, res) {
    console.log(msg);
    const polarity = {
        "P+": "strong positive 😄",
        P: "positive 🙂",
        NEU: "neutral 😐",
        N: "negative 🙁",
        "N+": "strong negative 😠",
        NONE: "without polarity 🤷‍♂️",
    };

    let scoreTag = res.score_tag;
    let irony = res.irony || "undefined";
    let confidence = res.confidence;

    function getPolarity(scoreTag) {
        return polarity[scoreTag] || scoreTag;
    }

    if (msg == "OK") {
        document.getElementById("score_tag").innerHTML = `Polarity: ${getPolarity(scoreTag)}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${confidence}% 😎`;
        document.getElementById("irony").innerHTML = `Irony: ${irony.toLowerCase()} 😏`;
    } else {
        document.getElementById("error").innerHTML = "Please enter the valid URL";
        document.getElementById("score_tag").innerHTML = "";
        document.getElementById("confidence").innerHTML = "";
        document.getElementById("irony").innerHTML = "";
    }
}

export { formSubmitValidator };
