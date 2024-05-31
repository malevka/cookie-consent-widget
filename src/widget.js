const cookieKey = "acceptCookies";
const settings = {
  text: "Используя сайт, я даю согласие на обработку моих персональных данных с использованием сторонних сервисов и принимаю условия Политики Конфиденциальности.",
  href: "#",
  linkText: "Политики Конфиденциальности",
  buttonText: "Я согласен"
};

document.addEventListener("DOMContentLoaded", () => {
  const allCookies = document.cookie.split(";");
  const acceptCookieIdx = allCookies.findIndex((cookie) => cookie.trim().split("=")[0] === cookieKey);
  if (acceptCookieIdx === -1) {
    initializeCookieWidget(settings);
  }
});

function initializeCookieWidget({ text, href, linkText, buttonText }) {
  const handleClick = () => {
    document.cookie = `${cookieKey}=true;;max-age=31536000`;
    widget.remove();
  };
  const createButton = () => {
    const button = document.createElement("button");
    button.classList.add("ccw-button");
    button.onclick = handleClick;
    button.textContent = buttonText;
    return button;
  };

  const createContent = () => {
    const container = document.createElement("div");
    container.classList.add("ccw-container");

    const content = document.createElement("p");
    content.classList.add("ccw-content");
    const link = `<a class="ccw-link" href="${href}" target="_blank">${linkText}</a>`;
    const buildText = text.replace(linkText, link);
    content.innerHTML = buildText;

    const button = createButton();
    container.append(content, button);
    return container;
  };

  const createWidget = () => {
    const widget = document.createElement("div");
    widget.classList.add("ccw-wrapper");
    const content = createContent();
    widget.appendChild(content);
    return widget;
  };

  const widget = createWidget();
  document.body.appendChild(widget);
}
