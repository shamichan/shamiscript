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
// @version     1.2.7
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

const ChuuIcon = `<svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M11.2 40.7c3.7-1.9 5.3-2.5-.7-4.3c1.1-.1 7.5 2.1 9.5-.3c1.7-1.2-6.5-2.7-7-3.9c1.6 1 8.6 4.1 9.9 1.3c-.2-1-1.2-2.9-4.7-3.9c1 .4 3.1.2 3.9-.6c-.3-.9-4.2-3.3-4.6-6.4c1.3 1.8 2.9 4.9 4.9 5.5c0 0 .6-1.5 2.8-2.1c-2 0-4-1.2-4.3-2.2c1.4 2.3 6.4 1.1 8.5 3c0 0-.4-1.3 1-3c.1-.4-.8-1.1-.3-1.3c.2.2.2.9.8.8c1.3-.5 2.5-2.2 1.7-3.8c.6.3.7 1.7.8 2.5c.8 0 2.2-.1 3.7 1.3c.3-.2.2-.7.5-.9c.3 1 .3 3.1 1.7 3c1.1 0 2.5-2.4 2.7-3.4c-.1 2.3 1.2 2 1.6 2.1c1-.1 2.1-3.4 2.6-3.4c-.2.4-.2 1.7-.1 2.4c1.1.2 3.9-1.1 4.5-1.7c-.1.5-.3.7-.2 1.3c1 .2 6.7-2.5 8-5.3c-1.5-.7-2.7-1.5-3.9-1.9c-.7.6-.7 3.1-1.6 2.9c.4-.6 1.4-2.7.6-3.4c-3.8-2.6-1.9 2-2.3 2.4c0-.8-1.7-5.5-3.3-5.1c-.3.4-.9-2.3-2 3.6c.1-1 1.3-4.9-4.5-6.5c-.3 1.5 1.7 6 1.2 7c-.2-1.9-1.7-6.5-2.7-7.7c-2.2-.9-6.1-2.5-7.8-1.9c-2 .5 3 5 1.6 6.8c.3-2.6-2.8-5.4-4.9-5.4c-4.3 2.2-.8 6.3-1.5 8.3c-.4-2.4-1.6-2.9-1.4-5.7c-1.1.8-1.2 2.2-2.4 3.3c-.6.2-.9-.1-1.5 0c-1 1.1.9 3.4.5 4.3c-.7-1.5-.7-3.7-2.4-3.9c-1.4-.9-4.3-.2-6.5 1.3c-2.5.7-4.9 7.5-4.8 8.4c.2 1.2 2.3 1.4 2.4 2.6c-.9-.5-1.2-1.5-2.6-1.4c-.5 1.1-.8 1.9-.9 3.5c1.5 1 3.4 1.9 3.9 3.4c-1.4-.5-2.2-2.6-4-2c-2.3 6.5.5 5.3.8 6.2c-.8.3-1.6-.5-1.9 0c-1.8 3.3.3 3.3.5 3.9H5.7c-.7.6-.8 2.7-.6 3.7c1.5-.7 4.7-1.4 3.9-3.2c.8.2 1.7.2 2.2-.2" fill="#c94747"></path><path d="M50.7 23.7c-1.7.4-6.9.8-8.2 2.3c1.5 2.4 7.4 2.8 8.9 5.2c-2.3-1.4-7-3.4-10-4.2c-3.6-.8-2.5 1.2-3.7 4.1c.5 1.1 2.2 4.1 2.3 5.1c-.9-1-1.7-5.6-3.2-3.1c-2.4 3.9 1.3 4.7 2.9 8.3c-1-1.4-3-4.1-4.3-5.7l-.9 1.5c-1.5-.4-2.2-.3-2.2-.3c.9 2.2 3.7 6.7 4.5 8.1c-2.7-2.7-3.9-5.3-5.3-8.2c-1.2 0-2.3-.5-3.5-.7c-.1 2.5 1 4.1 1 5.9c-.9-2.7-1.5-8.5-6.8-6.6c-1.5 3.1.7 9.1.8 11.7c-1-2.9-.9-7-2.2-9.5c-1.7-.1-4.4-.2-3.9.9c-3.4.9-12.3 6.2-10.8 7.6c2.7 2.6 8.6 6 12.4 6.7c.2-1 .6-2.7 1-3.3c.4 1.6.9 3.6 2.5 4c.4-.5-.2-1.8-.1-2.6c1.4 1.7 5.2 3.7 7.9 2.4c.3-1-.8-2.4-.2-3.1c.4 2.7 6.6 2.9 7.1.5c.2-1.1-.9-1.8-.9-2.5c.9 1 1.3 2.3 2.8 2.2c3.3-.2 1.1-4.8.5-6.6c.8 1.6 1.8 4 3 5.2c.9-.2 1.3-1.5.8-2.6c2.9 2 3.2.4 2.1-3.6c0-.1-.1-.2-.1-.3c0 .1.1.2.1.3c.3.8 1.4 2.7 2.1 3c2.6-1.1-1.1-5.5-1.6-6.3c1.1.9 2.4 3.8 4.1 4.2c.3-.2.3-1.8.5-2.1c-.6-3.9-4.5-6.4-6-8.9c2.4 2.2 4.8 6.8 7.9 8.4c1-1.3-.9-4.8-1.5-5.8c.9.4 2.4 2.7 3.5 2.8c1.1-.6-.5-3.5-1.2-4.5c.5.2 1.9 1.7 2.7 1.5c.3-1.4-1.5-3.1-1.9-4.2c.5.1 2.1 1.7 2.8 1.7c.7-2.9 1.9-6.3 1.7-13.1c-1 .1-6.1 3.9-7.4 4.2" fill="#ed4c5c"></path></svg>`

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
  kissMark.innerHTML = ChuuIcon;
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
  if(!taberuEnabled){
    return;
  }
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
            if(modal.id !== "moderation-panel"){
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
    .createNewBannerOption(ChuuIcon, "Slutscript")
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
