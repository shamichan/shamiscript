// ==UserScript==
// @name        Shamiextension
// @namespace   awawa
// @match       https://gosenz.ooo/*
// @match       https://shamik.ooo/*
// @match       https://shamiko.org/*
// @match       https://suwak.ooo/*
// @match       https://gosenz.ooo/*
// @match       https://sachik.ooo/*
// @match       https://hidamari.moe/*
// @match       https://monm.ooo/*
// @match       https://desun.ooo/*
// @grant       none
// @version     1.3.4
// @author      Arona
// @require     https://github.com/shamichan/shamiscript/raw/main/optionsbuilder.js
// @downloadURL https://github.com/shamichan/shamiscript/raw/main/shamiscript.user.js
// @description Main branch of shamiscript, prone to being dumb
// ==/UserScript==

// ill refactor everything soon close your eyes for now its dangerous
let slapEnabled = true;
let chuuEnabled = true;
let spankEnabled = true;
let hugEnabled = true;
let taberuEnabled = true;
let isDeletedToggleObserverActive = false;
let slapMin = 10;
let slapMax = 70;
let chuusSeen = 0;
let chuusGiven = 0;
let chuusRecieved = 0;
let slapsSeen = 0;
let slapsGiven = 0;
let slapsRecieved = 0;

const ChuuIcon = `<svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M11.2 40.7c3.7-1.9 5.3-2.5-.7-4.3c1.1-.1 7.5 2.1 9.5-.3c1.7-1.2-6.5-2.7-7-3.9c1.6 1 8.6 4.1 9.9 1.3c-.2-1-1.2-2.9-4.7-3.9c1 .4 3.1.2 3.9-.6c-.3-.9-4.2-3.3-4.6-6.4c1.3 1.8 2.9 4.9 4.9 5.5c0 0 .6-1.5 2.8-2.1c-2 0-4-1.2-4.3-2.2c1.4 2.3 6.4 1.1 8.5 3c0 0-.4-1.3 1-3c.1-.4-.8-1.1-.3-1.3c.2.2.2.9.8.8c1.3-.5 2.5-2.2 1.7-3.8c.6.3.7 1.7.8 2.5c.8 0 2.2-.1 3.7 1.3c.3-.2.2-.7.5-.9c.3 1 .3 3.1 1.7 3c1.1 0 2.5-2.4 2.7-3.4c-.1 2.3 1.2 2 1.6 2.1c1-.1 2.1-3.4 2.6-3.4c-.2.4-.2 1.7-.1 2.4c1.1.2 3.9-1.1 4.5-1.7c-.1.5-.3.7-.2 1.3c1 .2 6.7-2.5 8-5.3c-1.5-.7-2.7-1.5-3.9-1.9c-.7.6-.7 3.1-1.6 2.9c.4-.6 1.4-2.7.6-3.4c-3.8-2.6-1.9 2-2.3 2.4c0-.8-1.7-5.5-3.3-5.1c-.3.4-.9-2.3-2 3.6c.1-1 1.3-4.9-4.5-6.5c-.3 1.5 1.7 6 1.2 7c-.2-1.9-1.7-6.5-2.7-7.7c-2.2-.9-6.1-2.5-7.8-1.9c-2 .5 3 5 1.6 6.8c.3-2.6-2.8-5.4-4.9-5.4c-4.3 2.2-.8 6.3-1.5 8.3c-.4-2.4-1.6-2.9-1.4-5.7c-1.1.8-1.2 2.2-2.4 3.3c-.6.2-.9-.1-1.5 0c-1 1.1.9 3.4.5 4.3c-.7-1.5-.7-3.7-2.4-3.9c-1.4-.9-4.3-.2-6.5 1.3c-2.5.7-4.9 7.5-4.8 8.4c.2 1.2 2.3 1.4 2.4 2.6c-.9-.5-1.2-1.5-2.6-1.4c-.5 1.1-.8 1.9-.9 3.5c1.5 1 3.4 1.9 3.9 3.4c-1.4-.5-2.2-2.6-4-2c-2.3 6.5.5 5.3.8 6.2c-.8.3-1.6-.5-1.9 0c-1.8 3.3.3 3.3.5 3.9H5.7c-.7.6-.8 2.7-.6 3.7c1.5-.7 4.7-1.4 3.9-3.2c.8.2 1.7.2 2.2-.2" fill="#c94747"></path><path d="M50.7 23.7c-1.7.4-6.9.8-8.2 2.3c1.5 2.4 7.4 2.8 8.9 5.2c-2.3-1.4-7-3.4-10-4.2c-3.6-.8-2.5 1.2-3.7 4.1c.5 1.1 2.2 4.1 2.3 5.1c-.9-1-1.7-5.6-3.2-3.1c-2.4 3.9 1.3 4.7 2.9 8.3c-1-1.4-3-4.1-4.3-5.7l-.9 1.5c-1.5-.4-2.2-.3-2.2-.3c.9 2.2 3.7 6.7 4.5 8.1c-2.7-2.7-3.9-5.3-5.3-8.2c-1.2 0-2.3-.5-3.5-.7c-.1 2.5 1 4.1 1 5.9c-.9-2.7-1.5-8.5-6.8-6.6c-1.5 3.1.7 9.1.8 11.7c-1-2.9-.9-7-2.2-9.5c-1.7-.1-4.4-.2-3.9.9c-3.4.9-12.3 6.2-10.8 7.6c2.7 2.6 8.6 6 12.4 6.7c.2-1 .6-2.7 1-3.3c.4 1.6.9 3.6 2.5 4c.4-.5-.2-1.8-.1-2.6c1.4 1.7 5.2 3.7 7.9 2.4c.3-1-.8-2.4-.2-3.1c.4 2.7 6.6 2.9 7.1.5c.2-1.1-.9-1.8-.9-2.5c.9 1 1.3 2.3 2.8 2.2c3.3-.2 1.1-4.8.5-6.6c.8 1.6 1.8 4 3 5.2c.9-.2 1.3-1.5.8-2.6c2.9 2 3.2.4 2.1-3.6c0-.1-.1-.2-.1-.3c0 .1.1.2.1.3c.3.8 1.4 2.7 2.1 3c2.6-1.1-1.1-5.5-1.6-6.3c1.1.9 2.4 3.8 4.1 4.2c.3-.2.3-1.8.5-2.1c-.6-3.9-4.5-6.4-6-8.9c2.4 2.2 4.8 6.8 7.9 8.4c1-1.3-.9-4.8-1.5-5.8c.9.4 2.4 2.7 3.5 2.8c1.1-.6-.5-3.5-1.2-4.5c.5.2 1.9 1.7 2.7 1.5c.3-1.4-1.5-3.1-1.9-4.2c.5.1 2.1 1.7 2.8 1.7c.7-2.9 1.9-6.3 1.7-13.1c-1 .1-6.1 3.9-7.4 4.2" fill="#ed4c5c"></path></svg>`;

