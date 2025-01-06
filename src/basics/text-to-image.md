# Text to Image

Once we have the [required software](./software) installed we can finally start creating our AI pony images.

In this chapter, you'll learn the basics of text-to-image generation (or txt2img for short) by reproducing the Twai Brand pony image:

![](/twai-brand.png){.figure .width50}

## Meet Forge

Open <i class="stability-matrix inline-logo"></i> [StabilityMatrix](./software#stability-matrix) if it's not running already.

::: tip

It's recommended to create a Desktop shortcut for `StabilityMatrix.exe`, or pin it to your task bar for convenience.

:::

When you open StabilityMatrix it shows you the "Packages" page, where you can see your installed web UIs. There should be only "Stable Diffusion WebUI Forge" there if you followed the [Software](./software#forge) installation guide:

![](/basics/text-to-image/sm-forge-package.png){.figure .width75}

Click on the big blue "Launch" button there and wait for Forge to initialize. When you do this for the first time ever, Forge will download a bunch of assets required for its functioning. It may take a minute or two, but next time you open it, it'll launch faster, although still far from instant 😢.

An average startup time for Forge is about half a minute depending on the extensions and plugins you have installed for it (we'll discuss them later in the guide). However, you only need to do this once, and you should keep it running while you are working on your AI art.

When Forge finishes launching, your default web browser will automatically open a page like this:

![](/basics/text-to-image/forge-ui.png){.figure}

If a page doesn't appear make sure there are no `error`s in Forge's logs in StabilityMatrix (you can use `Ctrl+F` to search). If you see this line in the logs, then Forge should be up and running:

```
Running on local URL:  http://127.0.0.1:7860
```

You can force-open the web page by clicking on the button "Open Web UI" in StabilityMatrix or by pasting http://127.0.0.1:7860 into your browser's address bar.

![](/basics/text-to-image/sm-open-web-ui.png){.figure .width75}

## Initial Model Config

Go to Forge web page and make sure the "Checkpoint" is set to `sd\ponyDiffusionV6XL_v6StartWithThisOne.safetensors`. It should be already selected by default, because it's the only AI model you have if you followed the [Software](./software) installation guide.

Set "VAE / Text Encoder" to `sdxl_vae.safetensors`. If you don't see it in the dropdown list, then you [didn't download it](./software#pony-diffusion-v6-xl), make sure you import this file in StabilityMatrix.

The value of "Clip skip" must be set to 2 according to [Pony Diffusion documentation][pd-docs]. Note that different AI models may require different values of "Clip skip". You should always check the model's documentation on Civitai (this is where we got Pony Diffusion from) or other resource where it was downloaded from. If the model's docs don't mention anything about "Clip skip", then you should keep it at 1.

::: danger IMPORTANT

Configuring proper "Clip skip" is super important! If it's misconfigured, you may get bad image quality or even complete garbage results!

:::

We'll explain what exactly "Clip skip" does in detail later in the guide. For now, you should have the inputs at the top configured as on the screenshot below.

![](/basics/text-to-image/forge-pdxl-config.png){.figure}

::: details Why don't we select the `xl` button if we are using SDXL?

The buttons `sd`, `xl`, `flux`, `all` only change the configuration parameters visible to you and their default values. For some reason, `xl` doesn't give you a "Clip skip" regulator. Anyhow, selecting `xl` isn't required for SDXL models, since it only slightly changes the UI appearance while removing the important "Clip skip" config.

:::

---

## Scores ceremony

Now, let's start writing the prompt for our Twilight Sparkle image into the text input at the top called just "Prompt" (we'll leave the "Negative prompt" empty for now).

According to [Pony Diffusion docs][pd-docs], you need to paste this line at the start of the prompt to get images of top quality:

```prompt
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up
```

The reason why it's required is [complicated](https://civitai.com/articles/4248/what-is-score9-and-how-to-use-it-in-pony-diffusion), and the TLDR is that it's due to a bug found during Pony Diffusion V6 XL training, at which point it was too late to fix it, since it would be too expensive to restart the training.

So, anyway, just keep in mind that all that string of `score_...` must be at the beginning of every prompt for Pony Diffusion. You may just copy and paste it to Forge, and then write everything else on a separate line to visually separate that dumb ceremonial line of `score_...` at the top.

::: tip

Note that Pony Diffusion V7 is going to fix this mistake, thus it's just temporary minor inconvenience. There are some alternative ways to fight it, but let's just copy the `score_...` into the prompt for now.

:::

When you start trying other AI models, you won't need the `score_...` string for them. It is only specific to Pony Diffusion v6 XL. Using that string for other models would only garble their results.

## Source and Rating

Now, here is the time creativity comes into play, and we start describing the desired image to AI.

PD can generate not only pony images, but anime, furry and other cartoon characters. You can add any of the following keywords to your prompt to specify which kind of character you want: `source_pony`, `source_anime`, `source_furry`, `source_cartoon`.

::: info Terminology

We'll call the part of the text in the prompt delimited by punctuation a "**keyword**" or a "**tag**". For example, `source_pony` is a keyword, `clear sky` is a keyword and `blue mane` is also one single keyword. Several words are still counted as a keyword if they are closely related to each other.

Keywords are highlighted with colors in prompt examples for convenience.

:::

PD can generate not only SFW but also NSFW images, and this can be controlled with the keywords `rating_safe`, `rating_questionable` or `rating_explicit`.

So, let's add `source_pony` and `rating_safe` to our prompt to ask for an SFW pony image:

```prompt
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up,

source_pony, rating_safe // [!code ++]
```

Now, if you click on the big orange "Generate" button, you'll get your first ever SFW AI pony image generated 😌.

![](/basics/text-to-image/first-ai-image.png){.figure .width30}

This is what I got generated, but your output will definitely be different from this because there is some randomness added to the generation process to make AI produce different images on ever click of the "Generate" button to get some variety. We'll fight with that, but for now we aren't even close to Twilight Sparkle.

## Be Specific

Let's add some more details to our prompt. We'll describe the image with simple fact keywords similar to tags on Derpibooru:

```prompt
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up,

source_pony, rating_safe,

twilight sparkle, unicorn, female, curious, looking at you, simple background, white background, solo, bust, cute, teeth, grin, smiling, raised eyebrow, front view,  g4, detailed, beautiful // [!code ++]
```

The output for this prompt will be similar to this:

![](/basics/text-to-image/first-twi-ai-image.png){.figure .width30}

Usually, saying just `twilight sparkle` is enough for AI to understand, but keywords like `female`, `unicorn` are recommended, because AI can generate a male or alicorn version of Twilight, and we don't want that.

If we weren't to specify `female`, AI would still likely generate a female Twilight, because very few images in PD's dataset represented her as a male.

Removing the keyword `source_pony` now that we have `twilight sparkle` would also likely not influence that much, since no other fandoms (e.g. anime, furry) have popular characters named Twilight Sparkle. Thus, AI wouldn't confuse her for something other than her MLP origin.

`twilight sparkle` is a **powerful** keyword! It is powerful because it describes an important composition detail of the image, and it's very specific. Therefore, adding/removing it will cause substantial changes to the image. In contrast, weaker tags like `curious`, `looking at you` will only influence small details.

Usually, the process of building a prompt begins with the most powerful keywords, that create the overall composition of the scene, and then you experiment with different weaker keywords to improve the details.

<!--
final generation result depends on more factors than just ui parameters. It can depend on: GPU model, obscure A1111 settings (optimizations -> cross attention optimization and Stable Diffusion -> random number generator source are usual culprits), torch version, A1111 version and who knows what else.
-->

[pd-docs]: https://civitai.com/models/257749/pony-diffusion-v6-xl
