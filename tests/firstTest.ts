import { Selector } from 'testcafe';

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

//Selectors
const developerName = Selector("#developer-name");
const primaryMacOS = Selector("#macos");
const primaryWindows = Selector("#windows");
const primaryLinux = Selector("#linux");
const remoteTesting = Selector("#remote-testing");
const reuseJSCode = Selector("#reusing-js-code");
const bkgdParallelTesting = Selector("#background-parallel-testing");
const continuousIntegration = Selector("#continuous-integration-embedding");
const advancedTraffic = Selector("#traffic-markup-analysis");
const triedTestcafe = Selector("#tried-test-cafe");
const rateTestcafe = Selector('#slider');
const interfaceSelect = Selector("#preferred-interface");
const interfaceOption = interfaceSelect.find('option');
const commentsTextArea = Selector("#comments");
const message = Selector('#article-header');
const submitButton = Selector("#submit-button");

test("Mac OS test", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(primaryMacOS)
        .click(remoteTesting)
        .click(reuseJSCode)
        .click(bkgdParallelTesting)
        .click(continuousIntegration)
        .click(advancedTraffic)
        .click(triedTestcafe)
        .expect(rateTestcafe.exists).ok()
        .setTestSpeed(0.01)
        .drag(rateTestcafe,360,0,{offsetX:10, offsetY:10})
        .click(interfaceSelect)
        .click(interfaceOption.withText('JavaScript API'))
        .typeText(commentsTextArea, "This is a Mac OS test.", { paste: true })
        .click(submitButton)
        .expect(message.innerText).contains('Thank you');
});

test("Windows OS test", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(primaryWindows)
        .click(interfaceSelect)
        .click(interfaceOption.withText('Both'))        
        .click(submitButton)
        .expect(message.innerText).contains('Thank you');          
});

test("Linux OS test", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(primaryLinux)
        .click(interfaceSelect)
        .click(interfaceOption.withText('Command Line'))             
        .click(submitButton)
        .expect(message.innerText).contains('Thank you');          
});