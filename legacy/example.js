class Example {
    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>Capppyyyyyyyy... !!!!!!!</h1>"
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener("click", this.handleClick)
    }
    handleClick() {
        this.ele.children[0].innerText = "BARAAAAAAA!"
    }
}

export default Example;