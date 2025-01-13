# Prompting Introduction

We'll start learning the basics of text-to-image generation (or txt2img for short) by reproducing the Twai cover art image from the ["Welcome"](../welcome) page:

![](/welcome/twi-forest.jpg){.figure}

Before prompting, set the image's width and height to 1344x768 for now. We'll discuss resolutions and upscaling a bit later.

## First Prompt

There are two prompts called "Prompt" and "Negative prompt". The "Prompt" defines what you _want_ to see in the image, and the "Negative prompt" defines what you _don't want_ to see. It's as simple as that.

You can describe the image with simple keywords similar to tags on Derpibooru and separate them by commas. For example, let's write this into the positive "Prompt":

```prompt
twilight sparkle, forest, sitting, smiling
```

::: info Terminology

We'll call the part of the text in the prompt delimited by punctuation a "**keyword**" or a "**tag**". For example, `forest` is a keyword, and `twilight sparkle` is also one single keyword. Several words still count as one keyword if they are closely related to each other.

Keywords are highlighted with colors in prompt examples for convenience.

:::

Now, if you click on the big orange "Generate" button, you'll get your first image generated.

![](/prompting/introduction/iteration-1.png){.figure .width75}

This is what I got generated, but your output will definitely be different from this because the generation process is randomized to make AI produce different images on every click of the "Generate" button. This way you get some variety.

This image is nowhere near the quality of the final image, and it even has two alicorn Twilight Sparkles on it. However, it's a good start, so let's fix it by iterating on the prompt!

::: info Terminology

"**Iterating**" is a common term among programmers, and it means repeating some actions (like changing the prompt) in a loop again and again until you stop at the result, that you consider good enough.

:::

## Composition

Let's lets fix the composition by adding some more details to the prompt.

```prompt
my little pony, friendship is magic, pony, mare, unicorn, female, equine, solo, // [!code ++]
  // [!code ++]
twilight sparkle, dense forest, stream, grass, sitting, fisheye lens, smiling, leaves // [!code ++]
twilight sparkle, forest, sitting, smiling // [!code --]
```

::: tip

We'll use the `+/-` notation to display the difference between the old and the new prompts.

```
deleted line // [!code --]
added line // [!code ++]
```

:::

You can add empty lines to your prompt to visually separate groups of tags. For example, the first line of keywords `my little pony, ... solo` is something that you'll always have in all of your prompts. These tags prevent ZoinksNoob from generating anime, alicorn, human and double Twilight.

Let's also add these tags to the "Negative prompt":

```prompt
humanoid, anthro,

underhoof
```

Negating `humanoid` and `anthro` is common to enforce a feral pony. Negating the `underhoof` tag makes the AI generate a pose where Twilight's bottoms of the hoves touch the ground, and thus should not be visible.

Here is the new output.

![](/prompting/introduction/iteration-2.png){.figure .width75}

Well, AI completely ignored the `solo` tag 🥹. This sucks, but you should be prepared to the model not following your prompt very closely. One of the ways to fight with that is to increase the weight of the `solo` tag.
