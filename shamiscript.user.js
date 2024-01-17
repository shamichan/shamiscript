// ==UserScript==
// @name        Shamiextension
// @namespace   awawa
// @match       https://gosenz.ooo/*
// @match       https://shamik.ooo/*
// @match       https://shamiko.org/*
// @match       https://suwak.ooo/*
// @match       https://gosenz.ooo/*
// @match       https://sachik.ooo/*
// @match       https://sachiko.org/*
// @match       https://hidamari.moe/*
// @match       https://monm.ooo/*
// @match       https://desun.ooo/*
// @grant       none
// @version     1.2.3
// @author      Arona
// @downloadURL  https://github.com/shamichan/shamiscript/raw/main/shamiscript.user.js
// @description 1/1/1600, 6:06:06 PM
// ==/UserScript==

// ill refactor everything soon close your eyes for now its dangerous
let slapEnabled = true;
let chuuEnabled = true;
let spankEnabled = true;
let hugEnabled = true;
let taberuEnabled = true;

function applyScriptToPost(post) {
  if (!post) return;

  const blockQuote = post.querySelector(".post-container > blockquote");
  const regex = />>\d+/;
  const matches = regex.exec(blockQuote.textContent);
  let postId = "";
  let mentionedPost;

  if (matches) {
    matches.forEach((match) => {
      postId = match.replace(/^>>/, "");
      const mentionedPostId = "p" + postId;
      mentionedPost = document.getElementById(mentionedPostId);

      handleCommands(blockQuote.textContent, mentionedPost);
    });
  }
}

function handleCommands(text, mentionedPost) {
  let commandMap = {
    "#slap": { handler: handleSlap },
    "#chuu": { handler: handleChuu },
    "#spank": { handler: handleSpank },
    "#hug": { handler: handleHug },
    "#taberu": { handler: handleTaberu },
  };

  Object.keys(commandMap).forEach((command) => {
    const { handler } = commandMap[command];

    const commandRegex = new RegExp(command, "g");
    const commandMatches = text.match(commandRegex);

    if (commandMatches) {
      commandMatches.forEach(() => {
        handler(mentionedPost);
      });
    }
  });
}

// handleSlap takes in the post and fucking slaps it
function handleSlap(post) {
  if (!slapEnabled) return;
  const computedStyle = window.getComputedStyle(post);

  // extract the rotation information from the transform property
  const transformValue = computedStyle.getPropertyValue("transform");
  const matrix = new DOMMatrix(transformValue);

  // extract the current rotation angle in degrees
  const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

  // apply the new rotation incrementally
  const newRotation = currentRotation + getRandomInteger(10, 70);

  post.style.transition = "transform 0.05s linear";
  post.style.transform = `rotate(${newRotation}deg)`;
}

