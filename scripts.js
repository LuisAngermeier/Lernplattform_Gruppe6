// Mock data
let materials = [];
let groups = [];
let threads = [];

function addMaterial() {
    const material = prompt("Bitte geben Sie den Namen des Materials ein:");
    if (material) {
        materials.push(material);
        renderMaterials();
    }
}

function renderMaterials() {
    const list = document.getElementById('materials-list');
    list.innerHTML = '';
    materials.forEach((material, index) => {
        const div = document.createElement('div');
        div.textContent = material;
        list.appendChild(div);
    });
}

function addGroup() {
    const group = prompt("Bitte geben Sie den Namen der Gruppe ein:");
    if (group) {
        groups.push(group);
        renderGroups();
    }
}

function renderGroups() {
    const list = document.getElementById('groups-list');
    list.innerHTML = '';
    groups.forEach((group, index) => {
        const div = document.createElement('div');
        div.textContent = group;
        list.appendChild(div);
    });
}

function addThread() {
    const thread = prompt("Bitte geben Sie den Titel des Themas ein:");
    if (thread) {
        threads.push(thread);
        renderThreads();
    }
}

function renderThreads() {
    const list = document.getElementById('forum-threads');
    list.innerHTML = '';
    threads.forEach((thread, index) => {
        const div = document.createElement('div');
        div.textContent = thread;
        list.appendChild(div);
    });
}

// Initial rendering
renderMaterials();
renderGroups();
renderThreads();
