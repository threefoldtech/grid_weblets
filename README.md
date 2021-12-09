# Grid Weblets
![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-informational?style=flat-square)

A svelte[^1] project for creating web components - which are reusable custom elements with their functionality encapsulated away from the rest of the code — that interact with TF rid 3 and could be utilized from other web apps.

it solve such problem where you had to write complex HTML (and associated style and script) to render custom UI controls (eg, to deploy some workload in the grid 3), and how using them multiple times in different projects can be a miss if you are not careful.

[^1]: in case you wonder what is [svelte](https://github.com/sveltejs/svelte), It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM. if your are interested to learn more about Sevlte and how to get started with it you can check this [tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)

## The Contents
- [Get Started](get-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Run The Playground](run-the-playground)
- [Elements](elements)
    - [K8S](#kubernetes)
    - [VM](#virtual-machine)
    - [Caprover](#caprover)
    - [Deployed List](#deployed-list)
- [Add New Weblet](#add-new-weblet)


## Get Started
In order to work with this project you need to have Node.js installed. It's recommended that you use the Active long-term support (LTS) version 16. Node includes npm (the node package manager), and npx (the node package runner). Note that it is recommended to use the Yarn package manager in place of npm, we'll assume you are using yarn in this Docs.

### Prerequisites
- Node.js >= 14
- Yarn
- development tools: gcc g++ make libtool
  
if your are using Debian based os you can follow the below instruction to install the prerequisites.

```sh
# install Node.js 16 (Active LTS)
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
# install Yarn
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
# this would be required for building some optional dependencies 
sudo apt-get install libtool gcc g++ make
```

Also see the following for more information about installing other versions of Node.js :
  [install Node.js on Debian and Ubuntu based distributions](https://github.com/nodesource/distributions/blob/master/README.md)


### installation
- **Clone the repo**
  ```
  git clone https://github.com/threefoldtech/grid_weblets.git
  ```
- **Install the dependencies**
  
  Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. TO avoid any issues with package managers other than npm remove package-lock.json.
  ```sh
  cd grid_weblets/
  # we gonna use yarn so it's recommended to remove npm lock file or rename it
  rm package-lock.json
  # install project dependencies
  yarn install
  cd easy-docs/ && yarn install
  cd ..
  ```
- **Compile**
  ```sh
  yarn build:app
  ```

  *JavaScript heap out of memory error:*

    In some cases you could an error like this: `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`

    As Rollup needs to keep all module information in memory simultaneously to be able to analyze relevant side effects for tree-shaking, it is possible that bundling large projects reaches Node's memory limit. If this happens, it can help to increase this limit by running Rollup via

     ```sh
     export NODE_OPTIONS="--max-old-space-size=2048" # or even higher size 8192
     yarn build:app
     ```
    Increasing --max-old-space-size as needed. Note that this number can safely surpass your available physical memory. In that case, Node will start paging memory to disk as needed.
    
### Run The Playground
  Finally to run the playground, you need to serve the bundle created in docs directory
    ```sh
    npx serve docs
    ```
    you could then access open this link in your browser http://localhost:3000



## Elements
### Kubernetes
```html
<tf-kubernetes></tf-kubernetes>
```
![image](https://user-images.githubusercontent.com/31689104/140759704-983816c3-2a01-4da8-90bb-fee3f9928f7e.png)

### Virtual Machine
```html
<tf-vm></tf-vm>
```
![image](https://user-images.githubusercontent.com/31689104/140759788-c9403c04-2d83-493f-9124-2af191b82a4a.png)

### Caprover
```html
<tf-caprover></tf-caprover>
```
![image](https://user-images.githubusercontent.com/31689104/140759852-e056e5bb-bcc7-4096-9b7c-7110afc05284.png)

### Caprover
```html
<tf-deployedlist></tf-deployedlist> <!-- to show all tabs -->
<!-- Accept tab attribute      tab =  'vm' | 'k8s' | 'caprover' -->
<tf-deployedlist tab="k8s"></tf-deployedlist>
<tf-deployedlist tab="vm"></tf-deployedlist>
<tf-deployedlist tab="caprover"></tf-deployedlist>
```
![image](https://user-images.githubusercontent.com/31689104/140760029-634e5e14-ac83-4caf-ad3e-75c66edbdf18.png)
![image](https://user-images.githubusercontent.com/31689104/140760540-a0475e07-14d7-4daa-a728-5babf32bc8d4.png)


## Add New Weblet
We are going to add new weblet called `demo` .

1. Add new folder called **demo** at `src/elements/demo` .
2. Add **Demo.wc.svelte** at `src/elements/demo/Demo.wc.svelte` .
3. Add **index.ts** at `src/elements/demo/index.ts` .

```ts
// index.ts

// import *demo* component
import Demo from './Demo.wc.svelte';

// import *defineElement* library
import defineElement from '../../utils/defineElement';


// Register new wc
defineElement('demo', Demo); // tf-demo
```

```ts
// Demo.wc.svelte

/* Write whatever svelte code u need here */
```
> Find More About svelte [here](https://svelte.dev/docs) .


4. Developing weblet by importing `Demo.wc.svelte` into `App.svelte`.

```html
<!-- App.svelte -->
<script lang="ts">
    import Demo from './elements/demo/Demo.wc.svelte';
</script>

<Demo />
```
```sh
yarn dev
```

5. Build `Demo.wc.svelte`.
```sh
yarn build
```



## playground

- `cd easy-docs`
- `yarn build`  will output in the docs directory
- serve content in docs dir for path `/grid_weblets` so `play.grid.tf/grid_weblets`


## Test a weblet

### Create

- Add new folder for your weblet as `src/elements/demo`
- Import `Demo.wc` svelte into `App.svelte`
- Add your weblet on elements list in `easy-docs/src/App.vue`
- Append a weblet in `easy-docs/src/views/Editor.vue` by appending the weblets list

### Build

- Make sure to install dependencies in both `/` and `/easy-docs` by running `yarn`
- `yarn serve:app`

### Use

- In profile Tab, Create or Load your profile
- Begin to Deploy your weblet
- List the info to access weblet
