# Emotional Reaction

[![CircleCI](https://circleci.com/gh/madeagency/emotional-reaction.svg?style=svg)](https://circleci.com/gh/madeagency/emotional-reaction)
[![Maintainability](https://api.codeclimate.com/v1/badges/39b5868c71acb83339af/maintainability)](https://codeclimate.com/repos/5b45b823c4372a023f006b1a/maintainability)

A Bleeding Edge React Universal Boilerplate for Power Users — with Emotion.
This is a fork of our other boilerplate, [Reactivity](https://github.com/madeagency/emotional-reaction.git).

## Features

You will find that this boilerplate covers all the expected areas such as SEO, Hot Reloading and all the other things typically covered in a boilerplate, check out our pull requests to see what's coming up.

Whats unique about this boilerplate however is:

- Universal Rendering with Code Splitting - *(thanks to [react-universal-component](https://github.com/faceyspacey/react-universal-component))*
- RXJS for action side effects. - *(thanks to [react-redux-epic](https://github.com/BerkeleyTrue/react-redux-epic))*
- PWA Ready.
- No scaffolding tools.
- No Automated service worker generation, you get to write your own. - *(thanks to [serviceworker-webpack-plugin](https://github.com/oliviertassinari/serviceworker-webpack-plugin))*
- Styled components - *(thanks to [emotion](https://github.com/emotion-js/emotion))*

## Getting Started

1. Clone this repo using `git clone --depth=1 https://github.com/madeagency/emotional-reaction.git`
2. Move to the appropriate directory: `cd emotional-reaction`.
3. Copy the `.sample.env` to `.env` and change any details as required.
4. Run `npm install` in order to install dependencies.
5. Run `npm run dev` for development mode or `npm run prod` for production mode and you will see the app running at `http://localhost:[PORT_SPECIFIED_IN_.ENV]`.

## Development suggestions

1. set `ENABLE_SW` to `false` to disable the service worker during development.
2. set `NODE_ENV` to `development` to enable hot reloading.

## Deployment

This will largely vary however heres a super simple overview.

1. Run `npm run build`
2. Run either `npm run start` or `node bin/server.prod.js` to start the application.

You could also run `start:prod` after step one to immediately launch the app after its been built.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Francois** - *Initial work* - [fjlaubscher](https://github.com/fjlaubscher)
* **Dawid** - *Reactivity* - [dawidvdh](https://github.com/dawidvdh)
* **Ross** - *Reactivity* - [rocbear](https://github.com/rocbear)

See also the list of [contributors](https://github.com/madeagency/emotional-reaction/graphs/contributors) who participated in this project.

License
-------

Emotional Reaction is © 2018 MADE Code PTY Ltd.
It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: LICENSE

Maintained by
----------------

[![madeagency](https://www.made.co.za/logo.png)](https://www.made.co.za?utm_source=github)

Emotional Reaction was created and is maintained MADE Code PTY Ltd.
The names and logos for MADE Code are trademarks of MADE Code PTY Ltd.

We love open source software. See our [Github Profile](https://github.com/madeagency) for more.

We're always looking for talented people who love programming. [Get in touch] with us.

[Get in touch]: https://www.madecode.co.za?utm_source=github
