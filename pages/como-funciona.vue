<template>
<div>
	<!-- <header-comp /> -->

	<section class="bg-green-light10 py-8"> <!-- Hero -->
		<div class="econtainer padding-auto">
			<navigation />
			<div class="econtainer-sm mx-auto pt-6 pb-10">
				<h1 class="text-3xl text-green-dark font-bold pt-16 mb-5">Como funciona</h1>
				<p class="text-lg text-green-dark opacity-80 mb-8">Em 2015 o Governo Português publicou o Decreto Lei nº 30-A/2015 que concede a possibilidade de Cidadania Portuguesa para descendentes de Judeus Sefarditas.</p>
				<NuxtLink to="/decreto" class="link">Saiba mais sobre o Decreto Lei</NuxtLink>
			</div>
		</div>
	</section> 

	<section>
		<div class="mb-12">
			<div class="econtainer-sm padding-auto text-green-dark">
				<h2 class="text-2xl font-bold pt-16 mb-10">Etapas do Processo</h2>

				<div class="bg-green-light20 rounded-md px-6 py-8 text-green-dark mb-8 border border-green-light">
					<h3 class="text-xl font-bold mb-6">Importante!</h3>
					<p class="mb-6">A CIL permite que um estudo genealógico já aprovado para um Requerente inicial seja reusado para outros membros da família<span class="font-bold">*</span>, dessa forma, o grupo familiar pode <strong class="font-bold">se beneficiar da divisão dos custos do processo</strong>.</p>
					<p class="leading-none">
						<small class="font-base leading-none">* ascendentes ou descendentes do Requerente inicial em linha direta ou colateral até três gerações.</small>
					</p>
				</div>
				<p class="mb-4">Diante do exposto no Decreto, com o objetivo de requerer a Nacionalidade Portuguesa, há três etapas a serem seguidas:</p>

				<h3 class="text-xl font-bold mt-8 mb-6">1. Pré-análise / Estudo genealógico</h3>
				<p class="mb-6">Nessa etapa é necessário coletar o maior número de informações familiares possível, qualquer tipo de documento ou informação sobre a família e seus antepassados pode ser útil, por mínima que seja.</p>

				<p class="mb-6">Exemplos de documentos que podem auxiliar na pesquisa:</p>
				<ul class="list-disc list-inside space-y-1 mb-8">
					<li>Certidão de nascimento do Requerente</li>
					<li>Certidão de casamento do Requerente (caso seja casado)</li>
					<li>Certidão de nascimento e casamento dos pais</li>
					<li>Livros históricos com registros familiares</li>
					<li>Certidões de óbito, nascimento ou casamento de qualquer parente</li>
					<li>Relatos de antepassados e familiares que foram importantes historicamente, tais como religiosos, militares, donos de engenho, comerciantes, políticos, etc.</li>
				</ul>
				<p class="mb-1">Custos envolvidos nesta etapa:</p>
				<p class="mb-6">No momento a pré-análise é gratuita. Aproveite!</p>

				<h3 class="text-xl font-bold mt-8 mb-6">2. Requerimento de Certificado na Comunidade Israelita de Lisboa (CIL)</h3>
				<p class="mb-6">Depois da análise de viabilidade e a confirmação da existência documentada de um ascendente Judeu, é necessário organizar a documentação para requerer a certificação, listada abaixo:</p>
				<ul class="list-disc list-inside space-y-1 mb-8">
					<li>Certidão de nascimento do Requerente</li>
					<li>Passaporte brasileiro com validade mínima de dois anos</li>
					<li>Comprovante de residência</li>
					<li>Relatório genealógico</li>
					<li>Formulário oficial da CIL</li>
					<li>Procuração para acompanhamento</li>
				</ul>
				<p class="mb-2">Custos envolvidos nesta etapa:</p>
				<ol class="list-decimal list-inside space-y-1 mb-6">
					<li>Custos de elaboração do relatório genealógico (GENNEA)</li>
					<li>Custos processuais para emissão do Certificado (CIL)</li>
					<li>Possíveis custos para obtenção de documentos pessoais (Cartório)</li>
				</ol>
				<p class="mb-6"><small class="font-base leading-none">* Os custos serão detalhados antes da assinatura do contrato.</small></p>

				<h3 class="text-xl font-bold mt-8 mb-6">3. Requerimento de nacionalidade portuguesa ao governo português</h3>
				<p class="mb-6">Após obtido o Certificado da CIL (etapa anterior), inicia-se outro processo completamente novo, que requer uma série de novos documentos que serão requisitados, conforme a orientação do governo português.</p>
				<p class="mb-6">OBS: É importante saber que é pré-requisito para a obtenção da nacionalidade portuguesa <strong class="underline font-bold">possuir certidão negativa de antecedentes criminais</strong> no Brasil e em qualquer país em que o requerente tenha morado por mais de um ano.</p>
				<p class="mb-2">Custos envolvidos nesta etapa:</p>
				<ol class="list-decimal list-inside space-y-1 mb-6">
					<li>Assessoria (GENNEA)</li>
					<li>Possíveis custos para obtenção de documentos pessoais (Cartório)</li>
					<li>Custos postais para envio dos documentos (Transportadora)</li>
					<li>Custos processuais do requerimento (Governo Português)</li>
				</ol>
				<p class="mb-6"><small class="font-base leading-none">* Os custos serão detalhados antes da assinatura do contrato.</small></p>
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
		title: 'Como funciona - GENNEA',
    meta: [
      { hid: "description-comofunciona", name: "description", content: "Como funciona o processo para obter a nacionalidade portuguesa pela via dos judeus sefarditas." },
    ],
	},
	components: { Disclosure, Header, Navigation, FooterComp },
};


</script>
