/*
의존 모듈을 정의한다.

각 파일이 의존하고 있는 모듈을 코드 상에서 확인하기 위한 간단한 define 함수이다.
아래와 같이 정의하며, 의존 모듈은 파라미터명으로 가져온다.

define 'moduleName', ($$foo, $$bar, $$baz) ->
  ...
  exports.foo = 'xxx' # exports 를 활용하거나,
  exports = {} # 새 값을 정의할 수 있다.

의존 모듈의 이름은 `$$XXX`와 같은 형태로 정의한다.
의존 파일은 미리 순서대로 정의해야 하고, 이 파일이 의존하고 있는 모듈을 동적으로 가져오진 않는다.
개발 편의와 혼란을 위해 적용한 간단한 모듈이다.
*/


(function() {
  var getDependencies, _rArg, _rArgSplit, _rComment, _rModulePrefix;

  _rArg = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;

  _rArgSplit = /,/;

  _rModulePrefix = /^\$\$/;

  _rComment = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

  getDependencies = function(currentModuleName, fn) {
    var argDecl, fnText, modules;
    fnText = fn.toString().replace(_rComment, '');
    argDecl = fnText.match(_rArg);
    modules = [];
    _.each(argDecl[1].split(_rArgSplit), function(arg) {
      var moduleName;
      moduleName = arg.trim().replace(_rModulePrefix, '');
      if (moduleName) {
        if (!(moduleName in this.define._modules)) {
          throw "Error when defining " + currentModuleName + ": Can't find module '" + moduleName + "'";
        }
        return modules.push(this.define._modules[moduleName]);
      }
    });
    return modules;
  };

  this.define = function(moduleName, def) {
    var _base;
    (_base = this.define)._modules || (_base._modules = {});
    if (moduleName in this.define._modules) {
      throw "Module " + moduleName + " is already defined";
    }
    this.exports = {};
    def.apply(null, getDependencies(moduleName, def));
    this.define._modules[moduleName] = this.exports;
    return this.exports = void 0;
  };

}).call(this);
