# Initial Setup

Here we'll do some initialization of your work environment by launching and properly configuring it for [ZoinksNoob](./software#zoinksnoob).

## Launching Forge

Open ::stability-matrix:: [StabilityMatrix](./software#stability-matrix) if it's not running already.

::: tip

It's recommended to create a Desktop shortcut for `StabilityMatrix.exe`, or pin it to your task bar for convenience.

:::

When you open StabilityMatrix it shows you the "Packages" page, where you can see your installed web UIs. There should be only "Stable Diffusion WebUI Forge" there if you followed the [Software](./software#forge) installation guide:

![](/prerequisites/initial-setup/sm-forge-package.png){.figure .width75}

Click on the big blue "Launch" button there and wait for Forge to initialize. When you do this for the first time ever, Forge will download a bunch of assets required for its functioning. It may take a minute or two, but next time you open it, it'll launch faster, although still far from instant 😢.

An average startup time for Forge is about half a minute. However, you only need to do this once, and you should keep it running while you are working on your AI art.

When Forge finishes launching, your default web browser will automatically open a page like this:

![](/prerequisites/initial-setup/forge-ui.png){.figure}

If a page doesn't appear make sure there are no `error`s in Forge's logs in StabilityMatrix (you can use `Ctrl+F` to search). If you see this line in the logs, then Forge should be up and running:

```
Running on local URL:  http://127.0.0.1:7860
```

You can manually open the web page by clicking on the button "Open Web UI" in StabilityMatrix or by pasting http://127.0.0.1:7860 into your browser's address bar.

![](/prerequisites/initial-setup/sm-open-web-ui.png){.figure .width75}

## Model Configuration

Go to Forge web page and make sure the "Checkpoint" is set to `sd\zoinkscoobFurryNoobai_v10.safetensors`. It should be already selected by default, because it's the only AI model you have if you followed the [Software](./software) installation guide.

The value of "Clip skip" must be set to 1. Note that different AI models may require different values of "Clip skip". You should always check the model's documentation on [Civitai](https://civitai.com) or other resource where it was downloaded from. If the model's docs don't mention anything about "Clip skip", then you should keep it at 1.

::: danger IMPORTANT

Configuring proper "Clip skip" is crucial! If it's misconfigured, you may get bad image quality or even complete garbage results.

:::

We'll discuss what exactly "Clip skip" does in detail later in the guide. For now, you should have the inputs at the top configured as on the screenshot below. It should already be set to this by default if this is you first time opening Forge.

![](/prerequisites/initial-setup/forge-zn-config.png){.figure}

::: details Why don't we select the `xl` button if we are using SDXL?

The buttons `sd`, `xl`, `flux`, `all` only hide/reveal some configuration parameters and set their default values. For some reason, `xl` doesn't give you a "Clip skip" regulator. Anyhow, selecting `xl` isn't required for SDXL models, since it only slightly changes the UI appearance while removing the important "Clip skip" config.

:::
