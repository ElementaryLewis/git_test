let doc1 = document.createElement("div");

const fetchApi = async () => {
  const url = "https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "276e9500a1msh9690a8f50799949p174f20jsna5ccc4e8418b",
      "X-RapidAPI-Host": "dad-jokes-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);

    doc1.textContent = result
      .slice(11, -3)
      .replace(/\\u201c/g, '"')
      .replace(/\\u201d/g, '"')
      .replace(/\\u2019/g, "'")
      .replace(/\\u2014/g, "'")
      .replace(/\\u00b2/g, "²");
    doc1.setAttribute("id", "joke-text");
    document.body.appendChild(doc1);

    let jokeTeller = new SpeechSynthesisUtterance();
    jokeTeller.text = result
      .slice(11, -3)
      .replace(/\\u201c/g, '"')
      .replace(/\\u201d/g, '"')
      .replace(/\\u2019/g, "'")
      .replace(/\\u2014/g, "'")
      .replace(/\\u00b2/g, "²");
    jokeTeller.lang = "en-GB";
    window.speechSynthesis.speak(jokeTeller);
  } catch (error) {
    console.error(error);
  }
};

let DadButton = document.getElementById("joke-dad");
DadButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchApi();
});

async function sound() {
  let snd = await new Audio("drum.mp3");
  snd.play();
}