function applyScriptToPost(post) {
  if (!post) return;

  const isKimi = checkForKimi(post)
  const blockQuote = post.querySelector(".post-container > blockquote");
  const regex = />>(\d+)\s*([\s\S]*?)(?=>>\d+|$)/g;
  let matches;
  while ((matches = regex.exec(blockQuote.textContent)) !== null) {
    const postId = matches[1];
    const content = matches[2];

    const mentionedPostId = "p" + postId;
    const mentionedPost = document.getElementById(mentionedPostId);
    handleCommands(content, mentionedPost, isKimi);
  }
}

function handleCommands(text, mentionedPost, isKimi) {
  let commandMap = {
    "#slap": { handler: handleSlap },
    "#chuu": { handler: handleChuu },
    "#spank": { handler: handleSpank },
    "#hug": { handler: handleHug },
    "#taberu": { handler: handleTaberu },
    "#flen": { handler: handleFlen },
    "#unflen": { handler: handleUnflen },
  };

  Object.keys(commandMap).forEach((command) => {
    const { handler } = commandMap[command];

    const commandRegex = new RegExp(command, "g");
    const commandMatches = text.match(commandRegex);

    if (commandMatches) {
      commandMatches.forEach(() => {
        handler(mentionedPost, isKimi);
      });
    }
  });
}

