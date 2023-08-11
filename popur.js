const jokeBody = document.getElementById("jokeBody");
const refresh = document.getElementById("refresh");
const typeProgram = document.getElementById("flexRadioDefault1");

async function getJoke() {
  const type = typeProgram.checked ? "programming" : "general";
  try {
    await fetch(
      `https://official-joke-api.appspot.com/jokes/${type}/random`
    ).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          jokeBody.innerHTML = `<p>${data[0].setup}</p><p>${data[0].punchline}</p>`;
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
getJoke();

refresh.addEventListener("click", getJoke);
