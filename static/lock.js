document.oncontextmenu = () => {
    return false
}

document.onkeydown = e => {
    if(e.key == "F12"){
        return false
    }
    if(e.ctrlKey && e.key == "u"){
        return false
    }
    if(e.ctrlKey && e.key == "c"){
        return false
    }
    if(e.ctrlKey && e.Key == "v"){
        return false
    }
}