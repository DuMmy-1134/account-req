var counter = 0;

function changeTextAndImage() {
  var element = document.getElementById("imgClickAndChange");
  var imageElement = document.getElementById("firstimage");
  var yesButton = document.querySelector(".yesButton");

  switch (counter) {
    case 0:
      element.innerText = "Bby PLease😥";
      imageElement.src = "goma-sad.gif";
      break;
    case 1:
      element.innerText = "I'll cryy 😭😭 ";
      imageElement.src = "的9.gif";
      break;
    case 2:
      element.innerText = "Chit buu pot!";
      imageElement.src = "cute-dog.gif";
      break;
    case 3:
      element.innerText = "M Yat Sat Prr nae Plss";
      imageElement.src = "stitch-love.gif";
      break;
    default:
      element.innerText = "Text changed more than 4 times!";
      break;
  }

  // Increase font size of the Yes button by 20%
  var currentSize = parseFloat(
    window.getComputedStyle(yesButton, null).getPropertyValue("font-size")
  );
  var newSize = currentSize * 1.2;
  yesButton.style.fontSize = newSize + "px";

  // Increment the counter or reset it after the last change
  counter = (counter + 1) % 4;
}
