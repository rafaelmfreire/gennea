<template>
	<div>
		<whatsapp />
		<nav class="econtainer mx-auto md:px-4 xl:px-0 flex items-center justify-between">
			<NuxtLink to="/">
				<svg width="150" viewBox="0 0 113 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.5998 22.5112V23.8667C16.5966 25.7085 15.9383 27.4925 14.7365 28.9155C13.5347 30.3386 11.8637 31.3129 10.0073 31.673C8.15082 32.0331 6.2235 31.7568 4.55272 30.891C2.88194 30.0252 1.57075 28.6233 0.84191 26.9235C0.113069 25.2237 0.011525 23.3308 0.554534 21.5664C1.09754 19.802 2.25161 18.2749 3.82068 17.2446C5.38974 16.2142 7.27703 15.7442 9.16191 15.9143C11.0468 16.0845 12.813 16.8843 14.1605 18.1778L11.7761 20.4978C11.0204 19.7869 10.0465 19.3358 9.00287 19.2134C7.95924 19.091 6.90309 19.3039 5.9954 19.8198C5.08772 20.3356 4.37828 21.1261 3.97523 22.0707C3.57219 23.0154 3.49763 24.0623 3.76294 25.052C4.02824 26.0416 4.61885 26.9198 5.44475 27.5525C6.27064 28.1852 7.28652 28.5379 8.33753 28.5566C9.38854 28.5754 10.417 28.2594 11.2663 27.6566C12.1155 27.0538 12.7389 26.1974 13.0414 25.2178H8.40951V22.5112H16.5998Z" fill="#0F5156"/>
					<path d="M18.2716 31.6222V16.1067H29.0153V18.8089H21.6564V22.5067H28.4763V25.2134H21.6564V28.9156H29.061V31.6222H18.2716Z" fill="#0F5156"/>
					<path d="M45.0532 16.1067V31.6222H42.1389L35.2048 21.8445H35.086V31.6222H31.7149V16.1067H34.6749L41.5542 25.8845H41.6958V16.1067H45.0532Z" fill="#0F5156"/>
					<path d="M61.1688 16.1067V31.6222H58.259L51.3204 21.8445H51.2016V31.6222H47.8305V16.1067H50.7905L57.6743 25.8845H57.8159V16.1067H61.1688Z" fill="#0F5156"/>
					<path d="M63.9506 31.6222V16.1067H74.6943V18.8089H67.3217V22.5067H74.1416V25.2134H67.3217V28.9156H74.7263V31.6222H63.9506Z" fill="#0F5156"/>
					<path d="M79.0704 31.6222H75.4572L80.9615 16.1067H85.3055L90.787 31.6222H87.1738L83.1769 19.6534H83.0536L79.0704 31.6222ZM78.8465 25.5245H87.3794V28.0845H78.8465V25.5245Z" fill="#0F5156"/>
					<path d="M97.5887 31.6221V23.2266C95.6932 22.9607 93.8916 22.2542 92.3364 21.1668C90.7813 20.0795 89.5185 18.6434 88.6551 16.9803C87.7916 15.3172 87.353 13.476 87.3763 11.6129C87.3996 9.74973 87.8842 7.91953 88.7891 6.27736C89.6939 4.63519 90.9923 3.22946 92.5742 2.17931C94.1561 1.12916 95.9749 0.465534 97.8764 0.244679C99.778 0.0238238 101.706 0.252249 103.498 0.910593C105.289 1.56894 106.891 2.6378 108.168 4.02659C108.318 4.18855 108.434 4.37767 108.508 4.58314C108.583 4.78861 108.616 5.00642 108.604 5.22412C108.592 5.44183 108.537 5.65516 108.44 5.85194C108.344 6.04873 108.209 6.22512 108.042 6.37104C107.876 6.51695 107.681 6.62953 107.47 6.70235C107.259 6.77518 107.035 6.80682 106.811 6.79547C106.588 6.78412 106.368 6.73 106.166 6.63621C105.964 6.54241 105.783 6.41077 105.633 6.24881C104.735 5.27141 103.611 4.51541 102.355 4.04299C101.098 3.57057 99.7436 3.39525 98.4036 3.53144C97.0636 3.66763 95.776 4.11145 94.6466 4.82638C93.5173 5.5413 92.5786 6.50691 91.9077 7.64374C91.2369 8.78057 90.853 10.0561 90.7877 11.3655C90.7225 12.6749 90.9776 13.9806 91.5323 15.1753C92.0869 16.3699 92.9252 17.4194 93.9781 18.2373C95.031 19.0552 96.2685 19.6182 97.5887 19.8799V16.7333C97.5911 14.9777 98.3089 13.2946 99.5848 12.0532C100.861 10.8118 102.59 10.1134 104.395 10.111H109.502C109.953 10.1122 110.385 10.2874 110.704 10.5982C111.022 10.9089 111.201 11.3299 111.201 11.7688C111.198 14.2469 110.378 16.6586 108.862 18.6498C107.346 20.6409 105.213 22.1064 102.778 22.831C102.181 23.0106 101.57 23.1429 100.951 23.2266V31.6221H97.5887ZM104.395 13.3999C103.493 13.4011 102.628 13.7503 101.99 14.371C101.352 14.9917 100.993 15.8332 100.992 16.711V19.8577C101.263 19.8041 101.531 19.7374 101.796 19.6577C103.122 19.2614 104.328 18.5552 105.309 17.6007C106.29 16.6462 107.016 15.4725 107.423 14.1821C107.506 13.9251 107.574 13.664 107.629 13.3999H104.395Z" fill="#6FCE1A"/>
				</svg>
			</NuxtLink>
			<div class="items-center md:space-x-24 flex">
				<ul class="hidden md:flex items-center space-x-12 uppercase text-sm font-medium text-green-dark">
					<li><NuxtLink to="/como-funciona" class=" hover:text-green-light transition-colors duration-300">Como funciona</NuxtLink></li>
					<li><NuxtLink to="/contato" class=" hover:text-green-light transition-colors duration-300">Contatos</NuxtLink></li>
				</ul>
				<div class="flex items-center">
					<div class="hidden sm:block mr-6 md:mr-0">
						<NuxtLink to="pre-analise" class="btn">Pré-análise</NuxtLink>
					</div>
					<button @click="showMenu = !showMenu" type="button" class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-dark hover:text-green-light hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-light" aria-controls="mobile-menu" aria-expanded="false">
						<span class="sr-only">Exibir Menu Principal</span>
						<svg v-if="!showMenu" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<svg v-if="showMenu" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
		<div v-show="showMenu" class="md:block" id="mobile-menu">
			<div class="px-2 pt-8 pb-3 space-y-1">
				<!-- <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a> -->
				<NuxtLink to="/como-funciona" class="text-green-dark hover:text-green-light block px-3 py-2 rounded-md text-base font-medium uppercase">Como Funciona</NuxtLink>
				<NuxtLink to="/contato" class="text-green-dark hover:text-green-light block px-3 py-2 rounded-md text-base font-medium uppercase">Contatos</NuxtLink>
			</div>
				<div class="flex items-center space-x-8 divide-x divide-green-dark divide-opacity-10 pl-5 mt-5">
					<a href="https://instagram.com/gennea.assessoria/" class="flex items-center" title="Instagram">
						<p class="flex items-center text-xs font-medium">
							<svg aria-hidden="true" focusable="false" data-icon="instagram" class="h-6 w-6 text-green-dark mr-2 opacity-50 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" > <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" ></path> </svg>
							<span class="hidden lg:block"> @gennea.assessoria </span>
						</p>
					</a>
					<a href="http://api.whatsapp.com/send?phone=5584994273994" title="WhatsApp">
						<p class="flex items-center text-xs font-medium pl-8">
							<svg aria-hidden="true" focusable="false" data-icon="whatsapp" class="h-6 w-6 text-green-dark opacity-50 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
							<span class="hidden lg:block"> (84) 99427-3994 </span>
						</p>
					</a>
					<a href="mailto:contato@gennea.com.br" title="Enviar email">
						<p class="flex items-center text-xs font-medium pl-8">
							<svg aria-hidden="true" focusable="false" data-icon="envelope" class="h-6 w-6 text-green-dark opacity-50 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
							<span class="hidden sm:block"> contato@gennea.com.br </span>
						</p>
					</a>
				</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			showMenu: false,
		}
	},
}
</script>