# collaborative-text-editor

This is a repository for my second Node.js project: a real-time collaborative text editor. I have previously attempted to implement something similar in a LAMP project, but found great difficulty in doing so. However, Node (with some nice extensions) makes this a breeze.

It currently uses a simple `<textarea>` element that multiple users can update at once.

## Creating the Node.js project
I made a project directory, and changed into it:
```
mkdir -p Node.js/collaborative-text-editor
cd Node.js/collaborative-text-editor
```
I then generated a license file, a relevant .gitignore and a Contributor Covenenant:
```
npx license
npx gitignore node
npx covgen me@osamahahmad.com
```
Finally, I initialised a new [`npm`](https://www.npmjs.com/) package:
```
npm init
```

## Installing Node.js packages
I also used `npm` to install [`express`](https://www.npmjs.com/package/express) and [`socket.io`](https://www.npmjs.com/package/socket.io):
```
npm install express
npm install socket.io
```
`express` is the most popular Node web framework, and `socket.io` enables real-time bidirectional event-based communication.

I already have a global install of `pm2`, which I can use to start and reload this project.
