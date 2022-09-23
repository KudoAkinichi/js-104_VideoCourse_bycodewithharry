https://www.codewithharry.com/videos/web-development-in-hindi-69/


Backend Tutorial: npm: The Node Package Manager Tutorial | Web Development Tutorials #69
In this tutorial, we are going to learn about what NPM is, how to install and use it in the backend. NPM is basically a package manager for Node.Js packages or modules. The NPM program is installed on your computer when you install Node.Js.

We will make a new file as tut69.js and write the following code to get started-

console.log("This is tutorial 69")
To know the version of NPM and Node, we can write npm --version and node --version respectively on the terminal. We get the output as follows-




NPM helps us to manage the packages in NodeJs. To understand this, we will make a new directory as tut69. Till now, we have only one file inside this directory i.e., tut69.js. But as soon as we write npm init on the terminal, it asks several questions like the package name, version, description, entry point, keyword, author, etc. When we execute this, there is a new file called package.json inside the tut69 directory. The file looks as follows-



NPM init has initialized this folder in terms of a node package. Now when we install any other dependency, it automatically gets added to this package. For example, if we write npm install slugify, the package.json file will automatically get updated as follows-




In the same way, we can install or uninstall any of the packages from the directory. Besides all these things, we also get another folder called node.modules. It is a folder containing all the modules related to our project. If by mistake this folder gets deleted, we can recover it back by again installing npm by writing npm install.

If we want to install any specific version of the dependency, we can easily do that. For example, if want to install version 1.3.5 of slugify, we have to write as npm install slugify@1.3.5. As soon as write this, the version gets updated as follows-



Let us now see what dev dependencies are. There are times when we want to install the packages only for development purposes, not for production purposes. In that case, dev dependencies are useful. The best example of this is nodemon. It gives us the server which automatically gets restart every time. 

To install this, we have to write-

npm intall nodemon --save-dev

After executing this, we get the output as follows-



So these are some basic concepts about NPM and I hope you must have understood it well. We will use it in the future also to install several packages. Till then stay with the tutorials.