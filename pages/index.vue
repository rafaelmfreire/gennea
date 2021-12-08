<template>
<div class="">
	<!-- <header-comp /> -->
	<!-- <div class="fixed z-50 hover:opacity-90 cursor-pointer bottom-5 right-5">
		<a href="http://api.whatsapp.com/send?phone=5584994273994" title="Link para o WhatsApp"><img src="~/assets/whatsapp-button.svg" alt=""></a>
	</div> -->
	<section class="bg-green-light10 py-8"> 
		<div class="econtainer padding-auto">
			<navigation />

			<div class="flex flex-col lg:flex-row justify-between  mt-16 sm:mt-24 text-center lg:text-left px-4 xl:px-0">
				<div data-aos="fade-right" class="mt-6">
					<h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-green-dark font-bold tracking-tight mb-5">Obtenha a cidadania <br />portuguesa para você <br />e toda sua família</h1>
					<p class="mx-auto lg:mx-0 text-green-dark opacity-80 mb-8 w-full sm:w-7/12 lg:w-11/12 text-base lg:text-sm xl:text-base">Fazemos estudo genealógico familiar em busca de ascendência Judaica Sefardita e todo o processo burocrático para fins de obtenção da cidadania portuguesa conforme Decreto Lei nº 30-A/2015</p>

					<div class="sm:space-x-6 mb-8 flex flex-col justify-center lg:justify-start sm:flex-row space-y-8 sm:space-y-0 sm:items-center">
						<NuxtLink to="/pre-analise" class="btn">Faça a pré-análise</NuxtLink>
						<div>
							<NuxtLink to="/como-funciona" class="link">Saiba como funciona</NuxtLink>
						</div>
					</div>

					<ul class="text-xs font-medium text-left space-y-3 check mx-auto inline-block">
						<li class="flex items-center leading-3">Pré-análise gratuita e sem compromisso</li>
						<li class="flex items-center leading-3">Mais de 100 pessoas já deram entrada no processo conosco</li>
					</ul>
				</div>
				<img class="mx-auto mt-12 lg:mt-0 h-auto max-w-full md:max-w-[516px] md:max-h-[472px]" src="~/assets/passports.png"  alt="Ilustrações de passaportes português e brasileiro">
				<!-- <div class="w-full max-w-[671px]">
					<div class="w-full relative" style="height: 533px">
						<img data-aos="zoom-in" src="~/assets/passport-br.png" alt="Ilustração de um passaporte brasileiro" style="top: 60px; left: 115px;" class="absolute">
						<img data-aos="zoom-in" src="~/assets/passport-pt.png" alt="Ilustração de um passaporte português" class="absolute top-0 right-0">
						<img data-aos="zoom-out" data-aos-delay="500" src="~/assets/carimbo.svg" alt="Carimbo circular com o logo da Gennea" class="absolute top-[160px] right-[30px]" >
					</div>
				</div> -->
			</div>
		</div>
	</section> 

	<section>
		<div class="mb-12" style="background-image: linear-gradient(to bottom, #F1FAE8 70%, white 16px);">
			<div class="econtainer mx-auto md:px-4">
				<h2 data-aos="zoom-in" class="text-center text-3xl text-green-dark font-bold pt-16 mb-12">Benefícios de ter a cidadania</h2>
				<div>
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:-ml-px">
						<div data-aos="fade-up" class="bg-white p-8 md:rounded-tl-md border lg:rounded-l-md border-green-dark border-opacity-10 shadow-lg w-full -mb-1 sm:ml-px lg:ml-1 lg:mb-0">
							<div class="items-center mb-4">
								<img src="~/assets/passport-icon.svg" alt="Ícone de passaporte">
								<h3 class="text-green-dark text-lg font-bold mt-4">Passaporte Europeu</h3>
							</div>
							<p class="text-green-dark">Morar e transitar em qualquer um dos 27 países que fazem parte da União Européia</p>
						</div>
						<div data-aos="fade-up" class="bg-white p-8 md:rounded-tr-md lg:rounded-none border border-green-dark border-opacity-10 shadow-lg w-full mt-px sm:mt-0 sm:-mb-1 lg:ml-px lg:mb-0">
							<div class="items-center mb-4">
								<img src="~/assets/work-icon.svg" alt="Ícone trabalhando">
								<h3 class="text-green-dark text-lg font-bold mt-4">Viver como europeu</h3>
							</div>
							<p class="text-green-dark">Como cidadão, você pode não só morar, mas também trabalhar e estudar na europa</p>
						</div>
						<div data-aos="fade-up" class="bg-white p-8 md:rounded-bl-md lg:rounded-none border border-green-dark border-opacity-10 shadow-lg w-full -mt-px sm:-mt-1 sm:ml-px lg:-ml-px lg:mt-0">
							<div class="items-center mb-4">
								<img src="~/assets/kids-icon.svg" alt="Ícone de crianças">
								<h3 class="text-green-dark text-lg font-bold mt-4">Repassar para filhos</h3>
							</div>
							<p class="text-green-dark">Depois de adquirir a cidadania, seus descendentes terão os mesmos direitos</p>
						</div>
						<div data-aos="fade-up" class="bg-white p-8 md:rounded-br-md lg:rounded-r-md border border-green-dark border-opacity-10 shadow-lg w-full -mt-1 lg:-ml-1 lg:mt-0">
							<div class="items-center mb-4">
								<img src="~/assets/briefcase-icon.svg" alt="Ícone de crianças">
								<h3 class="text-green-dark text-lg font-bold mt-4">Investir e empreender</h3>
							</div>
							<p class="text-green-dark">Situação financeira do país muito estável, com taxas de juros baixíssimas para investir e empreender</p>
						</div>
					</div>
					<!-- <ul class="flex flex-col lg:flex-row items-start space-y-0 sm:space-y-8 lg:space-y-0 lg:-space-x-px sm:mx-8 lg:mx-0">
						<li data-aos="fade-up" class="bg-white p-8 min-h-[325px] sm:rounded-l-md border border-green-dark border-opacity-10 shadow-lg w-full lg:w-1/4">
							<div class="items-center mb-4">
								<img src="~/assets/passport-icon.svg" alt="Ícone de passaporte">
								<h3 class="text-green-dark text-lg font-bold mt-4">Passaporte Europeu</h3>
							</div>
							<p class="text-green-dark">Morar e transitar em qualquer um dos 27 países que fazem parte da União Européia</p>
						</li>
						<li data-aos="fade-up" class="bg-white p-8 min-h-[325px]  border border-green-dark border-opacity-10 shadow-lg w-full lg:w-1/4">
							<div class="items-center mb-4">
								<img src="~/assets/work-icon.svg" alt="Ícone trabalhando">
								<h3 class="text-green-dark text-lg font-bold mt-4">Viver como europeu</h3>
							</div>
							<p class="text-green-dark">Como cidadão, você pode não só morar, mas também trabalhar e estudar na europa</p>
						</li>
						<li data-aos="fade-up" class="bg-white p-8 min-h-[325px]  border border-green-dark border-opacity-10 shadow-lg w-full lg:w-1/4">
							<div class="items-center mb-4">
								<img src="~/assets/kids-icon.svg" alt="Ícone de crianças">
								<h3 class="text-green-dark text-lg font-bold mt-4">Repassar para filhos</h3>
							</div>
							<p class="text-green-dark">Depois de adquirir a cidadania, seus descendentes terão os mesmos direitos</p>
						</li>
						<li data-aos="fade-up" class="bg-white p-8 min-h-[325px] sm:rounded-r-md border border-green-dark border-opacity-10 shadow-lg w-full lg:w-1/4">
							<div class="items-center mb-4">
								<img src="~/assets/kids-icon.svg" alt="Ícone de crianças">
								<h3 class="text-green-dark text-lg font-bold mt-4">Investir e empreender</h3>
							</div>
							<p class="text-green-dark">Situação financeira do país é muito estável, com taxas de juros baixíssimas para investir e empreender</p>
						</li>
					</ul> -->
				</div>
			</div>
		</div>
	</section> 

	<section data-aos="fade-right" class="bg-white py-16">
		<div class="econtainer-sm mb-8  padding-auto">
			<h2 class="text-3xl text-green-dark font-bold mb-4">O que diz o Decreto Lei?</h2>
			<p class="text-green-dark w-full md:w-5/6">“[...]O presente diploma vem permitir o exercício do direito ao retorno dos descendentes judeus sefarditas de origem portuguesa que o desejem, mediante a aquisição da nacionalidade portuguesa por naturalização, e sua integração na comunidade nacional, com os inerentes direitos e obrigações.”</p>
			<NuxtLink to="/decreto" class="link mt-8 inline-block">Entenda mais sobre o Decreto Lei</NuxtLink>
		</div>
	</section> 

	<section class="py-16" style="background: radial-gradient(97.74% 1836.86% at 1.28% 4.62%, #0F5641 0%, #0F5156 100%);">
		<div class="econtainer-sm mx-auto">
			<div class="mb-8 padding">
				<h2 class="text-3xl text-white font-bold mb-4">Etapas do processo</h2>
				<p class="text-white font-light mb-6">Com o objetivo de requerer a Nacionalidade Portuguesa, há três etapas a serem seguidas:</p>
			</div>

			<ul class="flex flex-col md:flex-row items-start space-y-1 sm:space-y-8 md:space-y-0 md:space-x-8 sm:mx-8 md:mx-0">
				<li data-aos="flip-left" class="bg-green-card sm:rounded-md p-6 card-process group w-full md:w-1/3 md:min-h-[236px]">
					<p class="text-green-light group-hover:text-white mb-8">01.</p>
					<h3 class="text-white font-bold group-hover:text-green-dark mb-2">Genealogia</h3>
					<p class="text-white  text-sm font-light group-hover:text-green-dark group-hover:text-opacity-100">Busca da ascendência judaica sefardita através de documentos, relatos de familiares e livros históricos</p>
				</li>
				<li data-aos="flip-left" class="bg-green-card sm:rounded-md p-6 card-process group w-full md:w-1/3 md:min-h-[236px]">
					<p class="text-green-light group-hover:text-white mb-8">02.</p>
					<h3 class="text-white font-bold group-hover:text-green-dark mb-2">Certificado</h3>
					<p class="text-white  text-sm font-light group-hover:text-green-dark group-hover:text-opacity-100">Requisição da certificação de ascendência na Comunidade Israelita de Lisboa (CIL)</p>
				</li>
				<li data-aos="flip-left" class="bg-green-card sm:rounded-md p-6 card-process group w-full md:w-1/3 md:min-h-[236px]">
					<p class="text-green-light group-hover:text-white mb-8">03.</p>
					<h3 class="text-white font-bold group-hover:text-green-dark mb-2">Nacionalidade</h3>
					<p class="text-white  text-sm font-light group-hover:text-green-dark group-hover:text-opacity-100">Requisição da nacionalidade portuguesa perante o Governo Português</p>
				</li>
			</ul>

			<NuxtLink to="/como-funciona" class="link-white mt-8 inline-block transition-colors duration-300 ml-4 sm:ml-8 md:ml-0">Veja mais detalhes sobre o processo</NuxtLink>

		</div>
	</section> 

	<!-- <section data-aos="fade-up" class="py-16 bg-green-light10">
		<div class="econtainer-sm mx-auto">
			<h2 class="text-3xl text-center text-green-dark font-bold mb-8">O que os clientes dizem</h2>
			<ul class="flex items-start space-x-8">
				<li class="w-1/2  text-green-dark">
					<p class="italic mb-3">“A GENNEA fez o trabalho de pesquisa dos documentos históricos e montou toda a árvore genealógica da minha família com toda a comprovação, e já demos entrada na requisição do certificado.”</p>
					<div class="flex items-center">
						<img src="~/assets/client-photo-1.png" alt="Márcia" class="mb-2 mr-4">
						<div>
							<p class="font-bold text-sm">Márcia <span class="uppercase">Suassuna</span></p>
							<p class="text-xs text-opacity-80">Descendente de Brites Mendes</p>
						</div>
					</div>
				</li>
				<li class="w-1/2  text-green-dark">
					<p class="italic mb-3">“É um trabalho super detalhado, eles cuidaram de tudo, descobriram toda minha árvore e já deram entrada no processo.”</p>
					<div class="flex items-center">
						<img src="~/assets/client-photo-2.png" alt="Márcia" class="mb-2 mr-4">
						<div>
							<p class="font-bold text-sm">Roberto <span class="uppercase">Macêdo</span></p>
							<p class="text-xs text-opacity-80">Descendente de Branca Dias</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section> -->


	<section class="py-16 bg-white" >
		<div class="econtainer-sm mx-auto">
			<h2 class="text-3xl text-green-dark font-bold mb-8 padding">Dúvidas Frequentes</h2>

			<ul class="divide-y divide-green-light divide-opacity-10">
				<disclosure title="O que é judeu sefardita?">Judeu Sefardita é o Judeu que habitou a península Ibérica até o início das perseguições, ao fim da Idade Média. Os Judeus Sefarditas foram perseguidos pelo Tribunal da Santa Inquisição e precisaram fugir de suas origens para as novas terras conquistadas pelos portugueses e espanhóis.</disclosure>
				<disclosure title="O que eu recebo quando contrato o serviço da Gennea?">
					<p>A Gennea se responsabiliza por todo o serviço de pesquisa, elaboração do relatório genealógico e acompanhamento processual junto à CIL e ao Governo Português.</p>
					<p class="mt-4">Você vai receber atualizações sobre o seu processo com certa frequência, suporte sempre à disposição e a oportunidade de resgatar o legado histórico da sua família.</p>
				</disclosure>
				<disclosure title="Quanto tempo demora?">
					<p>O processo de certificação tem uma duração <span class="font-bold">média</span> de oito meses.</p>
					<p class="mt-4">A primeira etapa dura cerca de cinco meses, no qual é feita a doação solicitada pela Comunidade, e o restante do período, no aguardo do certificado.</p>
				</disclosure>
				<disclosure title="Quem pode solicitar?">
					<p>Qualquer pessoa que consiga comprovar sua ligação direta com um Judeu Sefardita.</p>
					<p class="mt-4">É necessário possuir um passaporte válido e não ter antecedentes criminais.</p>
				</disclosure>
				<disclosure title="O processo é individual ou posso fazer com meus familiares?">O processo é individual mas a Comunidade Israelita de Lisboa (CIL) permite que qualquer parente de sangue até segundo grau do requerente principal pode se tornar um requerente dependente. Os custos do processo caem pela metade para o dependente.</disclosure>
				<disclosure title="Quanto custa?">
					<p>A Comunidade Israelita de Lisboa (CIL), que é quem emite o certificado de descendente de Judeu Sefardita, documento necessário para o requerimento de nacionalidade portuguesa, solicita uma doação de 500 Euros para o primeiro requerente e 250 Euros para cada dependentes dele no processo.</p>
					<p class="mt-4">Os custos de assessoria e elaboração do relatório genealógico variam de acordo com o estudo desenvolvido, e são analisados de acordo com cada situação.</p>
					<p class="mt-4"><NuxtLink class="nuxtlink" to="/pre-analise">Solicite a pré-análise</NuxtLink> para saber a viabilidade e o orçamento. <strong class="font-bold">É gratuita e sem compromisso</strong>.</p>
				</disclosure>
				<disclosure title="Existe garantia de que vou conseguir meu certificado e minha cidadania?">
					<p>Nós da Gennea trabalhamos de forma a enviar relatórios que tenham 100% de viabilidade, com provas suficientes desde o requerente até o Judeu Sefardita, mas os relatórios são avaliados por historiadores da própria Comunidade.</p>
					<p class="mt-4">Podemos garantir a viabilidade do processo, segundo a legislação vigente, e oferecemos todo o apoio possível para dirimir quaisquer dúvidas ou solicitações da CIL, durante o processo.</p>
				</disclosure>
			</ul>
		</div>
	</section> <!-- Dúvidas -->


	<!-- <section class="py-16 bg-white">
		<div class="econtainer-sm mx-auto">
			<h2 data-aos="fade-up" class="text-3xl text-green-dark font-bold mb-8">Algumas famílias que já tem a ascendência sefardita comprovada</h2>

			<ul class="flex items-center justify-between">
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Suassuna</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Dantas</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Vilar</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Maia</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Macêdo</li>
			</ul>
			<ul class="flex items-center justify-between mt-4">
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Andrade</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Medeiros</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Vasconcelos</li>
				<li data-aos="flip-left" class="bg-green-light bg-opacity-30 hover:bg-opacity-100 text-xl font-bold uppercase text-green-dark px-6 py-2 rounded-md transition-colors duration-300">Cavalcante</li>
			</ul>

			<ul class="space-y-4 mt-8 circle">
				<li class="text-green-dark">Se você faz parte de alguma dessas famílias, são grandes as chances de você ter direito a nacionalidade portuguesa.</li>
				<li class="text-green-dark">Mas se você não faz parte ou não sabe, não se preocupe! Ainda é possível, através da pesquisa genealógica, descobrir se você possui ascendência judaico sefardita.</li>
			</ul>
		</div>
	</section>  -->

	<cta />

<footer-comp />
</div>
</template>