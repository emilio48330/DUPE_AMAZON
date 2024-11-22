
    document.addEventListener('DOMContentLoaded', function() {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.addEventListener('click', function() {
                alert('Producto seleccionado: ' + card.querySelector('.card-title').textContent);
            });
        });
    });

