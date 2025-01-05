# Software

There are many online AI art generators, for example:

-   [Civitai](https://civitai.com)
-   [PurpleSmart.ai Discord bot](http://discord.gg/94KqBcE)

However, most AI artists don't use them because of their limitations. For example, they limit the number of image generations available, and they don't give you full control of all generation parameters to prevent you from overloading their servers.

If you want to generate high quality AI art, you'll need to use your own computer and GPU. This is called "local" generation.

## System Requirements

Here are the recommended computer specs for local AI art generation.

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

## <i class="stability-matrix inline-logo"></i> Stability Matrix

[Stability Matrix](https://lykos.ai/) is the first application you should install. It is a central manager for all other components of the AI art software ecosystem. You'll need it to install the user interfaces and AI models of your liking and keep all things nicely organized.

### Installing

You can download the Stability Matrix from [here](https://lykos.ai/downloads) (choose the stable version). If you are on Windows, you'll get a ZIP archive with a single `StabilityMatrix.exe` in it. Extract this `exe` file and move it into a separate folder. That folder will contain the AI models, generated images and other application files.

Launch `StabilityMatrix.exe`, and if Windows complains about an unrecognized app, just click "More info -> Run anyway".

You'll see a window where StabilityMatrix asks you to select the location for the `Data` folder. Using the option "Portable Mode" is recommended to keep your data near the `StabilityMatrix.exe`.

It'll ask for your permission to share analytics. Feel free to confirm.

Now, let's press the button "Skip first-time setup" because StabilityMatrix may crash due to [this bug](https://github.com/LykosAI/StabilityMatrix/issues/1078) at the time of this writing if you don't do this. Don't worry, we'll still configure everything, so just bear with me 😅.

## <i class="forge inline-logo"></i> Forge

Forge is a web UI that you'll use to generate AI images. You may want to try other web UIs (such as ComfyUI) in the future, but Forge is perfect for starters.

### Installing

In StabilityMatrix click on "Packages", then "+ Add Package" at the bottom. You should see this:

![](/basics/software/sm-forge-package.png){.figure}

Click on "Stable Diffusion WebUI Forge", then "Install" and wait for the download, it may take several minutes.

## <i class="stability-ai inline-logo"></i> Stable Diffusion

Before we discuss the Pony Diffusion AI model for generating pony images specifically, we need to understand the core technology behind it - Stable Diffusion.

[**Stable Diffusion**](https://stability.ai/stable-image) is a free and open-source [generative](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) AI model developed by Stability AI. It is at the heart of Pony Diffusion and many other custom AI models. Training a base model requires insane amount of compute resources and captioned images, so it's ridiculously expensive and only a few base models exist out there.

Thus, custom models such as Pony Diffusion aren't developed from scratch. They are built on top of Stable Diffusion by extending it with an additional dataset of images with the intended style and characters.

The process of training a custom model on top of a base model is called "fine-tuning". So, beware of the difference between a "base model" and a "fine-tune model" (or "fine-tune" for short).

There are a bunch of versions of Stable Diffusion: `1.4`, `1.5`, `2.0`, `2.1`, `XL`, `3.0`, `3.5`, etc. We'll focus on fine-tunes of `XL` version (SDXL) in this guide.

The upcoming version of Pony Diffusion (V7) will use a new base model - <i class="aura-flow inline-logo"></i> [Aura Flow](https://fal.ai/models/fal-ai/aura-flow). We'll update the guide once that version is generally available.

## <i class="purplesmart-ai inline-logo"></i> Pony Diffusion V6 XL

Pony Diffusion XL is an AI model fine-tuned on Stable Diffusion XL (SDXL for short). The AI model directly determines what images you'll get, their quality, style and content in general.

Pony Diffusion is most famous for generating... you guessed it - ponies 😏. Anyhow, it's popular far beyond MLP community (including anime and furry), because it can generate almost any anime/cartoon character in artistic style. It's developed by [PurpleSmart.ai](https://purplesmart.ai/), and it has a large community on [Discord](https://purplesmart.ai/discord). Feel free to join it and ask questions in `#novice-questions`.

There are a bunch of other AI models capable of generating ponies, and you'll likely try several of them in the future. We'll get to them later in the [Models](./models) chapter, but let's start with Pony Diffusion.

### Installing

In StabilityMatrix click on "Model Browser" and search for "Pony":

![](/basics/software/sm-pdxl-model.png){.figure}

::: tip

A common mistake when searching for models is having a wrong "Model Type" selected. Always pay attention to it when you are in the "Model Browser". In this case the "Model Type" should be either `Checkpoint` or `All`.

:::

Click on "Pony Diffusion V6 XL" and then "Import". The download will start in the background. In the meantime, open "Pony Diffusion V6 XL" again, but select `sdxl_vae` to the right and click "Import" once more:

![](/basics/software/sm-pdxl-vae.png){.figure}

VAE is a supplementary file, that will improve the quality of the generated images. If a model comes with a VAE file, you should always download it. Unfortunately, StabilityMatrix doesn't make it easy for you to download both the model and the VAE file both at once, so you have to click "Import" for each of them separately.

VAE comes as a separate smaller file to make it easier for developers to update it. It also makes it easier for you to receive an update, because this way you don't need to re-download the whole multi-gigabyte AI model again. We'll discuss what exactly VAE is and what it does in later chapters.

## Folder Structure

After you've done all the above, you'll have a folder with two entries in it like this:

![](/basics/software/sm-location-example.png){.figure}

The `Data` folder was created by StabilityMatrix and its structure is very simple.

![](/basics/software/sm-folder-structure.png){.figure}

| Folder                    | Description                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `/Packages`               | Web UI packages (we have Forge).                                                        |
| `/Models/StableDiffusion` | Base or fine-tune AI model files, also called "checkpoints" (we have Pony Diffusion).   |
| `/Models/...`             | Other types of models such as LORAs (`/Models/Lora`). We'll discuss them later.         |
| `/Images/Text2Img`        | History of images generated by AI from a text prompt. There is one folder per each day. |

There is also `/Images/Img2Img` for images generated from other images, but we'll discuss that technique later.
