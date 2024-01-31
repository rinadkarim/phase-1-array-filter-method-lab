function findMatching(DriversNamesArray, StringToMatch){
    return DriversNamesArray.filter((DriverName) => {
        return DriverName.toUpperCase() === StringToMatch.toUpperCase()    
    });
}

function fuzzyMatch(ArrayOfDrivers, StringInQ){
    return ArrayOfDrivers.filter((DriversName) => {
        return DriversName[0] === StringInQ[0]
    });
}

function matchName(ArrayOfDriverObjects, StringInQ){
    return ArrayOfDriverObjects.filter((DriverObject) => {
        return DriverObject.name === StringInQ
    });
}