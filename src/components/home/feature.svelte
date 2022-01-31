<script>
  import FeatureItem from "./featureItem.svelte";

  const features = [
    {
      id: 1,
      title: "Top Performance",
      desc: `Correlates powerfully to user experience, as well as the overall effectiveness of most sites. Meets your need for speed.`,
    },
    {
      id: 2,
      title: "SSL Certificate",
      desc: `Encrypts data sent over your web to ensure that eavesdroppers and hackers are unable to see what you transmit.`,
    },
    {
      id: 3,
      title: "Rapid Iteration",
      desc: `Allows you to create and test ideas quickly, cost-effective approach which puts UX at the heart of design process.`,
    },
    {
      id: 4,
      title: "Advanced Security",
      desc: `Ensures your data and applications are readily available to authorized users. You always have a reliable method to access yours.`,
    },
    {
      id: 5,
      title: "Easy Management",
      desc: `Can make everyone complete the task accurately. You can operate with a pleasant mood rather than feeling stupid.`,
    },
    {
      id: 6,
      title: "Database Backup",
      desc: `Helps restore devices during disaster recovery and restore data. It is vital for protection against data loss.`,
    },
  ];
</script>

<div class="relative bg-white py-16 sm:py-24 lg:py-32">
  <div
    class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
  >
    <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">
      Features
    </h2>
    <p
      class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
    >
      Everything you need to bring your imagination into reality
    </p>
    <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
      No matter how brilliant your idea is, if it takes more time to bring your
      IT project to life, rivals will pull ahead of you and surprise target
      audience with a similar good much earlier.
    </p>
    <div class="mt-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Feature Items -->
        {#each features as feature (feature.id)}
          <FeatureItem {...feature} />
        {/each}
      </div>
    </div>
  </div>
</div>
