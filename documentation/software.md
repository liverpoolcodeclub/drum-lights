# Software

This repository includes source files for all the scripts that run on our microbits, as well as a selection of scripts that will come in useful when building and debugging your kit.

---

The online [makecode.microbit.org](https://makecode.microbit.org) editor is a fun way to throw together quick microbit scripts with no programming experience. But it lacks version control, and manually downloading the code onto connected microbits is a pain.

The MakeCode editor is actually just the _visual_ part of a wider toolkit, developed by Microsoft, called "PXT" (the "Programming eXperience Toolkit").

Using the PXT command line tool, we can develop and deploy code to microbits in a way that will be more familiar to people who write software for a living.

---

## Installing Node.js

PXT requires Node.js. I’d recommend you [install it via your usual package manager](https://nodejs.org/en/download/package-manager/), but if you don’t use a package manager, then you can also [download and install Node.js directly](https://nodejs.org/en/download/).

## Installing NPX

`npx` is the Node equivalent of Ruby’s `bundle exec [blah]` or Python’s `virtualenv`.

We will use `npx` to find and run the `pxt` executable from inside our project’s `node_modules` directory (meaning we don’t have to install `pxt` globally – yay!).

`npx` comes by default with Node.js 5 and greater. But this line will check it’s available, and if it isn’t, install it for you:

    npx -v || npm install --global npx

## Installing PXT

PXT is listed in our `package.json`, so you can install it with:

    npm install

Now you’re ready to start working on your microbit projects!

---

## Deploying an existing project to all connected microbits

Go into the individual project directory, eg:

    cd ./acceleration-radio-broadcaster

Then edit your files (`main.ts` is a good place to start) and when you’re ready to deploy:

    npx pxt

The `pxt` command, when called with no arguments, works out which project you’re currently looking at, compiles it, and deploys it to all connected microbits.

## Installing a third-party PXT module into an existing project

Sometimes you need to use code that isn’t part of the microbit’s standard library.

In the visual MakeCode editor, you would use the “Add Package…” option to find and install third-party modules.

The command line equivalent is to run:

    npx pxt install <github-user>/<github-repo>

So, for example, to install the [Neopixel library](https://github.com/microsoft/pxt-neopixel):

    npx pxt install microsoft/pxt-neopixel

The dependency will be downloaded, and recorded in the `dependencies` section of your project’s `pxt.json` file (so future users can just run `pxt install` to install it, along with all the other modules your project might require).

## Creating a new project

From the root level, create a new directory to hold your project:

    mkdir my-new-project

Go into the new directory, and let `pxt` set up all the project files for you:

    cd my-new-project
    npx pxt init

That’s it!

---

## Useful links:

* https://makecode.com/cli
* https://www.hackster.io/pxt/blinking-the-micro-bit-using-javascript-2df45f
* https://makecode.microbit.org/reference

