<script>
  import DiWebplatform from "svelte-icons/di/DiWebplatform.svelte";
  import MdShoppingBasket from "svelte-icons/md/MdShoppingBasket.svelte";
  import MdApps from "svelte-icons/md/MdApps.svelte";

  import { inview } from "svelte-inview";

  const options = {
    rootMargin: "-150px",
    unobserveOnEnter: true,
  };

  let isInView = [false, false, false];
</script>

<div class="relative bg-white pt-32 pb-16 overflow-hidden" id="services">
  <!-- Service Section Header -->
  <div class="pb-16 sm:pb-24 lg:pb-32">
    <div
      class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
        >
          Our Services
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Web Development At Its Finest
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Whether you're running a small business or a sophisticated ecommerce
          operation, we can take the headache out of scalability and security
          for your site.
        </p>
      </div>
    </div>
  </div>

  <!-- Service 1 -->
  <div class="relative">
    <div
      class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
      >
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-l from-teal-500 to-cyan-600 text-white p-3"
            >
              <DiWebplatform />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
              Website for Better Marketing
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              A good website reflects your business brand, offers high-quality
              content and is easy-to-navigate. Your website is the key to a
              successful digital marketing strategy because all other digital
              marketing elements direct guests to your website, which should
              effectively convert guests.
            </p>
            <div class="mt-6">
              <a
                href="/contact"
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-l from-teal-500 to-cyan-600 hover:bg-teal-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-6">
          <blockquote>
            <div>
              <p class="text-base text-gray-500">
                "I am very satisfied with the result, it is exactly what I
                wanted, you did a very good job!"
              </p>
            </div>
            <footer class="mt-3">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  />
                </div>
                <div class="text-base font-medium text-gray-700">
                  Jeremy Bentham, Digital Marketing Manager
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div
        class="mt-12 sm:mt-16 lg:mt-0"
        use:inview={options}
        on:change={({ detail }) => {
          isInView[0] = detail.inView;
        }}
      >
        <div
          class={`pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full will-change-transform transition-all duration-700 ${
            isInView[0]
              ? "translate-x-0 opacity-100"
              : "translate-x-36 opacity-0"
          }`}
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="https://umami.is/intro.jpg"
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Service 2 -->
  <div class="mt-24">
    <div
      class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
      >
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-3"
            >
              <MdShoppingBasket />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
              Ecommerce to Increase Your Reach
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              With an online store, your profits are no longer limited by the
              number of customers that can physically visit your brick and
              mortar location. You can sell across towns, states, and even
              across borders, removing all geographical limitations.
            </p>
            <div class="mt-6">
              <a
                href="/contact"
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-teal-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1"
        use:inview={options}
        on:change={({ detail }) => {
          isInView[1] = detail.inView;
        }}
      >
        <div
          class={`pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full will-change-transform transition-all duration-700 ${
            isInView[1]
              ? "translate-x-0 opacity-100"
              : "-translate-x-36 opacity-0"
          }`}
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="https://uploads-ssl.webflow.com/610a7f42a46f6b44bc543ca1/6127d32320af126735ed7550_Frame%2083%20(3)-p-1600.png"
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Service 3 -->
  <div class="mt-24">
    <div
      class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
      >
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-l from-teal-500 to-cyan-600 text-white p-3"
            >
              <MdApps />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
              Application to Discover the Unseen
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Data driven application provide you with more insights into your
              customers, allowing you to tailor customer service to their needs,
              provide more personalization and build stronger relationships with
              them. Definitely help you streamline your processes, save money
              and boost your bottom line.
            </p>
            <div class="mt-6">
              <a
                href="/contact"
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-l from-teal-500 to-cyan-600 hover:bg-teal-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-6">
          <blockquote>
            <div>
              <p class="text-base text-gray-500">
                "It helps us better understand our data like never before!"
              </p>
            </div>
            <footer class="mt-3">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  />
                </div>
                <div class="text-base font-medium text-gray-700">
                  Jimmy Wood, Business Development
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div
        class="mt-12 sm:mt-16 lg:mt-0"
        use:inview={options}
        on:change={({ detail }) => {
          isInView[2] = detail.inView;
        }}
      >
        <div
          class={`pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full will-change-transform transition-all duration-700 ${
            isInView[2]
              ? "translate-x-0 opacity-100"
              : "translate-x-36 opacity-0"
          }`}
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png"
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  </div>
</div>
