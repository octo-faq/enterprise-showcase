<template>
  <v-row>
    <v-col>
      <!-- <img
        src="GitHub-Mark-Light-120px-plus.png"
        alt="GitHub"
        class="mb-5"
        style="margin-left:25px"
      >
      <blockquote class="blockquote">
        <ul style="list-style: none;">
          <li>Responsive is better than fast</li>
          <li>It’s not fully shipped until it’s fast</li>
          <li>Anything added dilutes everything else</li>
          <li>Practicality beats purity</li>
          <li>Approachable is better than simple</li>
          <li>Mind your words, they are important</li>
          <li>Speak like a human</li>
          <li>Half measures are as bad as nothing at all</li>
          <li>Encourage flow</li>
          <li>Non-blocking is better than blocking</li>
          <li>Favor focus over features</li>
          <li>Avoid administrative distraction</li>
          <li>Design for failure</li>
          <li>Keep it logically awesome</li>
        </ul>
        <footer>
          <small>
            <em>&mdash;The Zen of GitHub</em>
          </small>
        </footer>
      </blockquote> -->
      <vue-markdown>{{ b }}</vue-markdown>
    </v-col>
  </v-row>
</template>

<script>


export default {
  async asyncData ({ $content, params }) {
    const a = await fetch('https://raw.githubusercontent.com/octo-faq/getting-started/main/README.md')
    const b = await a.text()
    // console.log(b)
    return { b }
    // const collections = await $content('collections', params.slug)
    //   .only(['title', 'description', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch()

    // return {
    //   collections
    // }
  }
}
</script>
