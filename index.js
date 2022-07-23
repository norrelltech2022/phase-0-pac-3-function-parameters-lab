function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language= "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

/*
console.log(introduction("daryl"));
console.log(introductionWithLanguage("daryl", "javascript"));
console.log(introductionWithLanguageOptional("daryl"));
*/