<template>
	<div>
		<header-comp />

		<section class="bg-green-light10 py-8">
			<!-- Hero -->
			<div class="econtainer padding-auto">
				<navigation />
				<div class="econtainer-sm mx-auto pt-6 pb-10">
					<h1 class="text-3xl text-green-dark font-bold pt-16 mb-5">Pré-análise</h1>
					<p class="text-green-dark text-lg opacity-80 mb-8">
						Preencha o formulário abaixo, e entraremos em contato solicitando as demais informações necessárias para
						fazer a análise prévia de viabilidade do pedido.
					</p>
					<p class="text-green-dark text-lg font-bold opacity-80 mb-8">
						Não se preocupe, é gratuito e sem compromisso!
					</p>
					<p class="text-green-dark text-lg opacity-80 mb-8">
						Na pré-análise faremos a pesquisa genealógica para descobrir se você possui ascendência judaica sefardita.
					</p>
					<p class="text-green-dark text-lg opacity-80 mb-8">
						Se confirmada, passamos os detalhes para fechar o contrato de elaboração do relatório genealógico, do
						requerimento do seu certificado e da sua nacionalidade portuguesa!
					</p>
					<NuxtLink to="/como-funciona" class="link">Saiba como funciona o processo</NuxtLink>
				</div>
			</div>
		</section>

		<section>
			<div class="mb-12">
				<div class="econtainer-sm padding-auto text-green-dark">
					<h2 class="text-2xl font-bold pt-16 mb-10">Peça agora</h2>

					<form  name="preanalise" method="POST" data-netlify-recaptcha="true" data-netlify="true">
						<input type="hidden" name="form-name" value="PreAnalise">
						<div class="space-y-6">
							<div>
								<label for="nome" class="block text-sm font-medium text-gray-700">Nome</label>
								<div class="mt-1 flex rounded-md shadow-sm">
									<input type="text" name="nome" id="nome" class=" mt-1 focus:ring-green-dark focus:border-green-dark block w-full shadow-sm sm:text-sm border-green-light border-opacity-30 py-3 rounded-md " placeholder="Nome Completo" />
								</div>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
								<div class="mt-1 flex rounded-md shadow-sm">
									<input type="text" name="email" id="email" class=" mt-1 focus:ring-green-dark focus:border-green-dark block w-full shadow-sm sm:text-sm border-green-light border-opacity-30 py-3 rounded-md " placeholder="E-mail" />
								</div>
							</div>
							<div>
								<label for="telefone" class="block text-sm font-medium text-gray-700">Telefone / Whatsapp</label>
								<div class="mt-1 flex rounded-md shadow-sm">
									<input type="text" name="telefone" id="telefone" class=" mt-1 focus:ring-green-dark focus:border-green-dark block w-full shadow-sm sm:text-sm border-green-light border-opacity-30 py-3 rounded-md " placeholder="Telefone" />
								</div>
							</div>
							<div>
								<label for="mensagem" class="block text-sm font-medium text-gray-700">Acrescente alguma informação ou dúvida, se desejar</label>
								<div class="mt-1 flex rounded-md shadow-sm">
									<textarea id="mensagem" name="mensagem" rows="3" class="shadow-sm focus:ring-green-dark focus:border-green-dark mt-1 block w-full sm:text-sm border border-green-light border-opacity-30 rounded-md" placeholder="Quero solicitar a pré-análise."></textarea>
								</div>
							</div>
							<div>
								<button type="button" class="btn">
                  Enviar
                </button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	<footer-comp />
	</div>
</template>

<script>
import Disclosure from "~/components/Disclosure.vue";
import FooterComp from '~/components/FooterComp.vue';
import Header from "~/components/HeaderComp.vue";
import Navigation from "~/components/Navigation.vue";

export default {
	components: { Disclosure, Header, Navigation, FooterComp },
};
</script>
,
FooterComp