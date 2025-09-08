# 🚀 WebdriverIO Android Tests

![Node.js](https://img.shields.io/badge/Node.js-22+-green)
![npm](https://img.shields.io/badge/npm-10+-blue)
![BrowserStack](https://img.shields.io/badge/BrowserStack-Required-red)
![Allure](https://img.shields.io/badge/Allure-Report-blue)

## 📝 Summary of Repo

This repository contains WebdriverIO test automation for an Android application using BrowserStack.
It includes tests for multiple devices (Pixel 6 and Samsung Galaxy S24) with Allure reporting.

## 📁 Project Structure

```bash
project-root/
├── 📁 config/ # WebdriverIO device configurations
├── 📁 data/ # Test data in JSON format
├── 📁 test/
│ ├── 📁 specs/ # Test specifications
│ └── 📁 pages/ # Page Object files
├── 📄 package.json # Project dependencies and scripts
├── 📄 README.md # Project documentation

```

## ⚙️ Requirements

- Node.js >= 18

- npm or yarn

- BrowserStack account with credentials:

  - `BROWSERSTACK_USERNAME`
  - `BROWSERSTACK_ACCESS_KEY`

- APK of the application to test:
  - `BROWSERSTACK_APP_ID`

## 📥 Steps to Install

### 1. Clone the repository:

```
git clone https://github.com/OlyaSkr/browserstack-wdio-tests.git
cd browserstack-wdio-tests
```

### 2. Install dependencies:

```
npm install
```

### 3. Ensure environment variables are set:

```
export BROWSERSTACK_USERNAME=<your_username>
export BROWSERSTACK_ACCESS_KEY=<your_access_key>
export BROWSERSTACK_APP_ID=<your_app_id>
```

## ▶️ Steps to Launch

- ### 🟢 Run tests on Pixel 6:

```
npm run wdio:pixel6
```

- ### 🟣 Run tests on Samsung Galaxy S24:

```
npm run wdio:galaxys24
```

- ### 🔄 Run tests on both devices sequentially:

```
npm run wdio:all
```

- ### 📄 Run a single test file on Pixel 6:

```
npm run wdio:file:pixel6
```

- ### 📄 Run a single test file on Galaxy S24:

```
npm run wdio:file:galaxys2
```

## 📊 Steps to Create the Report

### 1. Clear the previous results

```
npm run clean:allure
```

### 2. Generate and open Allure report

```
 allure:report:generate
 allure:report:open
```
