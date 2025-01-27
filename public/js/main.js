const deleteBtn = document.querySelectorAll(".del");
const ticketItem = document.querySelectorAll("span.not");
const ticketComplete = document.querySelectorAll("span.completed");
const completedCheck = document.querySelectorAll(".completedCheckBox");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTicket);
});

Array.from(ticketItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(ticketComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

Array.from(completedCheck).forEach((el) => {
  el.addEventListener("click", toggleComplete);
});

async function deleteTicket() {
  const ticketId = this.parentNode.dataset.id;
  try {
    const response = await fetch("tickets/deleteTicket", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ticketIdFromJSFile: ticketId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const ticketId = this.parentNode.dataset.id;
  try {
    const response = await fetch("tickets/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ticketIdFromJSFile: ticketId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const ticketId = this.parentNode.dataset.id;
  try {
    const response = await fetch("tickets/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ticketIdFromJSFile: ticketId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function toggleComplete() {
  const ticketId = this.parentNode.dataset.id;
  console.log("CHECK:", this.checked);
  //   return;
  try {
    const response = await fetch("tickets/toggleComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ticketIdFromJSFile: ticketId,
        completedCheckBox: this.checked,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
