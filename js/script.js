// Добавляем интерактивность для копирования кодов/номеров при клике
    document.querySelectorAll('.interactive-code').forEach(element => {
        element.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Скопировано: ${textToCopy}`);
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
            });
        });
    });

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
