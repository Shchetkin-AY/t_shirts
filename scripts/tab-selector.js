(function () {
  const tabControllers = document.querySelectorAll(".btn-desk");
  const tabActiveController = "selector-active";

  const infoTabs = document.querySelectorAll(".tab");
  const activeTab = "tab-active";

  tabControllers.forEach(function (controller) {
    controller.addEventListener("click", function (element) {
      element.preventDefault();

      const selectDesk = controller.getAttribute("data-filter");

      tabControllers.forEach(function (button) {
        button.closest(".selector").classList.remove(tabActiveController);
      });

      controller.closest(".selector").classList.add(tabActiveController);

      infoTabs.forEach(function (tab) {
        tab.closest(".tab").classList.remove(activeTab);
      });

      const infoTab = document.querySelector(`.tab__${selectDesk}`);

      infoTab.closest(".tab").classList.add(activeTab);
    });
  });
})();
