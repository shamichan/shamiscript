// yes this is a terrible idea but i dont care
export default class OptionsBuilder {
  constructor(optionName) {
    this.optionName = optionName;
    this.optionId = this.optionName + "-options";
    this.tabId = 0;
    this.banner = document.getElementById("banner");
    this.optionsContainer = this.banner.getElementsByTagName("span")[0];
    this.options = [];
    this.modalOverlay = document.getElementById("modal-overlay");
    this.optionModals = this.modalOverlay.childNodes;
  }

  createNewBannerOption(iconHtml, optionTitle) {
    const newOption = document.createElement("a");
    newOption.id = this.optionName;
    newOption.title = optionTitle;
    this.optionsContainer
      .getElementsByTagName("a")[0]
      .classList.forEach((c) => newOption.classList.add(c));
    newOption.innerHTML = iconHtml;
    this.optionsContainer.insertBefore(
      newOption,
      this.optionsContainer.getElementsByTagName("a")[
        this.optionsContainer.getElementsByTagName("a").length - 1
      ]
    );
    this.options.push(newOption);
    return this.#createNewOptionsMenu().#addClickListeners();
  }

  #createNewOptionsMenu() {
    const newOptionsMenu = document.createElement("div");
    const tabButts = document.createElement("div");
    const tabCont = document.createElement("div");
    const hr = document.createElement("hr");
    tabButts.classList.add("tab-butts");
    tabCont.classList.add("tab-cont");
    newOptionsMenu.id = this.optionId;
    newOptionsMenu.style.display = "none";
    this.modalOverlay.children[0].classList.forEach((c) =>
      newOptionsMenu.classList.add(c)
    );
    newOptionsMenu.appendChild(tabButts);
    newOptionsMenu.appendChild(hr);
    newOptionsMenu.appendChild(tabCont);
    this.modalOverlay.appendChild(newOptionsMenu);
    return this;
  }

  #addClickListeners() {
    this.options.forEach((newOption) => {
      newOption.onclick = () => {
        this.optionModals.forEach((modal) => {
          if (modal.id !== newOption.id + "-options")
            if (modal.id !== "moderation-panel") {
              modal.style.display = "none";
            }
        });
        const newOptionsMenu = document.getElementById(
          newOption.id + "-options"
        );
        newOptionsMenu.style.display =
          newOptionsMenu.style.display === "none" ? "block" : "none";
      };
    });

    this.options.forEach((newOption) => {
      Array.from(this.optionsContainer.getElementsByTagName("a")).forEach(
        (option) => {
          if (option.id !== newOption.id)
            option.addEventListener("click", () => {
              const newOptionsMenu = document.getElementById(
                newOption.id + "-options"
              );
              newOptionsMenu.style.display = "none";
            });
        }
      );
    });

    return this;
  }

  createMenuButt(buttName, tabId) {
    const parent = document.querySelector(`#${this.optionId} > .tab-butts`);
    const tabParent = document.querySelector(`#${this.optionId} > .tab-cont`);
    const butt = document.createElement("a");
    butt.classList.add("tab-link");
    butt.innerHTML = buttName;
    if (this.tabId === 0) butt.classList.add("tab-sel");
    butt.style.padding = "7px";

    const attr = document.createAttribute("data-id");
    attr.value = tabId;
    butt.setAttributeNode(attr);

    butt.onclick = () => {
      parent.querySelectorAll(".tab-sel").forEach((el) => {
        el.classList.remove("tab-sel");
      });
      butt.classList.add("tab-sel");

      tabParent.childNodes.forEach((content) => {
        content.style.display =
          content.getAttribute("data-id") === "" + tabId ? "block" : "none";
      });
    };
    parent.appendChild(butt);
    return this;
  }

  createMenuTabContent() {
    const parent = document.querySelector(`#${this.optionId} > .tab-cont`);
    const tabContent = document.createElement("div");
    tabContent.style.display = this.tabId === 0 ? "block" : "none";
    const attr = document.createAttribute("data-id");
    attr.value = this.tabId;
    tabContent.setAttributeNode(attr);
    parent.appendChild(tabContent);
    return this;
  }

  addTabContentText(text) {
    const tabElement = document.querySelector(
      `#${this.optionId} > .tab-cont > [data-id="${this.tabId}"]`
    );
    const textToAdd = document.createElement("p");
    textToAdd.innerHTML = text;
    tabElement.appendChild(textToAdd);
    return this;
  }

  addTabContentHR() {
    const tabElement = document.querySelector(
      `#${this.optionId} > .tab-cont > [data-id="${this.tabId}"]`
    );
    const hr = document.createElement("hr");
    tabElement.appendChild(hr);
    return this;
  }

  addTabCheckbox(inputId, inputTitle, labelText, OnChange = () => {}) {
    const tabElement = document.querySelector(
      `#${this.optionId} > .tab-cont > [data-id="${this.tabId}"]`
    );
    const input = document.createElement("input");
    const label = document.createElement("label");
    const br = document.createElement("br");

    input.type = "checkbox";
    input.id = inputId;
    input.title = inputTitle;
    input.addEventListener("change", OnChange);

    label.htmlFor = inputId;
    label.title = inputTitle;
    label.textContent = labelText;

    tabElement.appendChild(input);
    tabElement.appendChild(label);
    tabElement.appendChild(br);
    return this;
  }

  selectTab(tabId) {
    this.tabId = tabId;
    return this;
  }

  build() {
    return this.#addClickListeners();
  }
}
