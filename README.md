# Solidity Short URL

This repo is a very simple exercise for storing and retrieving short URLs on any chain that supports Solidity smart contracts :)

Do note that this is intended to be a hybrid application of sorts, where short url IDs are generated off chain and stored here. This
is not quite what I hoped from this app, but it's ergonomically much cleaner and will look much nicer than using `uint`s with a query param.

## Truffle Setup

I personally enjoy using Truffle with Ganache for running things locally, as it's far faster to run `npm run test` than it is to deploy a contract to a
test chain and iterate when something breaks (I'm better with off chain dev than on chain dev).

Requirements:

-   [Node.js (v18 is what I'm using at time of writing)](https://nodejs.org/en/)
-   [Ganache (optional, but assumed present)](https://trufflesuite.com/ganache/)
-   [Truffle (included when running npm install)](https://trufflesuite.com/truffle/)

To get started:

-   Run `npm install`. This gets your NPM JavaScript deps and includes truffle
-   Run `npm run test` to run JavaScript against your contract on the configured `development` network

## What if I don't want Ganache?

To avoid using Ganache (aka use your own test net for development):

-   Change the RPC config for the `development` network in `truffle-config.js`

```javascript
// ... omitted
  networks: {
    development: {
        host: "127.0.0.1", // Localhost (default: none)
        port: 7545, // Standard Ganache port (default eth port: 8545)
        network_id: 5777, // Any network (default: none)
    },
  }
// ... omitted
```

**NOTE:** You're on your own for obtaining the host and port for this :)