function handleSlap(post, isKimi) {
  if (!slapEnabled) return;
  slapsSeen += 1;
  if (isKimi) {
    slapsRecieved += 1;
  }
  if (checkForKimi(post)){
    slapsGiven += 1;
  }
  handleSlapUpdate();
  const computedStyle = window.getComputedStyle(post);

  // extract the rotation information from the transform property
  const transformValue = computedStyle.getPropertyValue("transform");
  const matrix = new DOMMatrix(transformValue);

  // extract the current rotation angle in degrees
  const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

  // apply the new rotation incrementally
  const newRotation = currentRotation + getRandomInteger(slapMin, slapMax);

  post.style.transition = "transform 0.05s linear";
  post.style.transform = `rotate(${newRotation}deg)`;
}

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

function handleChuu(post, isKimi) {
  if (!chuuEnabled) return;
  chuusSeen += 1;
  if (isKimi) {
    chuusGiven += 1;
  }
  const gotChuud = checkForKimi(post);
  if (gotChuud) {
    chuusRecieved += 1;
  }
  handleChuusUpdate();
  post.style.transition = "transform 0.2s ease-in-out";
  // apply the horizontal squish effect
  post.style.transform = "scaleX(0.8)";

  const kissMark = document.createElement("span");
  kissMark.innerHTML = ChuuIcon;
  kissMark.style.position = "absolute";
  kissMark.style.fontSize = "24px";

  const randomX = Math.random() * (post.clientWidth - 24);
  const randomY = Math.random() * (post.clientHeight - 24);
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

function handleTaberu(post) {
  if (!taberuEnabled) {
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

function checkForKimi(post) {
  return post.querySelector(".name").innerHTML.includes("(Kimi)");
}

function handleFlen(post) {
  post.querySelector(".name").innerHTML = "Flen";
}
function handleUnflen(post) {
  post.querySelector(".name").innerHTML = "Arisu";
}

// function to handle mutations and apply the script to posts
function handleMutations(mutations) {
  mutations.forEach((mutation) => {
    const post = mutation.target;

    if (
      mutation.oldValue &&
      !mutation.oldValue.split(" ").includes("reply-form") &&
      mutation.oldValue.split(" ").includes("editing") &&
      !post.classList.contains("editing") &&
      !post.classList.contains("reply-form")
    ) {
      applyScriptToPost(post);
    }
  });
}

function handleChuuToggle() {
  chuuEnabled = document.getElementById("chuuEnabled").checked;
  localStorage.setItem("chuuEnabled", chuuEnabled);
}
function handleSlapToggle() {
  slapEnabled = document.getElementById("slapEnabled").checked;
  localStorage.setItem("slapEnabled", slapEnabled);
}
function handleSpankToggle() {
  spankEnabled = document.getElementById("spankEnabled").checked;
  localStorage.setItem("spankEnabled", spankEnabled);
}
function handleHugToggle() {
  hugEnabled = document.getElementById("hugEnabled").checked;
  localStorage.setItem("hugEnabled", hugEnabled);
}
function handleTaberuToggle() {
  taberuEnabled = document.getElementById("taberuEnabled").checked;
  localStorage.setItem("taberuEnabled", taberuEnabled);
}
function handleSlapMin() {
  slapMin = document.getElementById("slapMin").value;
  localStorage.setItem("slapMin", slapMin);
}
function handleSlapMax() {
  slapMax = document.getElementById("slapMax").value;
  localStorage.setItem("slapMax", slapMax);
}
function handleChuusUpdate(){
  document.getElementById("chuusSeen").innerHTML = chuusSeen;
  localStorage.setItem("chuusSeen", chuusSeen);

  document.getElementById("chuusGiven").innerHTML = chuusGiven;
  localStorage.setItem("chuusGiven", chuusGiven);

  document.getElementById("chuusRecieved").innerHTML = chuusRecieved;
  localStorage.setItem("chuusRecieved", chuusRecieved);
}

function handleSlapUpdate(){
  document.getElementById("slapsSeen").innerHTML = slapsSeen;
  localStorage.setItem("slapsSeen", slapsSeen);

  document.getElementById("slapsGiven").innerHTML = slapsGiven;
  localStorage.setItem("slapsGiven", slapsGiven);

  document.getElementById("slapsRecieved").innerHTML = slapsRecieved;
  localStorage.setItem("slapsRecieved", slapsRecieved);
}

function loadSettings() {
  function getLocalStorageItem(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(storedValue);
  }

  // Toggles
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

  slapMin = getLocalStorageItem("slapMin", 10);
  document.getElementById("slapMin").value = slapMin;

  slapMax = getLocalStorageItem("slapMax", 70);
  document.getElementById("slapMax").value = slapMax;

  isDeletedToggleObserverActive = getLocalStorageItem("unhidebins", false);
  document.getElementById("unhidebins").checked = isDeletedToggleObserverActive;
  if (isDeletedToggleObserverActive) {
    startDeletedToggleObserver();
  }

  // Stats
  chuusSeen = getLocalStorageItem("chuusSeen", 0);
  document.getElementById("chuusSeen").innerHTML = chuusSeen;

  chuusGiven = getLocalStorageItem("chuusGiven", 0);
  document.getElementById("chuusGiven").innerHTML = chuusGiven;

  chuusRecieved = getLocalStorageItem("chuusRecieved", 0);
  document.getElementById("chuusRecieved").innerHTML = chuusRecieved;

  slapsSeen = getLocalStorageItem("slapsSeen", 0);
  document.getElementById("slapsSeen").innerHTML = slapsSeen;

  slapsGiven = getLocalStorageItem("slapsGiven", 0);
  document.getElementById("slapsGiven").innerHTML = slapsGiven;

  slapsRecieved = getLocalStorageItem("slapsRecieved", 0);
  document.getElementById("slapsRecieved").innerHTML = slapsRecieved;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function infoMenu(builder, tabNum) {
  builder
    .createNewBannerOption(ChuuIcon, "Slutscript")
    .createMenuButt("Info", tabNum)
    .createMenuTabContent()
    .addTabContentText("Welcome to <b>Slutscript</b>")
    .addTabContentText(
      "More fine-tune controls and command stats will be added soon, please look forward to it"
    )
    .addTabContentHR()
    .addTabContentText("<b>Contributing</b>")
    .addTabContentText(
      "For feature requests or bug reports please create a new issue at"
    )
    .addTabContentText(
      `<a target="_blank" href="https://github.com/shamichan/shamiscript/">https://github.com/shamichan/shamiscript/</a>`
    )
    .addTabContentHR()
    .addTabContentText("<b>Patch notes</b>")
    .addTabContentText("- Added setting to unhide bins inside of the reports and modlog tab")
    .addTabContentText("- Fixed issue where the dame desu doesn't dame desu under certain conditions")
    .addTabContentText("- Weh");
}

function commandMenu(builder, tabNum) {
  builder
    .selectTab(tabNum)
    .createMenuButt("Settings", tabNum)
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
    .addTabInput(
      "slapMin",
      "Minimum slap angle",
      "Minimum slap angle",
      handleSlapMin
    )
    .addTabInput(
      "slapMax",
      "Maximum slap angle",
      "Maximum slap angle",
      handleSlapMax
    ).addTabContentHR().
    addTabCheckbox("unhidebins", "Unhide bins", "Auto-toggle bins", toggleDeletedToggleObserver);
}

function statsMenu(builder, tabNum) {
  builder
    .selectTab(tabNum)
    .createMenuButt("Stats", tabNum)
    .createMenuTabContent()
    .addRawHtml(`
                <div style="display: grid; grid-template-columns: auto auto auto; grid-template-rows: auto auto; gap: 8px;">
                    <div style="font-weight: bold; grid-column: 1 / span 3; padding-top: 4px; font-size: 14px">#chuu</div>
                    <div>Seen: <span id="chuusSeen"></span></div>
                    <div>Given: <span id="chuusGiven"></span></div>
                    <div>Recieved: <span id="chuusRecieved"></span></div>
                </div>`)
                .addRawHtml(`
                <br/>
                <div style="display: grid; grid-template-columns: auto auto auto; grid-template-rows: auto auto; gap: 8px;">
                    <div style="font-weight: bold; grid-column: 1 / span 3; padding-top: 4px; font-size: 14px">#slap</div>
                    <div>Seen: <span id="slapsSeen"></span></div>
                    <div>Given: <span id="slapsGiven"></span></div>
                    <div>Recieved: <span id="slapsRecieved"></span></div>
                </div>`); // oh god my eyes im so sorry
}

let deletedToggleObserver;
function startDeletedToggleObserver() {
  deletedToggleObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
                if (node.matches('.deleted-toggle[type="checkbox"]') && node.closest('article').closest('td')) {
                    node.checked = true;
                } else {
                  node.querySelectorAll('.deleted-toggle[type="checkbox"]').forEach(checkbox => {
                      const article = checkbox.closest('article');
                      const insideTable = article && article.closest('td')
                      const insideHoverOverlay = article && article.closest('div') != null && article.closest('div').id === "hover-overlay"
                      if (insideTable || insideHoverOverlay) {
                          checkbox.checked = true;
                      }
                  });
              }
            } 
        });
    });
  });

  deletedToggleObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  isDeletedToggleObserverActive = true;
  localStorage.setItem("unhidebins", true)
}

