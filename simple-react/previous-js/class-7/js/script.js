// ============== Local storage with JSON =============

const setLocalStorage = () => {
    const name = document.getElementById('name').value;
    const id = document.querySelector('#id').value;
    // console.log(name, id);

    // localStorage.setItem(id, name);

    const newObj = {id, name}
    console.log(newObj);

    const jsonData = JSON.stringify(newObj);
    localStorage.setItem(id, jsonData);
}

function clearLocalStorage(){
    localStorage.clear();
}

const removeFromLocalStorage = () => {
    const removeId = document.querySelector('#removeId').value;
    localStorage.removeItem(removeId);
}

function getLocalStorageData(){
    const storedItem = localStorage.getItem("1");
    const plainData = JSON.parse(storedItem);
    console.log(plainData);
}
getLocalStorageData();

console.log('--------------');