// handleSpank takes in the post and fucking spanks it
function handleSpank(post) {
  if (!spankEnabled) return;
  // get the current background color
  const currentColor = window.getComputedStyle(post).backgroundColor;

  // parse the RGB values
  const match = currentColor.match(/\d+/g);
  let red = parseInt(match[0]);
  let green = parseInt(match[1]);
  let blue = parseInt(match[2]);

  // increase the red component by 10%
  red = Math.min(255, red * 1.1);
  post.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-30px);
      }
    }
  `;

  document.head.appendChild(styleTag);
  post.style.transition = "transform 0.1s ease-in-out";
  post.style.position = "relative";
  post.style.animation = "shake 0.01s ease-in-out infinite alternate";

  setTimeout(() => {
    post.style.transition = "";
    post.style.animation = "";
  }, 100);
}

// handleChuu takes in the post and fucking chuus it
function handleChuu(post) {
  if (!chuuEnabled) return;
  post.style.transition = "transform 0.2s ease-in-out";
  // apply the horizontal squish effect
  post.style.transform = "scaleX(0.8)";

  const kissMark = document.createElement("span");
  kissMark.innerHTML = "💋";
  kissMark.style.position = "absolute";
  kissMark.style.fontSize = "24px";

  const randomX = Math.random() * post.clientWidth;
  const randomY = Math.random() * post.clientHeight;
  const randomRotation = getRandomInteger(0, 360);
  kissMark.style.left = `${randomX}px`;
  kissMark.style.top = `${randomY}px`;
  kissMark.style.transform = `rotate(${randomRotation}deg)`;

  post.appendChild(kissMark);

  post.addEventListener(
    "transitionend",
    () => {
      post.style.transform = "scaleX(1)";
    },
    { once: true }
  );
}

// handleHug takes in the post and fucking hugs it
function handleHug(post) {
  if (!hugEnabled) return;
  post.style.transition = "transform 0.3s ease-in-out";
  // apply the horizontal squish effect
  post.style.transform = "scaleX(0.5)";

  // add an event listener to reset the transform after the animation
  post.addEventListener(
    "transitionend",
    () => {
      post.style.transform = "scaleX(1)";
    },
    { once: true }
  );
}

// handleTaberu takes in the post and fucking EATS it
function handleTaberu(post) {
  // Get the current width and height of the post
  const postWidth = post.offsetWidth;
  const postHeight = post.offsetHeight;

  // Calculate the size of the "bite"
  const biteSize = Math.min(postWidth, postHeight) * 0.2; // Adjust the percentage as needed

  // Calculate the starting point of the "bite"
  const biteStartX = Math.random() * (postWidth - biteSize);
  const biteStartY = Math.random() * (postHeight - biteSize);

  // Apply the clip-path to create the "bite" effect
  post.style.clipPath = `polygon(
    0% 0%, ${postWidth}px 0%, ${postWidth}px ${postHeight}px,
    ${biteStartX + biteSize}px ${biteStartY}px,
    ${biteStartX + biteSize * 0.8}px ${biteStartY + biteSize * 0.2}px,
    ${biteStartX + biteSize * 0.6}px ${biteStartY + biteSize * 0.5}px,
    ${biteStartX + biteSize * 0.5}px ${biteStartY + biteSize * 0.8}px,
    ${biteStartX + biteSize * 0.3}px ${biteStartY + biteSize}px,
    ${biteStartX}px ${biteStartY + biteSize * 0.8}px,
    ${biteStartX - biteSize * 0.1}px ${biteStartY + biteSize * 0.5}px,
    ${biteStartX - biteSize * 0.2}px ${biteStartY + biteSize * 0.2}px
  )`;
}

// function to handle mutations and apply the script to posts
function handleMutations(mutations) {
  mutations.forEach((mutation) => {
    const post = mutation.target;

    if (
      mutation.oldValue &&
      (mutation.oldValue.split(" ").includes("editing") ||
        mutation.oldValue.split(" ").includes("reply-form")) &&
      !post.classList.contains("editing") &&
      !post.classList.contains("reply-form")
    ) {
      applyScriptToPost(post);
    }
  });
}

// yes this is a terrible idea but i dont care
class OptionsBuilder {
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
            modal.style.display = "none";
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

function handleChuuToggle() {
  chuuEnabled = document.getElementById("chuuEnabled").checked;
  localStorage.setItem(
    "chuuEnabled",
    document.getElementById("chuuEnabled").checked
  );
}
function handleSlapToggle() {
  slapEnabled = document.getElementById("slapEnabled").checked;
  localStorage.setItem(
    "slapEnabled",
    document.getElementById("slapEnabled").checked
  );
}
function handleSpankToggle() {
  spankEnabled = document.getElementById("spankEnabled").checked;
  localStorage.setItem(
    "spankEnabled",
    document.getElementById("spankEnabled").checked
  );
}
function handleHugToggle() {
  hugEnabled = document.getElementById("hugEnabled").checked;
  localStorage.setItem(
    "hugEnabled",
    document.getElementById("hugEnabled").checked
  );
}
function handleTaberuToggle() {
  taberuEnabled = document.getElementById("taberuEnabled").checked;
  localStorage.setItem(
    "taberuEnabled",
    document.getElementById("taberuEnabled").checked
  );
}

// do not look here it is not good for your eyes
function loadSettings() {
  function getLocalStorageItem(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(storedValue);
  }

  slapEnabled = getLocalStorageItem("slapEnabled", true);
  document.getElementById("slapEnabled").checked = slapEnabled;

  chuuEnabled = getLocalStorageItem("chuuEnabled", true);
  document.getElementById("chuuEnabled").checked = chuuEnabled;

  spankEnabled = getLocalStorageItem("spankEnabled", true);
  document.getElementById("spankEnabled").checked = spankEnabled;

  hugEnabled = getLocalStorageItem("hugEnabled", true);
  document.getElementById("hugEnabled").checked = hugEnabled;

  taberuEnabled = getLocalStorageItem("taberuEnabled", true);
  document.getElementById("taberuEnabled").checked = taberuEnabled;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  especially do not look here it is definitely nto good for your eyes
function setupMenus() {
  // i discovered the builder pattern so im using it everywhere now ehehehehehe
  const optionsBuilder = new OptionsBuilder("shamiscript");
  const mainMenu = optionsBuilder
    .createNewBannerOption("💋", "Slutscript")
    .createMenuButt("Info", 0)
    .createMenuTabContent()
    .addTabContentText("Welcome to <b>Slutscript</b>")
    .addTabContentText(
      "More fine-tune controls and command stats will be added soon, please look forward to it"
    )
    .addTabContentHR()
    .addTabContentText("<b>Patch notes</b>")
    .addTabContentText(
      "- Added toggle options (if they dont work please scream in the thread)"
    )
    .addTabContentText("- You can now <b>#Taberu</b>")
    .addTabContentText("- Reduced Sachikos attack power by another 10")
    .addTabContentText(
      "- Due to balance issues Gosenzos horn was removed once again"
    )
    .addTabContentText("- Gucas now start with 10 more Shamicoins")
    .addTabContentText("- Reduced Jannus attack speed by 17")
    .selectTab(1)
    .createMenuButt("Commands", 1)
    .createMenuTabContent()
    .addTabCheckbox("slapEnabled", "slap a guca", "#slap", handleSlapToggle)
    .addTabCheckbox("chuuEnabled", "chuu a guca", "#chuu", handleChuuToggle)
    .addTabCheckbox("spankEnabled", "spank a guca", "#spank", handleSpankToggle)
    .addTabCheckbox("hugEnabled", "hug a guca", "#hug", handleHugToggle)
    .addTabCheckbox(
      "taberuEnabled",
      "eat a guca",
      "#taberu",
      handleTaberuToggle
    )
    .build();
}

function setupObserver() {
  const observer = new MutationObserver(handleMutations);

  const thread = document.body;
  var config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
  };

  // start observing for mutations
  observer.observe(thread, config);
}

setupMenus();
loadSettings();
setupObserver();
