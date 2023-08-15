// Twitter: https://twitter.com/salt_ve_vinegar
// Discord: https://discordapp.com/users/1058103146292969495
// Codepen: https://codepen.io/salt-n-vinegar

const inputBox = document.querySelector('.input-box');
const keyboard = document.querySelector('.keyboard-center')
const key = document.querySelectorAll('.reg-key');

var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = form.querySelector("input[type=search]");
  search.value = search.value;
  form.submit();
});

keyboard.addEventListener('click', function(e) {
   
    const currentButton = e.target.textContent;
    // const currentElement = e.target.innerHTML;

    if (e.target.classList.contains('fa-microphone')) {
        window.location.href = "https://www.youtube.com/watch?v=UUBAFPIHETA/"
        return
    }

    const numberKey = document.querySelector('.number-key')
    if (e.target.classList.contains('number-key')) {
        numberKey.classList.toggle('key-on-off')
    }

    if(numberKey.classList.contains('key-on-off')) {
        const keyboardRow1Alt = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

        const keyboardRow1 = document.querySelector('.keyboard-row-1')
        const altRow = keyboardRow1Alt.map(function(number) {
            return `<p class="reg-key">${number}</p>`
        })
        keyboardRow1.innerHTML = altRow.join('');
    } else {
        const keyboardRowStandard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
        const keyboardRow1 = document.querySelector('.keyboard-row-1')
        const altRow = keyboardRowStandard.map(function(number) {
            return `<p class="reg-key">${number}</p>`
        })
        keyboardRow1.innerHTML = altRow.join('');
    }

    if (currentButton === `space`) {
        document.querySelector(".input-box").value += ` `;
        return
    }

    if (currentButton.length > 1) {
        return
    }

    if (e.target.classList.contains('delete-key')) {
        let originalString = inputBox.value;
        lastCharRemoved = originalString.slice(0, originalString.length - 1);
        document.querySelector('.input-box').value = lastCharRemoved;
    }

    const shiftKey = document.querySelector('.shift-key');
    
    if (e.target.classList.contains('shift-key')) {
        shiftKey.classList.toggle('key-on-off')
    }

    if (shiftKey.classList.contains('key-on-off')) {
        inputBox.value += currentButton.toUpperCase();
    } else {
        inputBox.value += currentButton.toLowerCase();
    }

    if (e.target.classList.contains('fa-globe')) {
        window.location.href = "https://maps.google.com/"
        return
    }


    // inputBox.value += currentButton.toUpperCase();
    
})


