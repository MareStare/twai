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

![](./text-to-image/sm-forge-package.png){.figure .width75}

### Launch Ceremony

Click on the big blue "Launch" button there and wait for Forge to initialize. When you do this for the first time ever, Forge will download a bunch of assets required for its functioning. It may take a minute or two, but next time you open it, it'll launch faster, although still far from instant 😢.

An average startup time for Forge is about half a minute depending on the extensions and plugins you have installed for it (we'll discuss them later in the guide). However, you only need to do this once, and you should keep it running while you are working on your AI art.

When Forge finishes launching, your default web browser will automatically open a page like this:

![](./text-to-image/forge-ui.png){.figure}

If a page doesn't appear make sure there are no `error`s in Forge's logs in StabilityMatrix (you can use `Ctrl+F` to search). If you see this line in the logs, then Forge should be up and running:

```
Running on local URL:  http://127.0.0.1:7860
```

You can force-open the web page by clicking on the button "Open Web UI" in StabilityMatrix.

![](./text-to-image/sm-open-web-ui.png){.figure .width75}
