# Kitchen

Chopp Kitchen theme for [Ghost](http://github.com/tryghost/ghost/).

## Documentation
http://themes.ghost.org/docs/getting-started

## Development
- [setup a Ghost instance](https://github.com/TryGhost/Ghost) on your local machine
- `$ cd content/themes`
- `$ git submodule add git@github.com:choppvn/kitchen.git kitchen`
- `$ grunt dev`

## Build & Release
- run `npm version minor` to update the package version number
- `$ npm run build` in this theme folder
- upload `packaged/kitchen.zip` via admin panel at https://kitchen.chopp.vn/admin
