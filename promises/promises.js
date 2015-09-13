function checkUrl (url, cb) {
 var URL_PATTERN = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return new Promise(function (resolve, reject) {
    if (url.match(URL_PATTERN)) {
      resolve(url);
    } else {
      reject(new Error('This is not a URL'));
    }
  });
}

// Urls to check
var url = 'http://www.google.com';
var notUrl = 'it is not a url';

checkUrl(url)
  .then(function (url) {
    console.log(url);
  })
  .catch(function (err) {
    throw err;
  });

checkUrl(notUrl)
  .then(function (url) {
    console.log(url);
  })
  .catch(function (err) {
    console.error(err);
  });
