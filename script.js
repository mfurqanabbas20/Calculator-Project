let btn = document.querySelectorAll('.btn');

let display = document.getElementById('display');

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(!(btn.textContent == 'CE' || btn.textContent == 'C')) {
            if(btn.textContent == 'Back' || btn.textContent == '=') {
                return;
            }
            display.value = display.value + btn.textContent;
        }
        if(btn.textContent == 'CE' || btn.textContent == 'C') {
            display.value = '';
        }
    })
})