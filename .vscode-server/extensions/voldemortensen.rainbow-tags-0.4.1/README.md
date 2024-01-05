# Rainbow Tags

Inteligently colors all tag pairs in your file with a smart denylist containing meta, self-closing and non-paired tags - also functions with custom tags!

### Example - Text color mode

![Example](https://gitlab.com/voldemortensen/rainbow-tags/-/raw/main/example_color.png)

### Example - Background color mode

![Example](https://gitlab.com/voldemortensen/rainbow-tags/-/raw/main/example_bgcolor.png)

### Example - Border color mode

![Example](https://gitlab.com/voldemortensen/rainbow-tags/-/raw/main/example_border.png)

## Configuration

### Tag colors - `rainbowTags.colors`

A list of color-string determining your chosen colors for the tags - supports alpha channel and can be of any length (depth).

Example:

```javascript
{
  "rainbowTags.colors": ["#d26", "red", "rgba(100, 200, 100, 0.5)"]
}
```

### Coloring style - `rainbowTags.hightlightType`

Determines the chosen style for the hightlighting of the tags.

Allowed values: `color`, `background-color` and `border`

Example:

```javascript
{
  "rainbowTags.hightlightType": "color"
}
```

### Switch for unsupported languages - `rainbowTags.allowEverywhere`

Allows the extension to hightlight any tag-like structure in any file at all times - can be useful for some unsual file-editing or just outright obnoxious when working with something like TypeScript types.

By default set to `false`.

Allowed values: `true` or `false`

Example:

```javascript
{
  "rainbowTags.allowEverywhere": true
}
```

### Supported languages - `rainbowTags.supportedLanguages`

A list of language IDs affected by this extension.

Example:

```javascript
{
  "rainbowTags.supportedLanguages": ["html", "xml", "vue"]
}
```

### Excluded tags - `rainbowTags.denylistTags`

A list of tags excluded from coloring.

Example:

```javascript
{
  "rainbowTags.denylistTags": ["html", "head", "body"]
}
```

## Credits

Authors:

- [Garth Mortensen](https://gitlab.com/voldemortensen/)

Contributors:

- [Elvanos (GitHub)](https://github.com/Elvanos/) / [Elvanos (GitLab)](https://gitlab.com/Elvanos)
- [Andr3wRiv3rs](https://github.com/Andr3wRiv3rs)
- [Mathieu Galle](https://gitlab.com/mathieugalle)
