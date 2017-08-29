let ParseVariable = require('./ParseVariable');
let PrettyPrinter = require('./PrettyPrinter');

class PrettyDump {
    static dump(arg, level) {
        let argObj = (new ParseVariable).run(arg);
        level = level || 0;
        PrettyPrinter.print(argObj, level);
    }

    static dd(arg, level) {
        let argObj = (new ParseVariable).run(arg);
        level = level || 0;
        PrettyPrinter.print(argObj, level);

        process.exit();
    }
}

module.exports = PrettyDump;
