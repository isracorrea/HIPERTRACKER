// Captura dos elementos do DOM
const habitInput = document.getElementById('habitInput');
const addBtn = document.getElementById('addBtn');
const habitList = document.getElementById('habitList');
const messageArea = document.getElementById('messageArea');

// Carrega os dados do localStorage ao iniciar a página
document.addEventListener('DOMContentLoaded', loadHabits);
addBtn.addEventListener('click', addHabit);

// Função que processa o clique no botão
function addHabit() {
    const habitText = habitInput.value.trim();

    // Mostra mensagem sem quebrar a aplicação caso o campo esteja vazio
    if (habitText === "") {
        showMessage("Por favor, digite um hábito válido.");
        return;
    }

    hideMessage();

    const habit = {
        id: Date.now(),
        text: habitText,
        completed: false
    };

    saveHabit(habit);
    renderHabit(habit);
    habitInput.value = ""; // Limpa a entrada
}

// Manipulação da área de mensagens com textContent (segurança)
function showMessage(msg) {
    messageArea.textContent = msg;
    messageArea.classList.remove('hidden');
}

function hideMessage() {
    messageArea.classList.add('hidden');
    messageArea.textContent = "";
}

// Cria os elementos na área de resultados
function renderHabit(habit) {
    const li = document.createElement('li');
    li.dataset.id = habit.id;
    
    const span = document.createElement('span');
    // Adição segura usando textContent para prevenir injeção de HTML
    span.textContent = habit.text; 
    
    if (habit.completed) {
        li.classList.add('completed');
    }

    span.addEventListener('click', () => toggleHabit(habit.id, li));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Apagar";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener('click', () => removeHabit(habit.id, li));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    habitList.appendChild(li);
}

// Funções para gerir estado e LocalStorage (Trilha C)
function toggleHabit(id, liElement) {
    let habits = getHabits();
    habits = habits.map(h => {
        if (h.id === id) h.completed = !h.completed;
        return h;
    });
    localStorage.setItem('habits', JSON.stringify(habits));
    liElement.classList.toggle('completed');
}

function removeHabit(id, liElement) {
    let habits = getHabits();
    habits = habits.filter(h => h.id !== id);
    localStorage.setItem('habits', JSON.stringify(habits));
    liElement.remove();
}

function saveHabit(habit) {
    const habits = getHabits();
    habits.push(habit);
    localStorage.setItem('habits', JSON.stringify(habits));
}

function getHabits() {
    const habitsJSON = localStorage.getItem('habits');
    return habitsJSON ? JSON.parse(habitsJSON) : [];
}

function loadHabits() {
    const habits = getHabits();
    habits.forEach(habit => renderHabit(habit));
}