# Models

::: info TODO

Describe known Checkpoints, Loras, upscalers, etc.

:::

- PonyRealism
- EasyFluff

Thread about known character loras: https://tantabus.ai/forums/create/topics/lora-characters

<!--

## Pony Diffusion Installation (VAE specifics)

Click on "Pony Diffusion V6 XL" and then "Import". The download will start in the background. In the meantime, open "Pony Diffusion V6 XL" again, but select `sdxl_vae` to the right and click "Import" once more:

![](/basics/software/sm-pdxl-vae.png){.figure}

VAE is a supplementary file, that will improve the quality of the generated images. If a model comes with a VAE file, you should always download it. Unfortunately, StabilityMatrix doesn't make it easy for you to download both the model and the VAE file both at once, so you have to click "Import" for each of them separately.

VAE comes as a separate smaller file to make it easier for developers to update it. It also makes it easier for you to receive an update, because this way you don't need to re-download the whole multi-gigabyte AI model again. We'll discuss what exactly VAE is and what it does in later chapters.

## Initial Configuration

Set "VAE / Text Encoder" to `sdxl_vae.safetensors`. If you don't see it in the dropdown list, then you [didn't download it](./software#pony-diffusion-v6-xl), so make sure you import this file in StabilityMatrix.

## Scores Ceremony

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

![](/basics/prompting/first-ai-image.png){.figure .width30}

This is what I got generated, but your output will definitely be different from this because there is some randomness added to the generation process to make AI produce different images on ever click of the "Generate" button to get some variety. We'll fight with that, but for now we aren't even close to Twilight Sparkle.


-->
