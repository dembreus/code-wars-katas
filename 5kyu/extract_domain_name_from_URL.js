const domainName = url => {
  let URL = [...url];
  if (url.startsWith("https://www.")) {
    for (let i = 0; i < 12; i++) {
      URL.shift();
    }
  } else if (url.startsWith("http://www.")) {
    for (let i = 0; i < 11; i++) {
      URL.shift();
    }
  } else if (url.startsWith("https://")) {
    for (let i = 0; i < 8; i++) {
      URL.shift();
    }
  } else if (url.startsWith("http://")) {
    for (let i = 0; i < 7; i++) {
      URL.shift();
    }
  } else if (url.startsWith("www.")) {
    for (let i = 0; i < 4; i++) {
      URL.shift();
    }
  }
  if (url.endsWith(".com")) {
    for (let i = 0; i < 4; i++) {
      URL.pop();
    }
  }

  URL.forEach(index => {
    const endOfDomain = URL.length - URL.indexOf(".");
    if (index === ".") {
      for (let i = 0; i < endOfDomain; i++) {
        URL.pop();
      }
    }
  });
  return URL.join("");
};
