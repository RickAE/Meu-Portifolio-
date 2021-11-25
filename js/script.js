document.getElementById('email').addEventListener('click', ()=> {
    document.getElementById('email').select()
    document.execCommand('copy');
    Clipboard()
})

