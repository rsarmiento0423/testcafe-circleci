
# Sample TestCafe Project


**The purpose of this project is to demonstrate the capability of running TestCafe automated tests<br>
against CircleCI.**


## Web Application under Testing
URL: https://devexpress.github.io/testcafe/example/<br>


## Setup and Installation
1. Create a new directory:<br>
`mkdir <your directory>`


2. Execute from terminal to clone repository:<br>
`git clone git@github.com:rsarmiento0423/testcafe-circleci.git`


3. From the new directory, enter the following command to install TestCafe and its dependencies:<br>
`npm install`



## Running TestCafe tests from the terminal


- To execute tests to run against headless Chrome browser with HTML test report:<br>
`npm run test:chrome`


- To execute tests to run against headless Safari browser with HTML test report:<br>
`npm run test:safari`


- To execute tests to run against headless Firefox browser with HTML test report:<br>
`npm run test:firefox`


- To execute tests to run against headless emulated IPhone XIII with HTML test report:<br>
`test:chrome:mobile`


## View Test Results
- Enter from the terminal, enter the following command to view the test results:<br>
`open test-results/report.html`


**Developed by: Ray Sarmiento**<br>
**Last updated: 11/8/23**<br>
