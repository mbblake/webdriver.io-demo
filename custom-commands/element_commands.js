module.exports = {
    waitAndClick: function() {
        try {
            this.waitForDisplayed();
            this.click();
        } catch(e) {
            throw new Error(e.name + ": " + e.message);
        }
    },
    waitAndSendKeys: function(keys) {
        try {
            this.waitForDisplayed();
            this.setValue(keys);
        } catch(e) {
            throw new Error(e.name + ": " + e.message);
        }
    }
}