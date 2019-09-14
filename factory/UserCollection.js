module.exports = class UserCollection {
    constructor(fullNameList) {
        this.fullNameList = fullNameList || [];
        this.firstNameList = fullNameList.map((user) => user.firstName);
        this.lastNameList  = fullNameList.map((user) => user.lastName);
    }

    getUniqFirstNameSet() {
        return new Set(this.firstNameList);
    }

    getUniqLastNameSet() {
        return new Set(this.lastNameList);
    }

    getUniqFullNameSet() {
        return new Set(this.fullNameList.map((user) => `${user.firstName}-${user.lastName}`));
    }

    getMostCommonFunction(listName, entriesNumber) {
        let  countMultipleName = {};
        this[listName].forEach((name) => {
            if(!Object.keys(countMultipleName).includes(name)) {
                countMultipleName[name] = 1;
            } else {
                countMultipleName[name] = countMultipleName[name] + 1;
            }
        });
        return Object.keys(countMultipleName).sort((a, b) => countMultipleName[b] - countMultipleName[a]).slice(0, entriesNumber);
    }

    getMostCommonFirstNames() {
        return this.getMostCommonFunction('firstNameList', 10);
    }

    getMostCommonLastNames() {
        return this.getMostCommonFunction('lastNameList', 10);

    }
};
