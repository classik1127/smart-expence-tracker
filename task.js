const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const totalEl = document.getElementById("total");
const averageEl = document.getElementById("average");

const expenses = [];

addBtn.onclick = () => {
  const title = document.getElementById("title").value.trim();
  const amount = Number(document.getElementById("amount").value);

  if (!title || amount <= 0) return;

  expenses.push({ title, amount });
  render();
};

function render() {
  list.innerHTML = "";

  expenses.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.title} — ₦${exp.amount}`;

    if (exp.amount > 5000) {
      li.classList.add("expensive");
    }

    list.appendChild(li);
  });

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const average = total / expenses.length || 0;

  totalEl.textContent = total.toFixed(2);
  averageEl.textContent = average.toFixed(2);
}
