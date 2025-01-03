# Software

There are many online AI art generators, for example:

-   [civitai](https://civitai.com)
-   [purplesmart.ai Discord bot](http://discord.gg/94KqBcE)

However, most AI artists don't use them because of their limitations. For example, they limit the number of image generations available, and they don't give you full control of all generation parameters so that you don't overload their servers.

If you want to generate high quality AI art, you'll need to use your own computer and GPU for generating the images. This is called "local" generation.

## System Requirements

Here are the recommended computer specs for local AI art generation.

<style>
.windows { background-image: url(/logos/windows.svg); }
.nvidia { background-image: url(/logos/nvidia.svg); }
</style>

-   <i class="windows inline-logo"></i> Windows OS
-   <i class="nvidia inline-logo"></i> NVIDIA GPU
-   `≥ 8GB` VRAM <span style="font-size: smaller">(see "Task Manager -> Performance -> GPU N -> Dedicated GPU memory")</span>
-   `≥ 16GB` RAM
-   `≥ 30GB` free space on disk (SSD)

If your computer doesn't match some of the above, then see spoilers below.

::: details I don't use Windows/NVIDIA

Linux, MacOS, and AMD GPU have support, but it's worse. You'll need to jump through some extra hoops to get them working.

:::

::: details I don't have so much VRAM

Most of the computations that AI performs are VRAM-intensive. Even if you have a really low amount of VRAM, you may still try to do image generation. However, it'll take more time, since AI won't be able to load some things into memory and do computations fully in parallel.

Some AI artists claim, that they survive with a GTX 1060 (`3GB` of VRAM), so don't lose hope 🥹.

:::

<style>
.stability-matrix   { background-image: url(/logos/stability-matrix.svg); }
</style>

## Stability Matrix

[Stability Matrix](https://lykos.ai/) is the first application you should install. It is a central manager for all other components of the AI art software ecosystem. You'll use it to install the user interfaces and AI models of your liking and keep all things nicely organized.

### Installing

You can download the Stability Matrix from [here](https://lykos.ai/downloads) (choose the stable version). If you are on Windows, you'll get a ZIP archive with a single `StabilityMatrix.exe` in it. Extract this `exe` file and move it into a separate folder. That folder will contain the AI models, generated images and other application files.

Launch `StabilityMatrix.exe`, and if Windows complains about an unrecognized app, just click "More info -> Run anyway".

You'll see a window where StabilityMatrix asks you to select the location for the `Data` folder. Using the option "Portable Mode" is recommended to keep your data near the `StabilityMatrix.exe`.

It'll ask you your permission to share analytics. Feel free to confirm it.

Now, let's press the button "Skip first-time setup" because StabilityMatrix may crash due to [this bug](https://github.com/LykosAI/StabilityMatrix/issues/1078) at the time of this writing if you don't do this. Don't worry, we'll still configure everything, so just bear with me 😅.

## Forge

Forge is a web UI that you'll use to generate AI images. You may want to try other web UIs (such as ComfyUI) in the future, but Forge is perfect for starters.

### Installing

In StabilityMatrix click on "Packages", then "+ Add Package" at the bottom. You should see this:

![](/software/sm-forge-package.png){data-figure}

Click on "Stable Diffusion WebUI Forge", then "Install" and wait for the download, it may take several minutes.

## Pony Diffusion V6 XL

Pony Diffusion XL is an AI model based on Stable Diffusion XL (SDXL for short). The AI model is the core part of all of this. It directly determines what images you'll generate, their quality, style and content in general.

Pony Diffusion is the most famous AI model for generating... You guessed it - ponies 😏. Anyhow, it's popular far beyond MLP community (including anime and furry), because it can generate almost any anime/cartoon character in artistic style. It's developed by [purplesmart.ai](https://purplesmart.ai/), and it has a large community on [Discord](https://purplesmart.ai/discord). Feel free to join it and ask questions in `#novice-questions`.

There are a bunch of other AI models capable of generating ponies, and you'll likely try several of them in the future. We'll get to them later in the [Models](./models) chapter, but let's start with Pony Diffusion.

### Installing

In StabilityMatrix click on "Model Browser" and search for "Pony":

![](/software/sm-pdxl-model.png)

::: tip

A common mistake when searching for models is where you have a wrong "Model Type" selected. Always pay attention to it when you are in the "Model Browser". In this case the "Model Type" should be either `Checkpoint` or `All`.

:::

Click on "Pony Diffusion V6 XL" and then "Import". The download will start on the background. In the meantime, open "Pony Diffusion V6 XL" again, but select `sdxl_vae` to the right and click "Import" once more:

![](/software/sm-pdxl-vae.png)

VAE is a supplementary file, that will improve the quality of the generated images. If a model comes with a VAE file, you should always download it. Unfortunately, StabilityMatrix doesn't make it easy for you to download both the model and the VAE file both at once, so you have to click "Import" for each of them separately.

VAE comes as a separate smaller file to make it easier for developers to update it. It also makes it easier for you to receive an update, because this way you don't need to re-download the whole multi-gigabyte AI model again. We'll discuss what exactly VAE is and what it does in later chapters.

## Folder Structure

After you've done all the above, you'll have a folder with two entries in it like this:

![](/software/sm-location-example.png){data-figure}

The folder structure in the `Data` is very intuitive:

-   `Packages` - web UI packages (we have Forge);
-   `Models/StableDiffusion` - core Stable Diffusion AI model files (we have Pony Diffusion);
-   `Models/...` - other types of models such as LORAs, that we'll discuss later

::: tip

Stable diffusion AI models are also sometimes called just "checkpoints".

:::

You may sometimes need to download something outside StabilityMatrix or find your old generated images, and so you should be aware of its folder structure. This folder organization also makes it easy to move all your AI models, UIs, images to another location or even another PC.

TODO: add images folder to the diagram:

![](/software/ai-art-software.png){data-figure}
