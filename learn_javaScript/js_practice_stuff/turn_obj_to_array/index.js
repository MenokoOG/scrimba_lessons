let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails ={
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}
console.log(Object.values(scrimbaUsersEmails))
// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs ={
    "00": "sindre",
    "01": "per",
    "02": "frode"
}
console.log(Object.keys(scrimbaUsersIDs))
// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries ={
    "00": "hello",
    "01": "there",
    "02": "how are you"
}
console.log(Object.entries(scrimbaUsersEntries))