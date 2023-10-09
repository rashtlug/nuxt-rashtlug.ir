<template>
    <nav class="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div class="flex items-center justify-between text-gray-900">
            <div class="flex">
                <div><font-awesome-icon class="w-9 md:w-10" icon="fa-brands fa-linux" /></div>
                <a
                href="#"
                class="bg-gradient-to-r from-green-500  to-green-600 bg-clip-text text-transparent ml-4 mr-4 block cursor-pointer py-1.5 font-sans text-xl md:text-2xl font-bold leading-relaxed antialiased"
                >
                RashtLug
                </a>
            </div>

            <ul class="hidden items-center gap-6 lg:flex">
              <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a class="flex items-center" href="#">
                    Landing
                  </a>
              </li>
              <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a class="flex items-center" href="#">
                    Account <span><font-awesome-icon class="w-3  ml-3 text-gray-400" icon="fa-solid fa-angle-down" /></span>
                  </a>
              </li>
              <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a class="flex items-center" href="#">
                    Work
                    <span><font-awesome-icon class="w-3  ml-3 text-gray-400" icon="fa-solid fa-angle-down" /></span>
                  </a>
              </li>
              <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a class="inline-flex items-center " href="#">
                    Blog
                    <span><font-awesome-icon class="w-3  justify-center self-center items-center  ml-3 text-gray-400" icon="fa-solid fa-angle-down" /></span>
                  </a>
              </li>

              <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <a class="inline-flex items-center" href="#">
                    Docs <span class="bg-blue-100 ml-2 text-blue-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">v1.2</span>
                  </a>
              </li>
            </ul>
     
            
            <div class="flex">
                <button 
                type="button" 
                class="py-2.5 hidden md:inline-flex px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4">
                    <span class="self-center"><font-awesome-icon class="w-3" icon="fa-regular fa-user" /></span>
                    <span class="ml-1">Log In</span>
                </button>

                <button
                type="button"
                class="px-5 py-2.5 hidden md:inline-flex text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                    Request demo
                </button>

            </div>
           
      
            <button
            class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="sticky-navar"
            @click="Collapse"
            >
            <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
                </svg>
            </span>
            </button>
        </div>
        <div
            class="block w-full basis-full overflow-hidden transition-all duration-300 ease-in lg:hidden"
            data-collapse="sticky-navar"
            :class="height"
        >
            <ul class="mt-2 mb-4 flex flex-col gap-2 text-gray-800 pb-2">
            <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="#">
                Landing
                </a>
            </li>
            <li class="block p-1  font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="#">
                Account
                </a>
            </li>
            <li class="block p-1  font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="#">
                Work
                </a>
            </li>
            <li class="block p-1   font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="#">
                Blog
                </a>
            </li>
                 <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="#">
                Docs
                </a>
            </li>
            <button
                class="mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
            >
                <span>Log in</span>
            </button>
            </ul>
        </div>
    </nav>
    
</template>

<script setup>
    import { ref } from 'vue'

    const height = ref('h-0');

    const Collapse = () => {
        height.value = height.value == 'h-0' ? '' : 'h-0';

    }

</script>

<style scoped>
</style>