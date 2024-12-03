
const { checkForUrl } = require("../UrlChecker");



    test("Testing Valid url", () => {
      expect(checkForUrl('https:/medium.com/')).toBeFalsy();
      expect(checkForUrl('Hello')).toBeFalsy();
      expect(checkForUrl('https://medium.com/redis-with-raphael-de-lio/understanding-pub-sub-in-redis-18278440c2a9')).toBeTruthy();
    });
