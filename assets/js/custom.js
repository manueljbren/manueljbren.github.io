document.addEventListener("DOMContentLoaded", function () {
  const langDropdown = document.querySelector("#navbar-main .dropdown-menu");
  if (langDropdown) {
    document.body.appendChild(langDropdown);
    langDropdown.style.position = "absolute";
    langDropdown.style.zIndex = "3000";
  }
});
