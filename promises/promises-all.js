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
var urls = ['https://google.com', 'https://github.com', 'http://filipelinhares.com'];
var notUrls = ['htps://google', 'it is not a url', 'http://filipelinhares.com'];

var promises = urls.map(checkUrl);
Promise.all(promises)
  .then(function (urls) {
    console.log('All urls checkeds ' + urls );
  })
  .catch(function (err) {
    console.error(err);
  });

var promisesToFail = notUrls.map(checkUrl);
Promise.all(promisesToFail)
  .then(function (urls) {
    console.log('All urls checkeds ' + urls );
  })
  .catch(function (err) {
    console.error(err);
  });
