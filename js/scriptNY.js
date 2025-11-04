// Функция открытия модального окна
function openStarModal(containerElement) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Берем путь к изображению из картинки внутри контейнера
    const img = containerElement.querySelector('.star-image');
    
    // Берем описание из подписи
    const captionElement = containerElement.querySelector('.star-caption');
    
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    
    // Берем текст из подписи
    modalCaption.textContent = captionElement.textContent;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Смена layout
let currentLayoutIndex = 1;
const layouts = [2, 3, 4, 5];

function changeLayout() {
    const starsContainer = document.getElementById('starsContainer');
    const layoutInfo = document.querySelector('.layout-info');
    
    currentLayoutIndex = (currentLayoutIndex + 1) % layouts.length;
    const newLayout = layouts[currentLayoutIndex];
    
    // Удаляем все классы layout
    starsContainer.classList.remove('layout-2', 'layout-3', 'layout-4', 'layout-5');
    // Добавляем новый класс
    starsContainer.classList.add(`layout-${newLayout}`);
    
    layoutInfo.textContent = `Текущее: ${newLayout} звезды в ряд`;
}

// Инициализация
// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Назначаем обработчики
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('changeLayout').addEventListener('click', changeLayout);
    
    // Предотвращаем закрытие при клике на контент (если нужно)
    document.querySelector('.modal').addEventListener('click', function(e) {
        closeModal();
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});