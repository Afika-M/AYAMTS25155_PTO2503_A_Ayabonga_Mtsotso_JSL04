const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];
// adding DOM elements
const modal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitleInput = document.getElementById("modal-task-title");
const modalDescInput = document.getElementById("modal-task-desc");
const modalStatusSelect = document.getElementById("modal-task-status");

/* functon to create a task element in the DOM*/
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");

  const titleEl = document.createElement("h4");
  titleEl.textContent = task.title;

  const descEl = document.createElement("p");

  taskDiv.append(titleEl, descEl);

  // add click event to open modal with task details
  taskDiv.addEventListener("click", () => openModal(task));

  return taskDiv;
}
// function to render tasks in their respective columns
function addTask(initialTasks) {
  initialTasks.forEach((task) => {
    const taskElement = createTaskElement(task);

    // Append to the correct column based on status
    const columnContainer = document.querySelector(
      `[data-status="${task.status}"] .tasks-container`
    );
    columnContainer.append(taskElement);
  });
}
// Function to open modal with task details
function openModal(task) {
  modalTitleInput.value = task.title;
  modalDescInput.value = task.description;
  modalStatusSelect.value = task.status;
  modal.style.display = "flex";
  modalDescInput.style.fontFamily = "inherit";
}
// Function to close modal
function closeModal() {
  modal.style.display = "none";
}
// Close modal when clicking the close button
closeModalBtn.addEventListener("click", () => closeModal());

addTask(initialTasks);
