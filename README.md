# React Redux Demo

<a href="https://snyk.io/test/github/gautamsatish/react_redux_demo?targetFile=package.json"><img src="https://snyk.io/test/github/gautamsatish/react_redux_demo/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/gautamsatish/react_redux_demo?targetFile=package.json" style="max-width:100%;"></a>

This is a basic hands-on exericse intended to familiarize users with the Redux in React apps.

To get started,
1. Clone the repo: git clone https://github.com/GautamSatish/react_redux_demo.git
2. Install the dependencies: npm install
3. Start the webpack dev server: npm run dev

This should launch your app at http://localhost:9000/

The app implements a simple counter with one button to increment and another to decrement the counter value. This is implemented using the React state. The exercise is to use Redux to accomplish the same.

What you need to do:
1. Complete the action creator function implementation in src/actions.js.
2. Complete the reducer function in src/reducers.js.
3. Create store and pass it to the Provider wrapper component in src/index.js.
4. Implement the mapStateToProps and mapDispatchToProps functions, update the App component and connect the wrapper component in src/App.jsx.

A sample solution is present on the branch ```sample_solution```.
