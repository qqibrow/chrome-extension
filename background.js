/**
 * Created by lniu on 6/20/15.
 */

function getOauthUrl() {
    return "https://stackexchange.com/oauth/dialog?client_id=4716&redirect_uri=" + chrome.identity.getRedirectURL();
}

var authorizationCallback = function(data) {
    console.log("oauth succeed.");
    console.log(data);
}

chrome.identity.launchWebAuthFlow({'url' : getOauthUrl(), 'interactive': true }, authorizationCallback);



