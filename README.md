# React Express Starter

Project template with React and Express. Ready to start writing components!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Node 6+
```

### Installing

1. Clone this repo

```
git clone https://github.com/romariolopezc/react-express-starter.git
```

2. Remove .git

```
rm -r .git/
```

3. Install dependencies

```
npm install
```

4. Run development server
```
npm run start:dev
```

5. Go to localhost:8080 and you should see `Hello World!!`

## Running the tests

For tests we use Jest.

To watch tests and files for changes.
```
npm run test:watch
```

To run tests with coverage.
```
npm run test
```

## Deployment

We can build this project into a html and js bundles. Use `npm run build` to get the bundles ready for production.

## Features

* Development Server with Hot Module Replacement and React Hot Loader
* Babel with transform class properties and transform object spread
* Eslint linter with Airbnb style guilde
* Easier Webpack configuration using a common config

## Authors

* **Romario Lopez** - *Initial work*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This template is a recopilation of several sources on how to setup react and express.
