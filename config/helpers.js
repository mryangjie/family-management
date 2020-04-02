function getEnv() {
  var argv = process.argv;
  var env = argv[argv.length - 1];
  return env.substr(7) || 'dev'
}
exports.getBuildEnv = function() {
  return getEnv();
}

exports.getProxyTarget = function() {
  let env = getEnv();
  let proxyTarget = 'http://cover.dev.ichasem.tech/'; //开发环境
  if (env == 'test') { //测试环境
     
  }
  return proxyTarget;
}
