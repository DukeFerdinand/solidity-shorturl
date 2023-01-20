// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract ShortLink {
    struct UserData {
        // this should probably be limited to avoid excessive gas usage
        mapping (string => string) shortUrls;
    }

    mapping(string => string) public urls; // For FAST redirect lookup
    mapping(address => UserData) userData; // For easy account lookup later

    event ShortLinkCreated(address owner, string shortUrl, string url);

    /**
     * @dev Create a short url
     * @param shortUrl The short url
     * @param url The long url
     */
    function createShortLink(string memory shortUrl, string memory url) public {
        // I'd rather the shortUrl be generated on chain, but the solutions are not ideal or gas efficient
        require(bytes(urls[shortUrl]).length == 0, "Short url already exists");

        urls[shortUrl] = url;
        userData[msg.sender].shortUrls[shortUrl] = url;

        emit ShortLinkCreated(msg.sender, shortUrl, url);
    }

    /**
     * @dev Get a list of short urls owned by the caller
     * @return string array of short urls
     */
    // function getShortUrls() public view returns (mapping(string => string) memory) {
    //     return userData[msg.sender].shortUrls;
    // }

    /**
     * @dev Get the long url for a short url
     * @param shortUrl The short url
     * @return string The long url
     */
    function getLongUrl(string memory shortUrl) public view returns (string memory) {
        return urls[shortUrl];
    }
}
