let itemList = []
let previousList = []

let addItem = () => {
    let item = {
        text: document.getElementById("itemInput").value,
        isDone: false
    }
    itemList.push(item)
    showList(itemList)
    save()
}

let removeItem = (i) => {
    itemList.splice(i, 1)
    showList(itemList)
    save()
}

let showList = (list) => {
    let message = list.map((item, i) => {
        if(item.isDone) {
            return `<li><input clas="checkbox" type="checkbox" onclick="toggle(${i})" checked />${item.text}<i class="fas fa-trash-alt" onclick='removeItem(${i})'></i></li>`.strike()
        } else {
            return `<li><input class="checkbox" type="checkbox" onclick="toggle(${i})" />${item.text}<i class="fas fa-trash-alt" onclick='removeItem(${i})'></i></li>`
        } 
    }).join('')
        
    document.getElementById("itemListArea").innerHTML = message
}

let toggle = (i) => {
    itemList[i].isDone = !(itemList[i].isDone)
    showList(itemList)
    save()
}

let filterDone = () => {
    let filteredList = itemList.filter(item => item.isDone == true)
    showList(filteredList)
}

let save = () => {
    localStorage.setItem("todo", JSON.stringify(itemList))
}

let loadData = () => {
    previousList = JSON.parse(localStorage.getItem("todo"))
    if(previousList.length > 0) {
        itemList = previousList
        showList(itemList)
    } else {
        itemList = []
    }
}

loadData()