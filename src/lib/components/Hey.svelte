<script>
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition"
  import { cubicOut } from "svelte/easing"

  const greetingsDict = {
    "ko-KR": "안녕",           // Korean (South Korea)
    "en-US": "Hey",           // English (United States)
    "es-ES": "Hola",          // Spanish (Spain)
    "ar-PS": "مرحبًا",         // Palestinian Arabic (Palestine)
    "it-IT": "Ciao",          // Italian (Italy)
    "fr-FR": "Salut",         // French (France)
    "nl-NL": "Hoi",           // Dutch (The Netherlands)
    "zh-CN": "你好",           // Chinese Simplified (China)
    "ja-JP": "こんにちは",      // Japanese (Japan)
    "hi-IN": "नमस्ते",          // Hindi (India)
    "uk-UA": "Привіт",        // Ukrainian (Ukraine)
    "sv-SE": "Hej",           // Swedish (Sweden)
    "hu-HU": "Szia",          // Hungarian (Hungary)
    "fa-IR": "سلام",           // Farsi (Iran)
  };

  let locale = Intl.DateTimeFormat().resolvedOptions().locale
  if (! (locale in greetingsDict)) locale = "en-US"

  const greetings = [...Object.values(greetingsDict), greetingsDict[locale]]

  const easing = cubicOut
  const duration = 1500 / greetings.length
  let index = 0;
  let carrousel;
  onMount(() => {
    carrousel = setInterval(() => {
      if (index === greetings.length - 1) {
        clearInterval(this);
      }
      else index++;
    }, duration+10);
  });
  onDestroy(() => {
    clearInterval(carrousel);
  });
</script>

<div aria-label={greetings[locale]} id="greetings">
  {#key index}
    <div in:fly={{duration, easing, y: -100}} aria-hidden="true">{greetings[index]}</div>
    <div in:fly={{duration, easing, y: -100, opacity: 1}} aria-hidden="true">{greetings[index+1] ?? ""}</div>
  {/key}
</div>

<style lang="sass">
  #greetings
    display: inline-block
    height: 1.1em
    padding-bottom: 0.2em
    margin-bottom: -0.2em
    overflow-y: hidden
    overflow-x: visible
    width: 3.7em
</style>
