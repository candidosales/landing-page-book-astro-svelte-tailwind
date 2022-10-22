<script lang="ts">
  import Github from "./icons/Github.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
  import Medium from "./icons/Medium.svelte";
  import Twitter from "./icons/Twitter.svelte";

  interface InterviewCompany {
    name: string;
    url: string;
  }

  interface Interviews {
    imageUrl: string;
    name: string;
    company: InterviewCompany;
    summary: string;
    location: string;
    twitterUrl?: string;
    mediumUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
  }

  const interviews: Array<Interviews> = [
    {
      imageUrl: "/auryo.png",
      name: "Auryo Jota",
      company: {
        name: "Escritor e Redator",
        url: "",
      },
      summary:
        "Desde o título, a obra é carregada de referências. A região de Teresina, a capital do Piauí, também é conhecida como Chapada do Corisco devido às fortes trovoadas e constantes raios que caem durante as tempestades... A preocupação com questões sociais é um ponto central na obra. Desigualdade, preconceito, pessoas invisibilizadas (se ninguém vê, elas não existem, não incomodam), a normalização da violência sofrida por determinados corpos.",
      location: "Teresina, Piauí",
      twitterUrl: "https://twitter.com/auryo_j",
      mediumUrl: "https://medium.com/@auryoj",
    },
  ];
</script>

<div class="bg-white">
  <div class="max-w-screen-xl mx-auto pt-16 pb-4 px-4">
    <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
      Veja a opinião de quem já leu ...
    </h2>
    <div class="mt-6 pt-10">
      {#each interviews as { name, imageUrl, company, summary, location, twitterUrl, githubUrl, linkedinUrl, mediumUrl }}
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
            <p class="text-base text-gray-600 mb-1 font-body">
              {summary}
            </p>
            <p class="text-sm italic text-gray-500  font-body">{location}</p>
            <div class="flex flex-row my-2">
              {#if githubUrl}
                <a title="Github link" href={githubUrl} target="_blank"
                  ><Github />
                </a>
              {/if}
              {#if twitterUrl}
                <a title="Twitter link" href={twitterUrl} target="_blank"
                  ><Twitter />
                </a>
              {/if}
              {#if linkedinUrl}
                <a title="Linkedin link" href={linkedinUrl} target="_blank"
                  ><Linkedin />
                </a>
              {/if}
              {#if mediumUrl}
                <a title="Medium link" href={mediumUrl} target="_blank"
                  ><Medium />
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
