const counter = document.getElementById("counter");

let count = 0;

function increment() {
    count++;
    counter.textContent = count;
    return
}

function decrement() {
    if (count === 0) {
        window.alert("Counter is zero");
        return;
    }
    else {
        count--;
        counter.textContent = count;
    }
}

function reset(){
    if(count === 0) window.alert("Already reset to zero");
    count = 0;
    counter.textContent = count;
    return
}