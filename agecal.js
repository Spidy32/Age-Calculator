function checkagecal() {
  let currentyear = parseInt(cd.value.slice(0, 4), 10);
  let currentmonth = parseInt(cd.value.slice(5, 7), 10);
  let currentdate = parseInt(cd.value.slice(8, 10), 10);
  console.log(currentyear, currentmonth, currentdate);

  let dobyear = parseInt(dob.value.slice(0, 4), 10);
  let dobmonth = parseInt(dob.value.slice(5, 7), 10);
  let dobdate = parseInt(dob.value.slice(8, 10), 10);
  console.log(dobyear, dobmonth, dobdate);

  let day
  let month
  let year
  if (currentdate >= dobdate) day = currentdate - dobdate;
  else {
    currentdate + new Date(currentyear, currentmonth).getDate() - dobdate;
    currentmonth--;
  }
  if (currentmonth >= dobmonth) month = currentmonth - dobmonth;
  else {
    currentmonth + 12 - dobmonth;
    currentyear--;
  }
  year = currentyear - dobyear;

  if (year < 0) age.innerHTML = "bhai sahi date dalo";
  else {
    age.innerHTML = year + " Years " + month + " Month " + day + " Days ";
  }
}
