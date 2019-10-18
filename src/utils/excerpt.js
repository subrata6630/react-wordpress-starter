const stripHtml = html => {
  var temporalDivElement = document.createElement("div");
  temporalDivElement.innerHTML = html;
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
};

const getExcerpt = (str, limit) => {
  const strip = stripHtml(str);
  const excerpted = strip.substr(0, strip.lastIndexOf(" ", limit)) + "...";
  return excerpted;
};

export default getExcerpt;
