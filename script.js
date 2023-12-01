const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

//add input validation later
const inputHandler = () => {

    console.log(typeof(textareaEl));
    //Simple validation. 
  if (textareaEl.value.includes("<script>")) {
    alert("You can't use <script> in your text.");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }

  const currentCharCount = textareaEl.value.length;
  const twitterCharDisplayNumber = 280 - currentCharCount;
  const facebookCharDisplayNumber = 2200 - currentCharCount;
  let numberOfWords = textareaEl.value.split(" ").length;

  charactersNumberEl.textContent = currentCharCount;
  twitterNumberEl.textContent = twitterCharDisplayNumber;
  facebookNumberEl.textContent = facebookCharDisplayNumber;
  wordsNumberEl.textContent = numberOfWords;

  //validation - check

  if (twitterCharDisplayNumber < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharDisplayNumber < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }
};
textareaEl.addEventListener("input", inputHandler);

//count words method to be put in inputHandler

//textareaEl.value //gives value as string
