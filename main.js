// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("click", (event) => {
  const spanHeart = event.target;
  if (spanHeart.tagName.toLowerCase() === "span") {
    mimicServerCall()
      .then(() =>{
        if(spanHeart.textContent==="♡"){
        spanHeart.textContent=FULL_HEART
        spanHeart.classList.add("activated-heart")}
        else { 
        spanHeart.textContent=EMPTY_HEART
        spanHeart.classList.remove("activated-heart")
        }
      })
      .catch((error) => {
        const errorDiv = document.querySelector("#modal");
        errorDiv.classList.remove("hidden");
        const errorP = document.querySelector("#modal-message");
        errorP.textContent = error;
        setTimeout(() => {
          errorDiv.classList.add("hidden");
          errorP.textContent = "";
        }, 3000);
      });
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
