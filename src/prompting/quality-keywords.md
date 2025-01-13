## Quality Keywords

AI models are trained on a big variety of images ranging from masterpieces to low quality amateur drawings. Therefore, models learn both good and bad styles. Unless we tell the AI model to generate good images, it'll produce mediocre results.

We can ask ZoinksNoob to generate high quality art with these tags:

```prompt
masterpiece, best quality, absurd res, hi res, detailed background, detailed, shaded, digital painting, // [!code ++]

my little pony, friendship is magic, pony, mare, unicorn, female, equine, solo,

twilight sparkle, dense forest, stream, grass, sitting, fisheye lens, smiling, leaves
```

You can also use the "Negative Prompt" to tell AI what to not generate. Let's add some "bad" quality tags there too:

```prompt
worst quality, low quality, lowres, // [!code ++]

humanoid, anthro,

underhoof
```

Now let's see what we get with these prompts:

![](/prompting/quality-keywords/iteration-1.png){.figure .width75}

Looks much better, than the previous iteration.

::: details Previous iteration reminder

![](/prompting/keyword-weight/iteration-2.png){.figure .width75}

:::
