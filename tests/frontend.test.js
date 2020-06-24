// const puppeteer = require('puppeteer');
// const pageUrl = 'http://localhost:3030/';

// let page;
// let browser;
// const width = 1280;
// const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     // headless: false,
//     // slowMo: 100,
//     // args: [`--window-size=${width}, ${height}`]
//     args: ['--no-sandbox', '--disable-setuid-sandbox']
//   });
//   page = await browser.newPage();
//   await page.setViewport({width, height});
  
// });



// describe('Test server connect to root url', () => {
//   test('Checks that browser connects to server', async () => {
//     const res = await page.goto(pageUrl, {waitUntil: 'networkidle2'});
//     const title = await page.evaluate(()=> document.querySelector('title').textContent);
//     console.log(title);
//     expect(title).toEqual('Booking Module');

//   });
// });
// describe('Test GET request for data(/booking/1)', () => {
//   test('Checks that browser connects to server', async () => {
//     const res = await page.goto(pageUrl+'booking/1', {waitUntil: 'networkidle2'});
//     const resBody = await res.text();
//     const resBodyObj = JSON.parse(resBody);
//     expect(resBodyObj[0].id).toEqual(1);

//   });
// });

import 'jsdom-global/register';
import React from 'react';
import {configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Foo from './Foo';
configure({ adapter: new Adapter() })

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});

// afterAll(async () => {
//   await browser.close();
// });