// Sort item by most recent date
function compare(a, b) {
  const timeA = a.getElementsByTagName("time")[0].dateTime;
  const timeB = b.getElementsByTagName("time")[0].dateTime;

  let result = 0;
  if (timeA < timeB) {
    result = 1;
  } else if (timeA > timeB) {
    result = -1;
  }
  return result;
}

var jobList = document.getElementsByClassName("ais-Hits-list")[0];

// Temporary array for sorting
var jobArray = [];

// Populate array of job description
for (var job = 0; job < jobList.childElementCount; job++) {
  jobArray.push(jobList.childNodes[job]);
}

 jobArray.sort(compare)

// Populate previous list with sorted elements
for (let job of jobArray) {
  jobList.appendChild(job);
}
