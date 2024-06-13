document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.querySelector(".reset-btn");
  const handleClick = () => {
    document.cookie = `${cookieKey}=true;;max-age=0`;
    window.location.reload();
  };
  resetBtn.onclick = handleClick;
});
