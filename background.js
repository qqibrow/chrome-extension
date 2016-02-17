/**
 * Created by lniu on 6/20/15.
 */

function getOauthUrl() {
    return "https://stackexchange.com/oauth/dialog?client_id=4716&redirect_uri=" + chrome.identity.getRedirectURL();
}

var authorizationCallback = function(data) {
    console.log("oauth succeed.");
    console.log(data);
    // TODO store the oauth token.
}

chrome.identity.launchWebAuthFlow({'url' : getOauthUrl(), 'interactive': true }, authorizationCallback);

function getFromUrl() {
    return {
        "items": [
            {
                "tags": [
                    "bash",
                    "ncurses",
                    "python-curses",
                    "urwid"
                ],
                "owner": {
                    "reputation": 28,
                    "user_id": 794024,
                    "user_type": "registered",
                    "profile_image": "https://www.gravatar.com/avatar/d57040508f26935e62e7677c78e1c348?s=128&d=identicon&r=PG",
                    "display_name": "Benjamin Compson",
                    "link": "http://stackoverflow.com/users/794024/benjamin-compson"
                },
                "is_answered": false,
                "view_count": 8,
                "answer_count": 0,
                "score": 1,
                "last_activity_date": 1434849157,
                "creation_date": 1434849157,
                "question_id": 30960375,
                "link": "http://stackoverflow.com/questions/30960375/best-approach-for-building-text-based-data-entry-app",
                "title": "Best approach for building text based data entry app"
            },
            {
                "tags": [
                    "bash",
                    "awk",
                    "bioinformatics",
                    "fastq"
                ],
                "owner": {
                    "reputation": 7,
                    "user_id": 3969137,
                    "user_type": "registered",
                    "profile_image": "https://www.gravatar.com/avatar/57d8e572ac8cbe4c555f3613c010e0ee?s=128&d=identicon&r=PG&f=1",
                    "display_name": "anth",
                    "link": "http://stackoverflow.com/users/3969137/anth"
                },
                "is_answered": true,
                "view_count": 9,
                "answer_count": 2,
                "score": 0,
                "last_activity_date": 1434845138,
                "creation_date": 1434844314,
                "question_id": 30959990,
                "link": "http://stackoverflow.com/questions/30959990/bash-converting-4-columns-of-text-interleaved-lines-tab-delimited-columns-to-f",
                "title": "Bash: Converting 4 columns of text interleaved lines (tab-delimited columns to FASTQ file)"
            }
        ],
        "has_more": true,
        "quota_max": 10000,
        "quota_remaining": 9800
    };
}


function requestQuestions() {
    var raw = getFromUrl();
    var questions = [];
    raw.items.forEach(function(oneItem) {
        console.log(oneItem.title);
        questions.push({
            'title': oneItem.title,
            'creation_date': oneItem.creation_date,
            'link': oneItem.link
        });

    });
    return questions;
}

var questions = requestQuestions();
console.log(questions);

//chrome.browserAction.onClicked.addListener(requestQuestions);



