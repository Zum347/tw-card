//console.log('Bağlantı Kontrol')

const placeholder = document.querySelector(".placeholder");
//console.log(placeholder)
const editableInput = document.querySelector(".editable");
//console.log(editableınput)
const tweetButton = document.querySelector(".button");
//console.log(tweetButton)
const counter = document.getElementById("counter");
//console.log(counter)
const readonly = document.getElementById(".readonly");
//console.log(readonly)



editableInput.addEventListener("click", () => {

placeholder.style.color = "#98a5b1";

});


editableInput.onblur = () => {
    placeholder.style.color = "#333";
};


editableInput.onkeypress = (e) => {
    placeholder.style.display = "none";
    inputValidate(e.target.innerText);
};


editableInput.onkeyup = (e) => {
  placeholder.style.display = "none";
  inputValidate(e.target.innerText);
};


const inputValidate = (tweet) => {
   
  const tweetLength = tweet.length;

  const tweetLimit = 5;

  
  const currentLimit = tweetLimit - tweetLength;


  
  if (tweetLength <= 0) {
    
    placeholder.style.display = "block";
    
    tweetButton.classList.remove("active");
  
    counter.style.display = "none";
  } else {
  
    tweetButton.classList.add("active");
    //Sayacı görünür yapma
    counter.style.display = "block";

    //sayacın değerine hesaplanan değeri atama
    counter.innerText = currentLimit;
  }
  let newTweet;

  
  if (tweetLength > tweetLimit) {
    
    let overTweet = tweet.substr(tweetLimit, tweetLength);
    
    let overTweetElement = `<span class='overTweet'>${overTweet}</span>`;
   
    newTweet = tweet.substr(0, tweetLimit) + overTweetElement;
   
    readonly.style.zIndex = "1";
   
    counter.style.color = "red";


    tweetButton.classList.remove("active");
  } else {
    

    
    counter.style.color = "#333";
    
    readonly.style.zIndex = "-5";
  }

  
  readonly.innerHTML = newTweet;
};