function stopDeletedToggleObserver(){
  if(deletedToggleObserver){
    deletedToggleObserver.disconnect();
    isDeletedToggleObserverActive = false;
    localStorage.setItem("unhidebins", false)
  }
}

// I like this function name a lot
function toggleDeletedToggleObserver(){
  if(isDeletedToggleObserverActive){
    stopDeletedToggleObserver()
  } else {
    startDeletedToggleObserver()
  }
}

async function modLogMenu(builder, tabNum) {
  builder
    .selectTab(tabNum)
    .createMenuButt("Modlog", tabNum)
    .createMenuTabContent()
    .addRawHtml("<div id='bins'></div>");
  updateBins();
}

async function reportMenu(builder, tabNum) {
  builder
    .selectTab(tabNum)
    .createMenuButt("Reports", tabNum)
    .createMenuTabContent()
    .addRawHtml("<div id='reports'></div>");
  updateReports();
}

function setupMenus() {
  const optionsBuilder = new OptionsBuilder("shamiscript");
  infoMenu(optionsBuilder, 0);
  commandMenu(optionsBuilder, 1);
  modLogMenu(optionsBuilder, 2);
  reportMenu(optionsBuilder, 3);
  statsMenu(optionsBuilder, 4);
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

  observer.observe(thread, config);
}

