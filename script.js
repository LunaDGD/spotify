"use strict";

const songs = [
  "Good Morning - Kanye West",
  "The Art Of Dying - Gojira",
  "Future - Worst Day",
  "Love Yours - J cole",
  "The Story of OJ- Jay Z",
  "My Kind Of Women - Mac DeMarco",
  "Bad Bunny -  Every song",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
];
const btnHold = document.querySelector(".btn");
const element = document.querySelector(".playlist");

function displayPlaylist() {
  element.classList.toggle("hidden");
}
btnHold.addEventListener("click", displayPlaylist);
