# Seed

Every time you click the "Generate" button you get a different image due to the randomness added to the generation process. The "random mode" is enabled when "Seed" is set to `-1`.

You can turn off that randomness by pressing the button ♻️ to reuse the seed from the last generation attempt:

![](/configurations/seed/seed-reuse.png){.figure}

After you press it, `-1` will be replaced with some other number. For example, in my case it's `1269646841`. In you case, it'll be something different.

Now when the seed is set to a non-`-1` number and you click the "Generate" button, you'll get the same image again. However, what's cool is that if you set the seed to `1269646841` you'll get the image from our last generation attempt in the [Quality Keywords chapter](../prompting/quality-keywords):

![](/prompting/quality-keywords/iteration-1.png){.figure .width75}

If you don't get the same image, then make sure you have the same parameters:

::: details Configurations screenshot

![](/configurations/seed/forge-screen.png){.figure}

:::

You can think of "seed" as a number that identifies the image "variant". There are billions of images AI could generate for the same prompt, and the seed identifies one of such variants.

## Preserving the Composition

Another cool feature of the seed is that if you change the prompt or other configuration parameters while keeping the same seed, your scenery won't change too much. This is because the seed is used as a "starting" point for the image generation algorithm, where major features of the image composition are built.

You can use this property of seed when looking for an image with "good composition". You can generate several images to find one with good scenery that you'd like to preserve, and then iterate with that seed to refine the details.

For example, let's use our seed value `1269646841` and add some ducks to the image by keeping the same seed and updating the "Prompt" like this:

```prompt
masterpiece, best quality, absurd res, hi res, detailed background, detailed, shaded, digital painting,

my little pony, friendship is magic, pony, mare, unicorn, looking at you, female, equine, (solo:1.2)

twilight sparkle, (dense forest:1.2), stream, grass, sitting, (fisheye lens:1.3), smiling, leaves, duckling // [!code ++]
twilight sparkle, (dense forest:1.2), stream, grass, sitting, (fisheye lens:1.3), smiling, leaves // [!code --]

```

The result is this:

![](/configurations/seed/duckling.png){.figure .width75}

Now there are some ducks swimming in the stream, but the general scenery stayed the same. There were some other details changed like twilight's facial expression and the stream's shape, but nothing too big.

This way, you can continue changing the prompt to tweak minor details like emotions, clothes or style while keeping the overall composition the same.

You could also force the same composition with "image to image" methods, but we'll talk about that later in the guide.

## Twai Cover Art Seed

The seed that was used when generating Twai cover art is `1076131592`. If we use this value we get the image below.

::: tip

Make sure to remove `duckling` from the prompt, otherwise you'd have ducks in the image 🐱.

:::

![](/configurations/seed/twai-cover-seed.png){.figure .width75}

Recall the cover art image we are targeting:

![](/welcome/twi-forest.jpg){.figure .width75}

Looks similar, but still not exactly the same. Thus, let's go to the next iteration to configure the sampling algorithm.
