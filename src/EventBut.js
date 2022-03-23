function EventBut() {
    let events = [];
    let eventBut = {};

    eventBut.bind = function (name, handler) {
        let listener = {"name": name, "handler": handler};
        events[name] = events[name] || [];
        events[name].push(listener);
        return listener;
    }

    eventBut.unbind = function (name, listener) {
        let eventsName = events[name]
        let index =  eventsName.indexOf(listener);
        if (index !== -1) {
            return events[name].splice(index, 1);
        }

        return [];
    }

    eventBut.trigger = function (name, param) {
        let allListeners = events[name];
        if (allListeners) {
            allListeners.forEach(listener => listener.handler(param));
            return true;
        }
        return false;
    }

    return eventBut;
}