async function updateBins() {
  let rawhtml = "";
  const baseURL = new URL(window.location).origin;
  const board = window.location.pathname.split("/")[1];
  const url = new URL("/html/mod-log/" + board, baseURL);
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error stalking bins");
      }
      return response.text();
    })
    .then((htmlContent) => {
      var tempContainer = document.createElement("div");
      tempContainer.innerHTML = htmlContent;

      let bins = tempContainer.querySelector("table");
      let rows = bins.querySelectorAll("tr");
      rows.forEach((row) => {
        // haet system bloat
        let binner = row.querySelector("td:nth-child(2)");
        if (binner && binner.innerHTML === "system") {
          row.remove();
        }
      });

      rawhtml = `<table>${bins.innerHTML}</table>`;
    })
    .catch((error) => {
      console.error("Error stalking bins:", error);
    });

  const binDiv = document.getElementById("bins");
  binDiv.innerHTML = rawhtml;
}

async function updateReports() {
  let rawhtml = "";
  const baseURL = new URL(window.location).origin;
  const board = window.location.pathname.split("/")[1];
  const url = new URL("/html/reports/" + board, baseURL);
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error stalking reports");
      }
      return response.text();
    })
    .then((htmlContent) => {
      var tempContainer = document.createElement("div");
      tempContainer.innerHTML = htmlContent;

      let bins = tempContainer.querySelector("table");

      rawhtml = `<table>${bins.innerHTML}</table>`;
    })
    .catch((error) => {
      console.error("Error stalking reports:", error);
    });

  const binDiv = document.getElementById("reports");
  binDiv.innerHTML = rawhtml;
}

function styleTables() {
  let styleElement = document.createElement("style");
  const css = "th, td {padding: 0px 4px; border: 1px solid black;}";
  styleElement.appendChild(document.createTextNode(css));
  document.head.appendChild(styleElement);
}

styleTables();
setupMenus();
loadSettings();
setupObserver();
setInterval(updateBins, 60000);
setInterval(updateReports, 60000);
