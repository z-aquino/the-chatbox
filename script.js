const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value.trim() === "") return;

  const msg = document.createElement("div");
  msg.textContent = input.value;
  msg.style.background = "#2f3136";
  msg.style.color = "white";
  msg.style.padding = "8px";
  msg.style.margin = "6px 0";
  msg.style.borderRadius = "8px";

  messages.appendChild(msg);
  input.value = "";
});