class EventBut {
    events;

    constructor() {
        this.events = {};
    }

    on(eventName, eventHandler) {
        let listener = {name: eventName, handler: eventHandler};
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(listener);
    }

    off(eventName) {
        this.events[eventName] = [];
    }

    trigger(eventName, param) {
        if (this.events[eventName])
            this.events[eventName].forEach(el => el.handler(param));
        else
            console.log("Event doesn't exist");
    }
}
