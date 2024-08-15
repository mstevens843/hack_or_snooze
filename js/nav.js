"use strict";

// Cache jQuery selectors
const $body = $("body");
const $navLogin = $("#nav-login");
const $navLogOut = $("#nav-logout");
const $navUserProfile = $("#nav-user-profile");
const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

/** Hide all page components (used to hide non-active sections) */
function hidePageComponents() {
  console.debug("hidePageComponents");
  $("#submit-form").hide();
  $("#favorited-stories").hide();
  $("#my-stories").hide();
  $("#all-stories-list").hide(); // Hide all stories list as well
}

/** Show form to submit a new story */
function navSubmitStory(evt) {
  console.debug("navSubmitStory", evt);
  hidePageComponents();
  $("#submit-form").show();
}

$body.on("click", "#nav-submit-story", navSubmitStory);

/** Show user's favorite stories */
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

/** Show user's stories */
function navMyStoriesClick(evt) {
  console.debug("navMyStoriesClick", evt);
  hidePageComponents();
  putMyStoriesOnPage();
}

$body.on("click", "#nav-my-stories", navMyStoriesClick);

/** Show main list of all stories when click site name */
function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */
function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logs in, update the navbar to reflect that */
function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $loginForm.hide(); // Hide login form
  $signupForm.hide(); // Hide signup form
}

/** Placeholder function for displaying favorite stories */
function putFavoritesOnPage() {
  console.debug("putFavoritesOnPage");
  $("#favorited-stories").show();
}

/** Placeholder function for displaying user's stories */
function putMyStoriesOnPage() {
  console.debug("putMyStoriesOnPage");
  $("#my-stories").show();
}

/** Placeholder function for displaying all stories */
function putStoriesOnPage() {
  console.debug("putStoriesOnPage");
  $("#all-stories-list").show();
}