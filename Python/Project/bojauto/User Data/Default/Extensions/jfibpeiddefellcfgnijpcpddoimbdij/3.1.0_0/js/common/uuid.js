(function() {
  this.define('uuid', function() {
    var generateQuad;
    generateQuad = function() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
    };
    return this.exports = {
      generateGuid: function() {
        return ["" + (generateQuad()) + (generateQuad()), "" + (generateQuad()), "" + (generateQuad()), "" + (generateQuad()), "" + (generateQuad()) + (generateQuad()) + (generateQuad())].join('-');
      }
    };
  });

}).call(this);
