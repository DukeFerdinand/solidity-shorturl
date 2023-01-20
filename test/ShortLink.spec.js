const crypto = require("crypto");
const ShortLink = artifacts.require("ShortLink");

const generateShortLink = () => {
	return crypto.randomBytes(5).toString("hex");
};

contract("ShortLink", (accounts) => {
	it("should create a short link", async () => {
		const shortLink = await ShortLink.deployed();

		const web3 = ShortLink.web3;
		const contract = new web3.eth.Contract(
			ShortLink.abi,
			shortLink.address
		);

		const shortUrl = generateShortLink();

		const tx = await contract.methods
			.createShortLink(shortUrl, "https://www.google.com")
			.send({
				from: accounts[0],
			});

		const result = tx.events.ShortLinkCreated.returnValues.shortUrl;
		console.log("shortUrl", result);
		expect(result).to.equal(shortUrl);
	});

	it("should retrieve a short link", async () => {
		const shortLink = await ShortLink.deployed();

		const web3 = ShortLink.web3;
		const contract = new web3.eth.Contract(
			ShortLink.abi,
			shortLink.address
		);

		const shortUrl = generateShortLink();

		const tx = await contract.methods
			.createShortLink(shortUrl, "https://www.google.com")
			.send({
				from: accounts[0],
			});

		const result = await contract.methods.getLongUrl(shortUrl).call();

		expect(result).to.equal("https://www.google.com");
	});
});
