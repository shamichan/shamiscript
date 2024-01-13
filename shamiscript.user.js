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
// @grant       none
// @version     1.0
// @author      -
// @description 1/1/1600, 6:06:06 PM
// ==/UserScript==

function applyScriptToPost(post) {
  if (post) {
    const blockQuote = post.querySelector(".post-container > blockquote");
    const regex = />>\d+/;
    const match = regex.exec(blockQuote.textContent);
    let postId = "";
    let mentionedPost;

    if (match) {
      postId = match[0].replace(/^>>/, "");
      const mentionedPostId = "p" + postId;
      mentionedPost = document.getElementById(mentionedPostId);
    }

    if (match && blockQuote.textContent.includes("#slap")) {
      handleSlap(mentionedPost);
    }
    if (match && blockQuote.textContent.includes("#chuu")) {
      handleChuu(mentionedPost);
    }
    if (match && blockQuote.textContent.includes("#spank")) {
      handleSpank(mentionedPost);
    }
    if (match && blockQuote.textContent.includes("#hug")) {
      handleHug(mentionedPost);
    }
  }
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
  kissMark.style.fontSize = "24px"

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

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create an observer instance
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
