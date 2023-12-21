
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



// loadAssignment 함수 정의
function loadAssignment(url) {
    // iframe에 해당 HTML 파일 로드
    var iframe = document.getElementById("iframe-container");
    iframe.src = url;

    // 컨테이너에 'closed' 클래스 제거 (초기에는 추가하지 않음)
    iframe.classList.remove("closed");

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    var iframeWidth = viewportWidth * 0.8;
    var iframeHeight = viewportHeight * 0.6;

    iframe.style.width = iframeWidth + "px";
    iframe.style.height = iframeHeight + "px";
}

// closeAssignment 함수 정의
function closeAssignment() {
    // iframe에 'closed' 클래스 추가
    var iframe = document.getElementById("iframe-container");
    iframe.classList.add("closed");

    // iframe 크기를 0으로 설정하여 숨김
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.marginTop = "initial"; // 'innitial'을 'initial'로 수정
}