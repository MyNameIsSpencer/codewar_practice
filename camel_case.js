function toCamelCase(str){
  return str.replace(/-([a-z])|_([a-z])/gi, function (g) { return g[1].toUpperCase(); });
}
