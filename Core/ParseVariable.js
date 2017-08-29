class ParseVariable {

    run(arg) {
        let argObj = this.newArg();

        argObj.value = arg;
        argObj.type = this.getType(arg);

        return argObj;
    }

    newArg() {
        return {
            value: "",
            type: "",
        }
    }

    getType(arg) {
        return ({}).toString.call(arg).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

}

module.exports = ParseVariable;
