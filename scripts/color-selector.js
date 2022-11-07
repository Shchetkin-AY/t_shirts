(function () {
  // переключатели цвета
  const colorCircles = document.querySelectorAll(".cirkle");
  // атрибут активирующий переключатель цвета
  const activeColorCircle = "colors__item--active";

  // изображения футюолок
  const tshirtsControllers = document.querySelectorAll(".tshirts__img");
  // атрибут активирующий необходимое изображение футболки
  const activeTishirt = "tshirt__img-active";


  colorCircles.forEach(function (colorController) {
    // добавить действие по клику для переключателя цветов
    colorController.addEventListener("click", function (e) {
      // скинуть по умолчанию по клику
      e.preventDefault();

      //   получить активный цвет переключателя
      const activeColor = colorController.getAttribute("data-filter");

      colorCircles.forEach(function (link) {
        // удалить активирующий аттрибут класса у переключателей цвета
        link.closest(".colors__item").classList.remove(activeColorCircle);
      });

      //   добавить активирующий аттрибут класса нажатому переключателю цвета
      colorController.closest(".colors__item").classList.add(activeColorCircle);

      tshirtsControllers.forEach(function (tshirt) {
        // удалить активирующий аттрибут класса у изображений футболок
        tshirt.closest(".tshirts__img").classList.remove(activeTishirt);
      });

      //   выбрать элемент-футболку содержащий атрибут цвета активного переключателя цветов
      const showTshirt = document.querySelector(`.${activeColor}`);

      //   добавить активирующий аттрибут класса необходимому изображению
      showTshirt.closest(".tshirts__img").classList.add(activeTishirt);
    });
  });
}())