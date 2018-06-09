define(['handlebars'] ,function(Handlebars){
    var that = this;
    var unique = function(oldArr){
        var
            newArr = [oldArr[0]],
            len = oldArr.length,
            i = 1;
        if (!len) return oldArr;
        for (; i < len; i++) {
            newArr.indexOf(oldArr[i]) < 0 ? newArr.push(oldArr[i]) : '';
        }
        return newArr;
    }

    Handlebars.registerHelper("check", function () {
        // console.log(arguments);

        var operation = arguments[0];
        var args = unique(arguments[0].match(/#[0-9]{1,}/ig));
        // console.log(args);

        if (args.length > arguments.length - 2) {
            return;
        }

        for (var i = 0; i < args.length; i++) {
            operation = operation.replace(new RegExp(args[i], "gm"), arguments[i + 1])
        }

        if (eval(operation)) {
            return arguments[arguments.length - 1].fn(this);
        } else {
            return arguments[arguments.length - 1].inverse(this);
        }
    });
    Handlebars.registerHelper("operate", function () {
        var operation = arguments[0];
        var args = unique(arguments[0].match(/#[0-9]{1,}/ig));
        if (args.length > arguments.length - 2) {
            return;
        }
        for (var i = 0; i < args.length; i++) {
            operation = operation.replace(new RegExp(args[i], "gm"), arguments[i + 1])
        }
        return eval(operation);
    });
    Handlebars.registerHelper('if_eq', function(v1, v2, opts) {
      if(v1 == v2)
          return opts.fn(this);
      else
          return opts.inverse(this);
    });
    Handlebars.registerHelper('if_even', function(v1, opts) {
      var temp = v1%2;
      if(temp == 0)
          return opts.fn(this);
      else
          return opts.inverse(this);
    });
    return Handlebars;
});