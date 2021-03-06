module.exports.AuthProvider                    = require('./user').AuthProvider;
module.exports.OpenIdConnectAuthProvider       = require('./user').OpenIdConnectAuthProvider;
module.exports.GoogleCloudPlatformAuthProvider = require('./user').GoogleCloudPlatformAuthProvider;
module.exports.Cluster                         = require('./cluster');
module.exports.Context                         = require('./context');
module.exports.Namespace                       = require('./namespace');
module.exports.User                            = require('./user').User;

module.exports.KubeConfig                      = require('./manager');
