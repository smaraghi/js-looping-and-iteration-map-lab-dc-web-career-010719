function lowerCaseDrivers(array) {
    return array.map(function(driverName) {
        return driverName.toLowerCase()})
}

function nameToAttributes(array) {
    return array.map(function(driverName) {
        return Object.assign({}, {firstName: driverName.split(' ')[0], lastName: driverName.split(' ')[1]} )
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
       return `${driver.name} is from ${driver.hometown}` 
    })
}