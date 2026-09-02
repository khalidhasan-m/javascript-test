//Question No. 1
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}
 //Question No. 2
function getDayType(day) {
  const lowerDay = day.toLowerCase();
 
  switch (lowerDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

//Question No. 3
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
 
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
 
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
 
  return "Available";
}
 