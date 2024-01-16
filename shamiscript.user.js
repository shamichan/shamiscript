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
// @grant       none
// @version     1.2.1
// @author      Arona
// @downloadURL  https://github.com/shamichan/shamiscript/raw/main/shamiscript.user.js
// @description 1/1/1600, 6:06:06 PM
// ==/UserScript==

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
  const commandActions = {
    "#slap": handleSlap,
    "#chuu": handleChuu,
    "#spank": handleSpank,
    "#hug": handleHug,
  };

  Object.keys(commandActions).forEach((command) => {
    const commandRegex = new RegExp(command, "g");
    const commandMatches = text.match(commandRegex);

    if (commandMatches) {
      commandMatches.forEach(() => {
        commandActions[command](mentionedPost);
      });
    }
  });
}

// handleSlap takes in the post and fucking slaps it
function handleSlap(post) {
  const computedStyle = window.getComputedStyle(post);

  // extract the rotation information from the transform property
  const transformValue = computedStyle.getPropertyValue("transform");
  const matrix = new DOMMatrix(transformValue);

  // extract the current rotation angle in degrees
  const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

  // apply the new rotation incrementally
  const newRotation = currentRotation + getRandomInteger(50, 180);

  post.style.transition = "transform 0.05s linear";
  post.style.transform = `rotate(${newRotation}deg)`;
}

// handleSpank takes in the post and fucking spanks it
function handleSpank(post) {
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

class OptionsFactory {
  constructor() {
    this.banner = document.getElementById("banner");
    this.optionsContainer = this.banner.getElementsByTagName("span")[0];
    this.options = [];
    this.modalOverlay = document.getElementById("modal-overlay");
    this.optionModals = this.modalOverlay.childNodes;
  }

  createNewBannerOption(optionId, iconHtml, optionTitle) {
    const newOption = document.createElement("a");
    newOption.id = optionId;
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
    return this;
  }

  createNewOptionsMenu(optionId) {
    const newOptionsMenu = document.createElement("div");
    const tabButts = document.createElement("div");
    const tabCont = document.createElement("div");
    tabButts.classList.add("tab-butts");
    tabCont.classList.add("tab-cont");
    newOptionsMenu.id = optionId;
    newOptionsMenu.style.display = "none";
    this.modalOverlay.children[0].classList.forEach((c) =>
      newOptionsMenu.classList.add(c)
    );
    newOptionsMenu.appendChild(tabButts);
    newOptionsMenu.appendChild(tabCont);
    this.modalOverlay.appendChild(newOptionsMenu);
    return this;
  }

  addClickListeners() {
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

  createMenuButt(optionsId, buttName, butt_id) {
    const parent = document.querySelector(`#${optionsId} > .tab-butts`);
    const tabParent = document.querySelector(`#${optionsId} > .tab-cont`);
    const butt = document.createElement("a");
    butt.classList.add("tab-link");
    butt.innerHTML = buttName;
    if (butt_id === 0) butt.classList.add("tab-sel");
    butt.style.padding = "7px";

    const attr = document.createAttribute("data-id");
    attr.value = butt_id;
    butt.setAttributeNode(attr);

    butt.onclick = () => {
      parent.querySelectorAll(".tab-sel").forEach((el) => {
        el.classList.remove("tab-sel");
      });
      butt.classList.add("tab-sel");

      tabParent.childNodes.forEach((content) => {
        content.style.display =
          content.getAttribute("data-id") === "" + butt_id ? "block" : "none";
      });
    };
    parent.appendChild(butt);
    return this;
  }

  createMenuTabContent(parent, tab_id) {
    const tabContent = document.createElement("div");
    tabContent.style.display = tab_id === 0 ? "block" : "none";

    const attr = document.createAttribute("data-id");
    attr.value = tab_id;
    tabContent.setAttributeNode(attr);
    parent.appendChild(tabContent);
    return this;
  }

  addTabContentText(text, parentId, tab_id) {
    const tabElement = document.querySelector(
      `#${parentId} > .tab-cont > [data-id="${tab_id}"]`
    );
    const textToAdd = document.createElement("p");
    textToAdd.innerHTML = text;
    tabElement.appendChild(textToAdd);
    return this;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setupMenus() {
  const optionsFactory = new OptionsFactory();
  const option1 = optionsFactory.createNewBannerOption(
    "shamiscript",
    "💋",
    "Shamiscript options"
  );
  const option1Menu = optionsFactory.createNewOptionsMenu(
    "shamiscript-options"
  );
  optionsFactory.addClickListeners();
  optionsFactory.createMenuButt("shamiscript-options", "Info", 0);
  optionsFactory.createMenuTabContent(
    document.querySelector("#shamiscript-options > .tab-cont"),
    0
  );
  optionsFactory.addTabContentText("Welcome to slutscript", "shamiscript-options", 0);
  optionsFactory.addTabContentText("Toggle options will be added here soon, please look forward to it", "shamiscript-options", 0);
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
setupObserver();
