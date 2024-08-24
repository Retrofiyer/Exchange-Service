<div>
    <h1>User Registration Microservice</h1>
</div>

## About The Project

The Exchange Service microservice is designed to handle currency exchange operations within a financial application. It provides real-time currency conversion between different currencies, ensuring accurate and up-to-date exchange rates. This service is essential for any application that requires currency conversion, enabling users to perform transactions in their preferred currency seamlessly.

## Table of Contents

<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#running-the-service">Running the service</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
 </ol>

## Overview

The Exchange Service is a RESTful API built using Spring Boot. It offers endpoints for converting amounts between different currencies, retrieving current exchange rates, and historical rate data.

## Features

<div>
  <ul>
      <li> <b>Currency Conversion:</b> Convert amounts between various currencies in real-time.</li> 
      <li> <b>Exchange Rate Retrieval:</b> Fetch the latest exchange rates for supported currencies.</li>
      <li> <b>Historical Data:</b> Access past exchange rates for trend analysis.</li>
  </ul>
</div>


## Built With

[![Node.js][nodejs.com]][nodejs-url]
[![Swagger][swagger.com]][swagger-url]
[![Docker][docker.com]][docker-url]

<!-- GETTING STARTED -->
## Getting Started

## Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

- **Node.js 20 or higher** - [Download Node](https://nodejs.org/en/download/package-manager)

If you don't have any of these tools installed, follow the provided links to install them.


## Installation

1.- Clone the repository
   ```sh
   git clone https://github.com/Retrofiyer/Exchange-Service.git
   cd Exchange-Service
   ```
2.- Build project using node.js
 ```sh
   npm install
   ```

## Configuration

The configuration for the Exchange Service is located in `./.env`. Below is an example configuration:

 ```sh
    EXCHANGE_RATE_API_KEY=Your-api-exchange
   ```

## Running the service

  ```sh
    npm start
   ```

## Contributing

I would like you to contribute to this project. Whether it's fixing a bug, adding a new feature or improving the documentation, your help is always welcome. Please email me at `sebitas5225@gmail.com` with all the details for improvement.

<!-- LINKS & IMAGES -->

[docker.com]: https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[nodejs.com]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/
[swagger.com]: https://img.shields.io/badge/Swagger-black?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/