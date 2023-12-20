
document.addEventListener("DOMContentLoaded", function () {
    var typedTextElement = document.getElementById("typed-text");
    var textArray = ["Dongduk Women's University", "HCI science major", "information statistics major"];
    var textArrayIndex = 0;
    var charIndex = 0;
     function type() {
         if (textArrayIndex < textArray.length) {
         if (charIndex < textArray[textArrayIndex].length) {
             typedTextElement.textContent += textArray[textArrayIndex][charIndex];
             charIndex++;
             setTimeout(type, 100);
         } else {
             setTimeout(erase, 1000);
         }
         }
     }

     function erase() {
         if (charIndex > 0) {
             typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
             charIndex--;
             setTimeout(erase, 50);
         } else {
             textArrayIndex++;
             if (textArrayIndex >= textArray.length) {
                 textArrayIndex = 0;
             }
             setTimeout(type, 500);
         }
     }

        type(); // 초기 호출
    });
