# CryptoPrice CLI

CryptoPrice CLI is a command-line tool to fetch and display real-time cryptocurrency prices. It supports fetching prices for popular cryptocurrencies like Bitcoin, Ethereum, and more.

## Features

- Fetch real-time cryptocurrency prices.
- Display prices for multiple cryptocurrencies.
- Supports popular cryptocurrencies.

## Installation

To install CryptoPrice CLI, you need to have Node.js installed. You can install the CLI tool globally using npm:


```bash
npm install -g coindex
```

## Usage

To use CryptoPrice CLI, open your terminal and Set API key for API mentioned:
```bash
coindex key set
```

**Enter the API key**
```bash
? Enter API keyhttps://nomics.com <API_key>
```

**Fetch crypto price**
Enter crypto full_name and currnecy(in short eg:USD)
```bash
coindex check price --coin=<crypto_name> --cur=<currency_name> 
```

## Options
CryptoPrice CLI supports the following options:

-h, --help: Display help information.
-v, --version: Display the current version of CryptoPrice CLI.



