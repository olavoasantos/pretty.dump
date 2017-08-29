let echo = require('console.echo');
let parse = require('./ParseVariable');

class PrettyPrinter {
    static print(arg, level) {
        this.level(level);
        this[arg.type](arg, level);
    }

    static level(lvl) {
        for(let i=0; i < lvl; i++) {
            echo.text("  ");
        }
    }

    static string(str) {
        echo.lred.text("\"")
            .green.text(str.value)
            .lred.text("\"");
    }

    static number(num) {
        echo.blue.text(num.value);
    }

    static boolean(boo) {
        echo.lblue.text(boo.value);
    }

    static null() {
        echo.lred.text("null");
    }

    static undefined() {
        echo.magenta.text("undefined");
    }

    static array(arr, level) {
        echo.blue.text(`array:${arr.value.length} `).lred.text("[").break;
        level++;
        arr.value.forEach( (item, key) => {
            this.print((new parse).run(key), level);
            echo.lred.text(": ")
            let value = (new parse).run(item);
            (value.type === "array" || value.type === "object" || value.type === "function")
                ? this.print(value, level)
                : this.print(value);
            echo.break;
        });
        level--;
        this.level(level);
        echo.lred.text(`]`);
    }

    static object(obj, level) {
        echo.blue.text(`${obj.value.constructor.name} `).lred.text("{").break;
        level++;
        let item;
        for(let key in obj.value) {
            item = obj.value[key];
            this.print((new parse).run(key), level);
            echo.lred.text(": ")
            let value = (new parse).run(item);
            (value.type === "array" || value.type === "object" || value.type === "function")
                ? this.print(value, level)
                : this.print(value);
            echo.break;
        }
        level--;
        this.level(level);
        echo.lred.text(`}`);
    }

    static function(func, level) {
        echo.blue.text(`${func.value.name} `).lred.text("{").break;
        level++;
        let item, list = [func.value.name];
        for(let key of Object.getOwnPropertyNames(func.value)) {
            this.print((new parse).run(key), level);
            echo.lred.text(": ")

            item = func.value[key];
            let value = (new parse).run(item);

            if(value.type === "array" || value.type === "object" || value.type === "function") {
                if(list.includes(value.value.name)) {
                    echo.magenta.text("[Circular]");
                } else {
                    list.push(value.value.name);
                    this.print(value, level);
                }
            } else {
                this.print(value);
            }
            echo.break;
        }
        level--;
        this.level(level);
        echo.lred.text(`}`);
    }

    static isCycle(obj) {
        try {JSON.stringify(obj)}
        catch (e) {
            dd(e);
            return true;
        }

        return false;
    }
}

module.exports = PrettyPrinter;
