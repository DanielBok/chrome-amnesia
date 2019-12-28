export const validateRule = (rule: string) => {
  if (rule.startsWith("^")) rule = rule.substr(1);

  const components = rule.split("://");
  if (components.length !== 2) {
    return `URL must be in <code>&lt;protocol&gt;//&lt;domain&gt;</code> format.`;
  }

  let protocol = components[0],
    body = components[1];

  if (
    !protocol.startsWith("http") &&
    !protocol.startsWith("file") &&
    !protocol.startsWith("ftp")
  ) {
    return `Exclusion rule must start with <code>(http|https|file|ftp)://</code>`;
  }

  while (body.startsWith("/")) body = body.substr(1);

  if (body === "") {
    return "URL domain body cannot be empty as it will match everything. Use incognito in this case";
  }

  if (body.match(/\s/g) !== null) {
    return "URL must not have any whitespace";
  }
};
