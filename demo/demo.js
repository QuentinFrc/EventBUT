let eventBut = new EventBut();

eventBut.on("drag", ()=> {
    console.log("test");
})

eventBut.trigger("dragend", "data");

class MyClass {
    constructor(el) {
        el.addEventListener('drag', (e) => {
            e.preventDefault();
            e.trigger('drag', null)
        });
        el.addEventListener('dragstart', (e) => {
            e.preventDefault();
            e.trigger('dragstart', null)
        });
        el.addEventListener('dragend', (e) => {
            e.preventDefault();
            e.trigger('dragend', null)
        });
    }
}
