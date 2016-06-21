var obj = {};

obj.hi = function(name, successCallback, errorCallback) {
    cordova.exec(
      successCallback, errorCallback,
      "Hello", "hi", [name]);
};

module.exports = obj;