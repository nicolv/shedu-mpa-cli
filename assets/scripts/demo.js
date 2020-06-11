(function() {

  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    Function('return this')() || {};

  var ArrayProto = Array.prototype;
  var push = ArrayProto.push;

  function _(obj) {
    if (!(this instanceof _)) {
      return new _(obj)
    }

    this._wrapped = obj;
  }

  _.isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };

  _.functions = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  }

  _.each = function(obj, callback) {
    if (Array.isArray(obj)) {
      for (let item of obj) {
        callback && callback.call(_, item)
      }
    }
  }

  _.map = function(wrapped, callback) {
    console.log("map")
    console.log("🍊", wrapped)
    console.log("🍎", callback)
  }

  _.throttle = function(func, wait = 500) {
    let timer = null;
    return function(...args) {
      console.log(timer)
      if (timer == null) {
        timer = setTimeout(() => { timer = null }, wait);
        return func.apply(this, args)
      }
    }
  }

  _.debounce = function(func, wait = 500) {
    let timer = null;
    return function(...args) {
      if (timer == null) {
        var result = func.apply(this, args)
      }
      timer = setTimeout(() => { timer = null }, wait);
      return result;
    }
  }

  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var arg = [this._wrapped]
        push.apply(arg, arguments);
        return func.apply(_, arg);
      };
    });
    return _;
  }
  _.mixin(_)

  root._ = _
})();