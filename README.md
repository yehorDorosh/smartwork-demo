# smartwork-demo

For prod `npm run build`
For development `npm run dev`
For live server `npm run start`


## Task
You have HTML markup

`<div contenteditable="true"><del>deleted</del> accepted <ins>inserted</ins></div>`

Part 0 CSS styles

  a. add css styles to make "deleted" text red and "inserted" green

Part 1 Hide / Unhide `<del>` tags when editing

  a. When clicking inside the ContentEditable, words which are inside `<del>` tags are hidden

  b. When clicking back out of the ContentEditable redisplay the words inside the `<del>` tags

Part 2 Newly added words receive an `<ins>` tag

  a. When adding new words inside the ContentEditable, each new word should receive an `<ins>` tag. E.g. the input text "some new text" will convert to `<ins>`some`</ins>` `<ins>`new`</ins>` `<ins>`text`</ins>`

Part 3 A tag can only contain a single word (no whitespace allowed)

  a. When whitespace is introduced inside an `<ins>` tag, split the tag into two distinct `<ins>` tags. E.g `<ins>`test`</ins>` will become `<ins>`te st`</ins>` on edit and has to be converted to `<ins>`te`</ins>` `<ins>`st`</ins>`

  b. When adding a word in front of an `<ins>` tag, combine them as long there is no whitespace between them. E.g new`<ins>`test`</ins>` will become `<ins>`newtest`</ins>`

  c. When adding a word behind an `<ins>` tag, combine them as long there is no whitespace between them. E.g `<ins>`test`</ins>`new will become `<ins>`testnew`</ins>`