class LS {
    setItem(itemName, item) {
        localStorage.setItem(itemName, item);
    }

    getItem(itemName) {
        return localStorage.getItem(itemName);
    }

    removeItem(itemName) {
        localStorage.removeItem(itemName);
    }
}

const ls = new LS();
export { ls };