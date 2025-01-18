# Software

There are many online AI art generators, for example:

- [Civitai](https://civitai.com)
- [PurpleSmart.ai Discord bot](http://discord.gg/94KqBcE)

However, most AI artists don't use them because of their limitations. For example, they limit the number of image generations available, and they don't give you full control of all generation parameters to prevent you from overloading their servers.

If you want to generate high quality AI art, you'll need to use your own computer and GPU. This is called "local" generation.

## System Requirements

Here are the recommended computer specs for local AI art generation.

- ::windows:: Windows OS
- ::nvidia:: NVIDIA GPU
- `≥ 8GB` VRAM <span style="font-size: smaller">(see "Task Manager -> Performance -> GPU N -> Dedicated GPU memory")</span>
- `≥ 16GB` RAM
- `≥ 30GB` free space on disk (SSD)

If your computer doesn't match some of the above, then see spoilers below.

::: details I don't use Windows/NVIDIA

Linux, MacOS, and AMD GPU have support, but it's worse. You'll need to jump through some extra hoops to get them working.

:::

::: details I don't have so much VRAM

Most of the computations that AI performs are VRAM-intensive. Even if you have a really low amount of VRAM, you may still try to do image generation. However, it'll take more time, since AI won't be able to load some things into memory and do computations fully in parallel.

Some AI artists claim, that they survive with a GTX 1060 (`3GB` of VRAM), so don't lose hope 🥹.

:::

## ::stability-matrix:: Stability Matrix

[Stability Matrix](https://lykos.ai/) is the first application you should install. It is a central manager for all other components of the AI art software ecosystem. You'll need it to install the user interfaces and AI models of your liking and keep all things nicely organized.

### Installing

You can download the Stability Matrix from [here](https://lykos.ai/downloads) (choose the stable version). If you are on Windows, you'll get a ZIP archive with a single `StabilityMatrix.exe` in it. Extract this `exe` file and move it into a separate folder. That folder will contain the AI models, generated images and other application files.

Launch `StabilityMatrix.exe`, and if Windows complains about an unrecognized app, just click "More info -> Run anyway".

You'll see a window where StabilityMatrix asks you to select the location for the `Data` folder. Using the option "Portable Mode" is recommended to keep your data near the `StabilityMatrix.exe`.

It'll ask for your permission to share analytics. Feel free to confirm.

Now, let's press the button "Skip first-time setup". Don't worry, we'll configure everything. It'll just be easier for you to learn if we do that manually, so just bear with me 😅.

## ::forge:: Forge

Forge is a web UI that you'll use to generate AI images. You may want to try other web UIs (such as ComfyUI) in the future, but Forge is perfect for starters.

### Installing

In StabilityMatrix click on "Packages", then "+ Add Package" at the bottom. You should see this:

![](/prerequisites/software/sm-forge-package.png){.figure}

Click on "Stable Diffusion WebUI Forge", then "Install" and wait for the download, it may take several minutes.

## ::stability-ai:: Stable Diffusion

There exist two primary types of AI models - _fine-tune_ and _base_ (sometimes called _foundational_) models. _Fine-tune_ models are the ones you are going to use directly to generate pony images. These models are built on top of _base_ models.

Training a base model requires insane amount of compute resources and captioned images, so it's ridiculously expensive and only a few base models exist out there. One of them, that will be the topic of this guide is Stable Diffusion.

[**Stable Diffusion**](https://stability.ai/stable-image) is a free and open-source [generative](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) AI _base_ model developed by Stability AI.

_Fine-tune_ AI models, are built on top of base models such as Stable Diffusion by extending them with an additional dataset of images with the intended style and characters.

![](/prerequisites/software/ai-models-composition.png){.figure}

The process of training a custom model on top of a base model is called _fine-tuning_. You can think of it like taking an experienced artist (Stable Diffusion) who knows how to draw humans, cars, buildings and teaching him how to draw ponies. It is much easier for that artist to learn than for a person who knows nothing about drawing.

There are a bunch of versions of Stable Diffusion: `1.4`, `1.5`, `2.0`, `2.1`, `XL`, `3.0`, `3.5`, etc. We'll focus on fine-tunes of `XL` version (SDXL) in this guide.

## Fine-tune models

Fine-tune AI model directly determines what images you'll get, their quality, style and content in general. There are many models capable of generating pony images, and you'll definitely try several of them. These models are often hosted on [Civitai](https://civitai.com/). There you can review their description, terms of use and examples of images people generate with them.

::: tip License considerations

Always make sure to review the model's license and terms of use. For example, some models like [ZoinksNoob](#zoinksnoob) disallow selling the generated images.

![](/prerequisites/software/zn-license.png){.figure .width50}

:::

### ::purplesmart-ai:: Pony Diffusion

![](/prerequisites/software/pd-banner.png){.figure .float-right .width30}

[Pony Diffusion V6 XL](https://civitai.com/models/257749/pony-diffusion-v6-xl) is an AI model fine-tuned on Stable Diffusion XL (SDXL for short).

Pony Diffusion is most famous for generating... you guessed it - ponies 😏. Anyhow, it's popular far beyond MLP community (including anime and furry), because it can generate almost any anime/cartoon character in artistic style. It's developed by [PurpleSmart.ai](https://purplesmart.ai/), and it has a large community on [Discord](https://purplesmart.ai/discord). Feel free to join it and ask questions in `#novice-questions`.

The upcoming version of Pony Diffusion (V7) will use a new base model - ::aura-flow:: [Aura Flow](https://fal.ai/models/fal-ai/aura-flow). We'll update the guide once that version is generally available.

Pony Diffusion is really nice, and V7 is very promising. We'll cover its peculiarities later in the guide. However, we'll start with another model called [ZoinksNoob](#zoinksnoob). It is a bit easier to use than Pony Diffusion and produces more detailed images. Anyway, you are encouraged to try several models to find your favorite!

### ZoinksNoob

![](/prerequisites/software/zn-banner.png){.figure .float-right .width30}

[ZoinksNoob](https://civitai.com/models/960747?modelVersionId=1075669) is an SDXL-based model made by [zatochu](https://huggingface.co/zatochu). It is a merge of two other models (ZoinkScoob and Furry NoobAI). Merging models is one of the techniques for "training" them.

Even though ZoinksNoob is more of a furry-focused model, it's been gaining popularity among the MLP community. The image at the top of the ["Welcome"](../welcome) page was generated with this model.

### Installing

In StabilityMatrix click on "Model Browser". Click on "Show NSFW Content" because both Pony Diffusion and ZoinksNoob can generate NSFW images. Then, search for "Zoinks":

![](/prerequisites/software/sm-zn-search.png){.figure}

::: tip

A common mistake when searching for models is having a wrong "Model Type" selected. Always pay attention to it when you are in the "Model Browser". In this case the "Model Type" should be either `Checkpoint` or `All`.

:::

Click on "ZoinkScoob / Furry NoobAI merge" and then "Import". Wait for StabilityMatrix to download the model (around 7GB of data). You can track the progress in the "Downloads" section.

![](/prerequisites/software/sm-downloads.png){.figure .width50}

## Folder Structure

After you've done all the above, you'll have a folder with two entries in it like this:

![](/prerequisites/software/sm-location-example.png){.figure}

The `Data` folder was created by StabilityMatrix and its structure is very simple. Here is how it looks like assuming you have multiple web UIs, models etc.

![](/prerequisites/software/sm-folder-structure.png){.figure}

| Folder                    | Description                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `/Packages`               | Web UI packages (we have Forge).                                                        |
| `/Models/StableDiffusion` | Base or fine-tune AI model files, also called "checkpoints" (we have ZoinksNoob).       |
| `/Models/...`             | Other types of models such as LORAs (`/Models/Lora`). We'll discuss them later.         |
| `/Images/Text2Img`        | History of images generated by AI from a text prompt. There is one folder per each day. |

There is also `/Images/Img2Img` for images generated from other images, but we'll discuss that technique later.
