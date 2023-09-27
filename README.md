# `WU-POC-Phase-3`

Template used - angular-seed



## Getting Started

To get you started you can simply clone the `wu-poc-phase-3` repository and install the dependencies:

### Prerequisites

You need git to clone the `wu-poc-phase-3` repository.

We also use a number of Node.js tools to initialize and test `wu-poc-phase-3`. You must have Node.js and its package manager (npm) installed.

### Clone `wu-poc-phase-3`

Clone the `wu-poc-phase-3` repository using git:

```
git clone https://github.com/aakashkumarr/wu-poc-phase-3
cd wu-poc-phase-3
```

If you just want to start a new project without the `wu-poc-phase-3` commit history then you can do:

```
git clone --depth=1 https://github.com/aakashkumarr/wu-poc-phase-3 <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/`][local-app-url].


## Directory Layout

```
wu-poc-phase-3/
  ├── app/                 (Application source code)
  │   ├── app.js            (Main app module)
  │   ├── home/         (Example component)
  │   │   ├── home.component.js
  │   │   ├── home.template.html
  |   |   ├── home.component.spec.js
  |   |   ├── home.module.js
  |   ├── layouts
  |   |   ├── layouts/navbar
  |   |   |   ├── navbar.component.js
  |   |   |   ├── navbar.template.html
  |   |   |   ├── navbar.module.js
  |   |   ├── layouts/sidenav
  |   |   |   ├── sidenav.component.js
  |   |   |   ├── sidenav.template.html
  |   |   |   ├── sidenav.module.js
  │   ├── settings/        (Another example component)
  |   |   ├── settings/search
  |   |   |   ├── settings/search/search-data
  |   |   |   |   ├── search-data.component.js
  |   |   |   |   ├── search-data.component.spec.js
  |   |   |   |   ├── search-data.template.html
  |   |   |   |   ├── search-data.module.js
  |   |   |   |   ├── search-data.service.js
  |   |   |   ├── search.component.js
  |   |   |   ├── search.template.html
  |   |   |   ├── search.component.spec.js
  |   |   |   ├── search.module.js
  │   │   ├── settings.component.js
  │   │   ├── settings.template.html
  │   │   ├── settings.component.spec.js
  │   │   ├── settings.module.js
  │   ├── auth/        (Another example component)
  │   │   ├── auth/login
  |   │   │   ├── login.component.js
  |   │   │   ├── login.template.html
  |   │   │   ├── login.component.spec.js
  |   │   │   ├── login.module.js
  │   │   ├── auth/signup
  |   │   │   ├── signup.component.js
  |   │   │   ├── signup.template.html
  |   │   │   ├── signup.component.spec.js
  |   │   │   ├── signup.module.js
  │   │   ├── auth.service.js
  │   ├── shared/           (Shared code optional)
  │   │   ├── directives/   (Reusable directives)
  │   │   ├── filters/      (Reusable filters)
  ├── assets/              (Static assets like images, fonts, etc.)
  │   ├── app.css          (Root CSS styles)
  ├── node_modules/        (Node.js dependencies - not versioned)
  ├── package.json         (Node.js configuration)
  ├── karma.conf.js        (Karma test runner configuration)
  ├── protractor.conf.js   (Protractor end-to-end test configuration)
  ├── e2e-tests/           (End-to-end test specifications)
  ├── .gitignore           (Git configuration to exclude certain files)
  ├── .jshintrc            (JSHint configuration)
  ├── .travis.yml          (Travis CI configuration)
  ├── appveyor.yml         (AppVeyor CI configuration)
  ├── README.md            (Project documentation)
  └── ...
```


## Testing

There are two kinds of tests in the `wu-poc-phase-3` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `wu-poc-phase-3` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have a `.spec.js` suffix (e.g.
  `view1.spec.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```
