document.getElementById('myButton').addEventListener('click', () => {
    document.querySelectorAll('.message').forEach(p => {
        p.textContent = 'Text changed!';
    });
});
