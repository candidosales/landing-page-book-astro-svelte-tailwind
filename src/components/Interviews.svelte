<script lang="ts">
  import Github from "./icons/Github.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
  import Twitter from "./icons/Twitter.svelte";

  const interviews = [
    {
      imageUrl: "/avatar-addy.jpeg",
      name: "Addy Osmani",
      company: {
        name: "Google",
        url: "https://google.com",
      },
      summary:
        "Addy is an Engineering Manager working on Google Chrome. He leads up a developer tools team focused on measuring user-experiences to help keep the web fast. Some of his team's projects include Lighthouse, PageSpeed Insights and the Chrome User Experience Report.",
      location: "Sunnyvale, United States",
      githubUrl: "https://github.com/addyosmani",
      twitterUrl: "https://twitter.com/addyosmani",
      linkedinUrl: "https://linkedin.com/in/osmani",
    },
    {
      imageUrl: "/avatar-berg.jpeg",
      name: "Berg Brandt",
      company: {
        name: "Amazon",
        url: "https://amazon.com",
      },
      summary:
        "Berg Brandt is a Head of Studios Applications at Amazon. He is a product & technology leader with over 20 years of experience delivering highly-engaging technology products and user experiences. Before Amazon, Berg worked at Yahoo! for more than 8 years. ",
      location: "Santa Monica, United States",
      githubUrl: "https://github.com/addyosmani",
      twitterUrl: "https://twitter.com/addyosmani",
      linkedinUrl: "https://linkedin.com/in/osmani",
    },
  ];
</script>

<div class="bg-white">
  <div class="max-w-screen-xl mx-auto pt-16 pb-4 px-4">
    <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
      Featuring Interviews with...
    </h2>
    <div class="mt-6 pt-10">
      {#each interviews as { name, imageUrl, company, summary, location, githubUrl, twitterUrl, linkedinUrl }}
        <div class="flex-none sm:flex mb-12">
          <img class="w-40 h-40 rounded-full mr-8" src={imageUrl} alt={name} />
          <div class="text-sm">
            <p class="text-2xl font-semibold text-gray-900">{name}</p>
            <p class="text-xl">
              <a
                class="underline text-book-gray hover:bg-book-yellow transition ease-in-out duration-300"
                href={company.url}
                target="_blank">{company.name}</a
              >
            </p>
            <p class="text-base text-gray-600 mb-1">
              {summary}
            </p>
            <p class="text-sm italic text-gray-500">{location}</p>
            <div class="flex flex-row my-2">
              <a href={githubUrl} target="_blank"><Github /> </a>
              <a href={twitterUrl} target="_blank"><Twitter /></a>
              <a href={linkedinUrl} target="_blank"><Linkedin /></a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
