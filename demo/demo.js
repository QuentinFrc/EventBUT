class NeedToThrowEvent{
    constructor(el) {
        this.el = el;
        this.eventBut = EventBut();
        this.click = 0;

        let customListener = this.eventBut.bind('clické', (param) =>  {param.preventDefault();console.log(param);}) //Replace click on element by console.log(event)

        this.el.addEventListener('click', (defaultEvent) =>
        {
            this.eventBut.trigger('clické', defaultEvent);
            this.click++;
            if(this.click == 2) {
                this.eventBut.unbind('clické', customListener);
            }
        }); //redirect default click event to custom click event
    }
}

function DomReady() {
    let demo = new NeedToThrowEvent(document.querySelector("#demo"));
}

document.addEventListener("DOMContentLoaded", DomReady);
