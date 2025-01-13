<script setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

</script>

# Sampling

When AI starts generating an image from a prompt, it executes an iterative algorithm called "sampling", that begins with a picture of a random noise like this:

![](/configurations/sampling/noise.png){.figure .width30}

The sampling algorithm _denoises_ the image and refines its details step by step. This is why "sampling" is also often referred to as "denoising". You can see how this happens with our image, which uses `Euler a` sampling method:

<video controls src="/configurations/sampling/euler-a-iterations.mp4" title="'Euler a' iterations"></video>

::: tip

Recall the following sentence from the previous chapter:

> Seed is used as a "starting" point for the image generation algorithm.

Seed actually defines the initial random noise image, which significantly impacts the direction that sampling will take.

:::

The way this works is truly beautiful, and getting into the details of the sampling process would require a whole other book and a calculus degree. To be honest, I don't possess all that knowledge, yet still, this shallow understanding is enough for me to get good at AI art 🐱.

## Sampling Steps

Right now, we have "Sampling steps" set to 20. If you set it to 1 or 2, you'll see noisy images from the start of the video above.

The more sampling steps you configure - the more time it'll take to generate the image, but the more denoising you'll get, which usually means better quality.

However, AI can improve image quality with denoising only so long. The initial iterations of sampling determine the major features of the resulting picture. The later iterations only influence minor details. The more steps you configure, the less impact you'll see on your picture.

Usually, 20-35 sampling steps are enough to get a good-looking image. Changing sampling steps is more often used to ask AI to tweak the image a bit while keeping the overall composition.

For example, here is a comparison of our Twai cover art with 20 (left) and 45 (right) sampling steps.

<ImgComparisonSlider>
<img
    slot="second"
    style="width: 100%"
    src="/configurations/seed/twai-cover-seed.png"
/>
<img
    slot="first"
    style="width: 100%"
    src="/configurations/sampling/iteration-1.png"
/>
</ImgComparisonSlider>

## Sampling Methods

Sampling methods are the algorithms, that define the logic of the denoising process. There are a number of them available, and they all fall into two different categories: "converging" and "ancestral".

## Converging Samplers

Converging samplers such as `Euler` (without "a" in the end) stop noticeably changing the major features of the image after reaching some number of sampling steps. Let's see what it means by setting "Sampling method" to `Euler` and reviewing its iterations:

<video controls src="/configurations/sampling/euler-iterations.mp4" title="'Euler' iterations"></video>

As you can see, Twilight's posture and the scene, in general, settles pretty fast and doesn't change noticeably at the later sampling iterations. This means the algorithm "converges" to some fixed point (picture).

The cool thing about a converging sampler is that you can set a low number of sampling steps to generate images quickly, and then once you find a good one, you can increase the number of sampling steps and still get the same image, but with better quality.

## Ancestral Samplers

The main feature of an ancestral sampler is that on every sampling step it carries some additional noise from the previous step. This basically means there is some fixed randomness added to every step. Therefore, the composition may noticeably change between different steps.

We've been using the default sampler `Euler a` from the start of this guide. You've also seen it in action in a video at the top of this page, but here is this same video of `Euler a` iterations again for comparison with `Euler` higher:

<video controls src="/configurations/sampling/euler-a-iterations.mp4" title="'Euler a' iterations"></video>

As you can see, Twilight changes several times in the process of sampling from being a big mare to a smaller one. If you increase the number of steps further, she may continue to change.

You can identify an ancestral sampler by its name. Such samplers have the "a" or "SDE" in their name. For example, `Euler a`, `DPM2 a`, `DPM++ SDE`.

## Schedule Type

Schedule type or "noise schedule" is an additional configuration for the sampling algorithm. It defines how much noise is removed from the image at each sampling step until it reaches zero. It is another parameter that you can play with to slightly change your image.

Usually, you'll see `Automatic`, `Uniform` or `Karras` used as the noise schedule. `Karras` is considered as the latest and greatest one. Check [this article](https://stable-diffusion-art.com/samplers/#Noise_schedule) if you want to know more about how it works.

## Which Sampler is the Best?

There isn't a true best sampler. It usually makes sense to try different sampling configurations to see which one improves your image.

I usually use converging samplers to get some guarantee about the final image shape, because I like fast experimentation with lower number of sampling steps. Howeveer, some people prefer the randomness of the ancestral samplers.

Generally speaking, the most popular samplers are `DMP2M++ Karras`, `Euler` and `Euler a`.

There is [this cool video](https://www.youtube.com/watch?v=Ek5r0eRJvy8) that compares different converging samplers. It compares their performance, image quality and convergence speeds. Watch it to understand how existing samplers differ.

[This article](https://stable-diffusion-art.com/samplers/#Noise_schedule) also goes into some more detail of sampling algorithms.
