# Keyword Weight

You can increase the weight or "importance" of the keyword by enclosing it with parentheses and adding a coefficient to it. The default coefficient is `1.0`. The recommended range is between `0.7` and `1.3`. Values out of this range may distort the image and lead to artifacts.

Let's set the weight `1.2` for our `solo` tag:

```prompt
my little pony, friendship is magic, pony, mare, unicorn, female, equine, solo, // [!code --]
my little pony, friendship is magic, pony, mare, unicorn, female, equine, (solo:1.2), // [!code ++]

twilight sparkle, dense forest, stream, grass, sitting, fisheye lens, smiling, leaves
```

Finally, we get just one Twilight instead of two:

![](/prompting/keyword-weight/iteration-1.png){.figure .width75}

You can also tweak the weight by clicking on the word or selecting several, then pressing `Ctrl + ↑` or `Ctrl + ↓`.

## Changing Emphasis

You can use weights to get fine control over the "emphasis" of an object or style. For example, let's increase the `fisheye lens` effect and forest density:

```prompt
my little pony, friendship is magic, pony, mare, unicorn, female, equine, (solo:1.2),

twilight sparkle, dense forest, stream, grass, sitting, fisheye lens, smiling, leaves // [!code --]
twilight sparkle, (dense forest:1.2), stream, grass, sitting, (fisheye lens:1.3), smiling, leaves
```

Now we get this:

![](/prompting/keyword-weight/iteration-2.png){.figure .width75}

We get a stronger `fisheye lens` effect and a bit more trees on the image.

If you were to use `(dense forest:0.7)`, you'd get the opposite - less trees:

![](/prompting/keyword-weight/reduced-weight.png){.figure .width75}

Let's keep `(dense forest:1.2)`, since this is what was used in the target Twai cover art image.

## Syntax Sugar

You can control weights using another notation, that is equivalent.

Wrap your keyword with multiple parentheses to increase its weight:

| Syntax Sugar    | Equivalent      |
| --------------- | --------------- |
| `(keyword)`     | `(keyword:1.1)` |
| `((keyword))`   | `(keyword:1.2)` |
| `(((keyword)))` | `(keyword:1.3)` |

Wrap your keyword with multiple square brackets to decrease its weight:

| Syntax Sugar    | Equivalent      |
| --------------- | --------------- |
| `[keyword]`     | `(keyword:0.9)` |
| `[[keyword]]`   | `(keyword:0.8)` |
| `[[[keyword]]]` | `(keyword:0.7)` |

These notations are called ["syntax sugar"](https://en.wikipedia.org/wiki/Syntactic_sugar) because they don't give you new powers, they only give you another way of doing what you already can.

Explicit coefficients are easier to use since you can tweak them using the `Ctrl + Arrow` shortcuts. However, you may still find nested parens/brackets syntax in other people's prompts, so be aware of it.
