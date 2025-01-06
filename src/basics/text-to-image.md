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

### Launch Ceremony

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

The value of "Clip skip" must be set to 2 according to [Pony Diffusion documentation][pd-docs]. Note that different AI models may require different values of "Clip skip". You should always check the model's documentation on Civitai (this is where we got Pony Diffusion from) or other resource where it was downloaded from. If it doesn't mention anything about "Clip skip", then you should keep it set to 1.

::: danger IMPORTANT

Configuring proper "Clip skip" is super important! If it's misconfigured, you may get garbage image results! It should be the first thing to check if you get bad image quality.

:::

We'll explain what "Clip skip" is exactly in detail later in the guide. For now, you should have the inputs at the top configured as on the screenshot below.

![](/basics/text-to-image/forge-pdxl-config.png){.figure}

::: details Why don't we select the `xl` button if we are using SDXL?

The buttons `sd`, `xl`, `flux`, `all` only change the configuration parameters visible to you and their default values. For some reason, `xl` doesn't give you a "Clip skip" regulator. Anyhow, selecting `xl` isn't required for SDXL models, since it only slightly changes the UI appearance while removing the important "Clip skip" config.

:::

### Prompting

Now, let's try to see where we are already. Let's start writing the prompt for our Twilight Sparkle image into the prompt at the top called just "Prompt" (we'll leave the "Negative prompt" empty for now).

According to [Pony Diffusion docs][pd-docs], you need to paste this line at the start of the prompt to get images of top quality:

```
score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up
```

The reason why it's required is rather complicated, TLDR is that it's due to a bug found during Pony Diffusion V6 XL training, at which point it was too late to fix it, since it would be too expensive to restart the training.

[pd-docs]: https://civitai.com/models/257749/pony-diffusion-v6-xl
