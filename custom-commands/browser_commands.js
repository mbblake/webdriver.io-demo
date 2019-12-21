module.exports = {
    getUrlAndTitle: function() {
        return {
            url: browser.getUrl(),
            title: browser.getTitle()
        };
    }
}