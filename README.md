# Chrome Amnesia - Forgetting your Localhost

`Chrome Amnesia` is a Chrome Extension that provides the ability for you to
selectively not remember your any of your browsing history.

This is particularly useful when you're doing local development. For example,
you might not want your browser to remember all those pesky `localhost:8080`,
`localhost:3000/api/etc` but do not want to go into incognito mode because
you have some other extensions like
[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
that you want to work with. Or you might be developing with localStorage or
cookies.

Whatever your reason, `Chrome Amnesia` is here to help you selectively forget.

## Usage

The extension works by using a simple regex match. By default,
`https?://localhost` is added for you. You can choose to remove it.

To test whether your regex works, use your browser console to run the following
test.

```javascript
const urlToForget = "http://localhost:3000";

// put your regex in the String.raw portion
const match = urlToForget.match(String.raw`https?://localhost:\d+`);

if (match !== null) {
  console.log("Your regex works");
}
```
