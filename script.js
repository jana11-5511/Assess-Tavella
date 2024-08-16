document.getElementById('assassinatForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const assassí = document.getElementById('assassí').value;
    const víctima = document.getElementById('víctima').value;

    fetch('/registrar-assassinat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assassí: assassí, víctima: víctima })
    })
    .then(response => response.json())
    .then(data => alert('Assassinat registrat!'))
    .catch(error => console.error('Error:', error));
});
