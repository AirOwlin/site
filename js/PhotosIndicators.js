// ссылки на элементы
const list = document.querySelector('.lst_photos');
const items = Array.from(document.querySelectorAll('.item'));
const indicators = Array.from(document.querySelectorAll('.indicator'));

// создание наблюдателя
const observer = new IntersectionObserver(onIntersectionObserved, {
  root: list,
  threshold: 0.5 // *100% - если видно, то скроллим
});

// наблюдаем за каждым элементом
items.forEach(item => {
  observer.observe(item);
});

// когда observer обнаруживает изменение записи
// (пункт, входящий в список)
// и эта запись пересекается,
// получаем индекс пересекающегося элемента
// устанавливаем нужный индикатор в активное положение
function onIntersectionObserved(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const intersectingIndex = items.indexOf(entry.target);
      activateIndicator(intersectingIndex);
    }
  });
}

function activateIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}