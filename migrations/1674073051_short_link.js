var ShortLink = artifacts.require("ShortLink");

module.exports = function (_deployer) {
	// Use deployer to state migration tasks.
	_deployer.deploy(ShortLink);
};
