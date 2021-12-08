<template>
<div>
	<!-- <header-comp /> -->

	<section class="bg-green-light10 py-8"> <!-- Hero -->
		<div class="econtainer padding-auto">
			<navigation />
			<div class="econtainer-sm mx-auto pt-6 pb-10">
				<h1 class="text-3xl text-green-dark font-bold pt-16 mb-5">Decreto Lei nº 30-A/2015</h1>
				<p class="text-green-dark text-lg opacity-80 mb-8">O <a class="text-green-light hover:underline" href="https://files.dre.pt/1s/2015/02/04102/0009200093.pdf">Decreto Lei nº 30-A/2015</a>, de 27 de fevereiro, do Ministério da Justiça Português, concede a possibilidade de Cidadania Portuguesa para descendentes de Judeus Sefarditas.</p>
				<NuxtLink to="/como-funciona" class="link">Saiba como funciona o processo</NuxtLink>
			</div>
		</div>
	</section> 

	<section>
		<div class="mb-12">
			<div class="econtainer-sm padding-auto text-green-dark">
				<h2 class="text-2xl font-bold pt-16 mb-10">Motivação da Lei</h2>
				<p class="mb-4">A possibilidade foi concedida, segundo o próprio texto da Lei, sob a seguinte motivação:</p>
				<p class="mb-4 italic">“Apesar das perseguições e do afastamento do seu território ancestral, muitos judeus sefarditas de origem portuguesa e seus descendentes mantiveram não só a língua portuguesa, mas também os ritos tradicionais do antigo culto judaico em Portugal, conservando, ao longo de gerações, os seus apelidos de família, objetos e documentos comprovativos da sua origem portuguesa, a par de uma forte relação memorial que os leva a denominarem-se a si mesmos como «judeus portugueses» ou «judeus da Nação portuguesa».</p>
				<p class="mb-8 font-bold">[...]O presente diploma vem permitir o exercício do direito ao retorno dos descendentes judeus sefarditas de origem portuguesa que o desejem, mediante a aquisição da nacionalidade portuguesa por naturalização, e sua integração na comunidade nacional, com os inerentes direitos e obrigações.”</p>
			</div>
		</div>
	</section>

	<cta />

	<footer-comp />

</div>
</template>

<script>
import Disclosure from '~/components/Disclosure.vue';
import FooterComp from '~/components/FooterComp.vue';
import Header from '~/components/HeaderComp.vue';
import Navigation from '~/components/Navigation.vue';

export default {
	head: {
		title: 'Sobre o Decreto Lei nº 30-A/2015 - GENNEA',
    meta: [
      { hid: "description-decreto", name: "description", content: "Entenda mais sobre o Decreto Lei nº 30-A/2015 do Ministério da Justiça Português." },
    ],
	},
	components: { Disclosure, Header, Navigation, FooterComp },
};


</script>
