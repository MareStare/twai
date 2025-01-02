# Software

There are many online AI art generators, for example:

-   [civitai](https://civitai.com)
-   [purplesmart.ai Discord bot](http://discord.gg/94KqBcE)

However, most AI artists don't use them because of their limitations. For example, they limit the number of image generations available, and they don't give you full control of all generation parameters so that you don't overload their servers.

If you want to generate high quality AI art, you'll need to use your own computer and GPU for generating the images. This is called "local" generation.

## System Requirements

You'll need to have the following computer specs to be able to generate AI art locally:

<style>
.windows { background-image: url(/logos/windows.svg); }
.nvidia { background-image: url(/logos/nvidia.svg); }
</style>

-   <i class="windows inline-logo"></i> Windows OS
-   <i class="nvidia inline-logo"></i> NVIDIA GPU
-   `≥ 16GB` RAM
-   `≥ 8GB` VRAM

If your system doesn't match some of them, see the spoilers below.

::: details I don't use Windows/NVIDIA

If you are using Linux or MacOS, or an AMD GPU, things may still work for you, but you'll need to jump some extra hoops to get them working. They can work, but they generally have worse support. You can still try to get them working, but this guide will assume you use Windows and NVIDIA.

:::

::: details I don't have so much VRAM

Most of the computations that AI performs are VRAM-intensive. Even if you have a really low amount of VRAM, you may still try to do image generation. However, it'll take more time, since AI won't be able to load some things into memory and do computations fully in parallel.

Some AI artists have proven, that it's possible to work with a GTX 1060 (`3GB` of VRAM), so don't lose hope 🥹.

:::

## Stability Matrix

[Stability Matrix](https://github.com/LykosAI/StabilityMatrix) is the first application you should install. It is a central manager for all other components of the AI art software ecosystem. You'll need it to install the user interfaces and AI models of your liking and keep all things nicely organized.

Go to [Stability Matrix GitHub repository](https://github.com/LykosAI/StabilityMatrix)

When you install it, you'll have a folder with only two entries in it:

-   `StabilityMatrix.exe` file
-   `Data` folder

![](/ai-art-software.png)
