export const removeInitialBackslash = (url: string): string => {
  if (!url) return "";

  if (url[0] === "/") return url.replace("/", "");

  return url;
};

export const processAvatarUrl = (path: string, url: string): string => {
  if (!url) return "";

  if (url.includes("gravatar")) return removeInitialBackslash(url);

  return `${path}${url}`;
};
