"use strict";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ rules: ["https?://localhost"] });
});

chrome.history.onVisited.addListener(({ url }) => {
  chrome.storage.sync.get("rules", ({ rules }) => {
    if (rules === undefined) return;

    rules.forEach(rule => removeRecentHistory(url, rule));
  });
});

/**
 * Removes the url from the recent history if it matches the specified rule
 *
 * @param {string} url current url that the browser is in
 * @param {string} rule regex-like string
 */
function removeRecentHistory(url, rule) {
  if (!rule.startsWith("^")) rule = "^" + rule;
  const match = url.match(new RegExp(rule));

  if (match === null) return;

  const startTime = new Date().getDate() - 1000 * 60 * 60 * 24; // 24 hours ago
  chrome.history.search(
    {
      text: match[0],
      startTime,
      maxResults: 99999
    },
    results => {
      results.forEach(({ url }) => {
        if (url.match(rule)) {
          chrome.history.deleteUrl({ url }, () =>
            console.log(`Removed: '${url}'`)
          );
        }
      });
    }
  );
}
