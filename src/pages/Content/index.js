import chromeAPI from '../../api/chromeAPI';

// check clicks only on search results;
const searchResults = document.getElementById('search');

if (searchResults) {
  searchResults.addEventListener('click', checkClick);
}

/**
 * getUrlVars parse google search url string
 * @param {string} href url
 */

function getUrlVars(href) {
  var vars = [],
    hash;
  var hashes = href.slice(href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

/**
 * checkClick Checking click on sites from storage
 * @param {event} e Event
 */
function checkClick(e) {
  // get search query (q) from google search url and replace all '+' to spaces
  const searchQuery = getUrlVars(window.location.href)
    .q.replace(/[+]/g, ' ')
    .replace(/[%2B]/g, '+')
    .toLowerCase();
  // get url of clicked link
  const clickedUrl = String(e.target.closest('a')).toLowerCase();

  chromeAPI.storage.getAllTasks((res) => {
    const tasks = res.tasks.map((task) => {
      // compare search query and clicked url with items in storage
      if (task.queryString === searchQuery && clickedUrl.includes(task.url.toLowerCase())) {
        // update status
        task.didClicked = true;
      }
      return task;
    });

    // update data in storage
    chromeAPI.storage.setTasks(tasks);
  });
}
