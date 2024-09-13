<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>ВНЖ в Израиль - Оформление вида на жительство в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление вида на жительство в Израиль в Визовом агентстве Москва. Полное сопровождение, помощь в сборе документов и консультации по всем вопросам ВНЖ.">
	<meta name="og:title" content="ВНЖ в Израиль - Оформление вида на жительство в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете получить вид на жительство в Израиле? Визовое агентство Москва предоставляет профессиональные услуги по оформлению ВНЖ. Консультации и поддержка на каждом этапе.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Гражданство Израиля</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">Гражданство Израиля</h1>
				<div class="visa-hero-info">
					<img src="/israel-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Гражданство Израиля — самый быстрый способ легально переехать в Израиль. Эксперты Hot
							Visa сделают большую часть задач за Вас. Комфортное и быстрое получение гражданства
							Израиля.
						</p>
						<p>
							Наши опытные специалисты с более чем 15-летним стажем помогут вам быстро и комфортно
							получить вид на жительство в Греции или Испании, предлагая индивидуальный подход к
							каждому клиенту.
						</p>
						<a href="#docs">какие нужны документы</a>
						<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
					</div>
				</div>
			</div>

			<div class="visa-text">
				<h3 class="--text-xl-l">Кто может претендовать на гражданство</h3>
				<div>
					<p>По крови</p>
					<ul>
						<li>Евреи</li>
						<li>Дети евреев</li>
						<li>Внуки евреев</li>
					</ul>
				</div>
				<div>
					<p>Брак</p>
					<ul>
						<li>Жены и мужья, вдовы и вдовцы евреев</li>
						<li>Жены и мужья детей евреев</li>
						<li>Жены и мужья внуков евреев</li>
					</ul>
				</div>
				<div>
					<p>Усыновление</p>
					<ul>
						<li>Лица, прошедшие процесс усыновления или удочерения евреями</li>
						<li>Лица, прошедшие процесс усыновления или удочерения детьми евреев</li>
					</ul>
				</div>
				<div>
					<p>Гиюр</p>
					<ul>
						<li>Люди, прошедшие гиюр</li>
					</ul>
				</div>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l">Что нужно для получения гражданства</h3>
				<div>
					<ul>
						<li>
							<span>Подготовить документы</span>
							<br />
							<br />
							Вы собираете пакет требуемых документов, наши специалисты его проверяют и помогают во взаимодействии
							с консульством и с записью на собеседование.
						</li>
						<li>
							<span>Пройти собеседование</span><br /><br />
							Мы консультируем по нюансам прохождения собеседования — правильные ответы позволяют повысить
							вероятность вашей репатриации.
						</li>
						<li>
							<span>Получить временную виз:</span>
							<br /><br />
							После прохождения собеседования вы получаете визовое разрешение, позволяющее пребывать
							на территории Израиля до 6 месяцев, то есть на период, в течение которого осуществляется
							процедура репатриации.
						</li>
						<li>
							<span>Посетить МВД Израиля</span>
							<br /><br />
							По прибытии в страну вам выдается израильское удостоверение личности, действительное на
							израильской территории, и удостоверение репатрианта. Далее вам необходимо обратиться в
							МВД с заявлением на выпуск биометрического паспорта.
						</li>
						<li>
							<span>Получить паспорт</span>
							<br /><br />
							Наш специалист получает ваш паспорт и доставляет его вам.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<Cta />

<style lang="scss">
	.--desc {
		display: flex;
		flex-direction: column;

		span {
			@include fluid-text(20, 16);
			color: #808080;
			letter-spacing: normal;
		}
	}
	.--announce {
		display: inline;
		span {
			@include fluid-text(16, 13);
			color: #808080;
			letter-spacing: normal;
			vertical-align: top;
			display: inline-block;
			width: 450px;
			margin-left: 20px;
		}

		@include tablet {
			display: flex;
			flex-direction: column;
			gap: 20px;

			span {
				width: 100%;
				margin: 0;
			}
		}
	}
	.visa {
		display: flex;
		flex-direction: column;
		gap: 160px;

		@include tablet {
			gap: 90px;
		}

		p,
		a {
			@include fluid-text(20, 16);
		}

		&-section {
			padding: 200px 0 0 0;

			@include tablet {
				padding: 0;
			}
		}

		&-mobile {
			height: 100dvh;
			background-image: url('/israel-hero.webp');
			background-position: center center;
			background-size: cover;
			margin-inline: -20px;
			padding: 0 20px;

			padding-top: 100px;

			p {
				font-size: 50px;
				text-transform: uppercase;
				color: #fff;
				line-height: 110%;
			}
		}

		&-hero {
			display: flex;
			flex-direction: column;
			gap: 60px;

			@include tablet {
				border-top: 1px solid #ededed;
				padding-top: 20px;
				margin-top: -30px;
				h1 {
					margin-bottom: -50px;
				}
			}

			&-desc {
				display: flex;
				gap: 100px;
			}

			&-info {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 60px;

				@include tablet {
					display: flex;
					img {
						display: none;
					}
				}

				div {
					display: flex;
					flex-direction: column;
					gap: 20px;

					a {
						padding-top: 10px;
						text-transform: uppercase;
						text-decoration: underline;

						@include tablet {
							display: none;
						}
					}
					button {
						margin-top: auto;

						@include mobile {
							display: none;
						}
					}
				}
			}
		}

		&-additional {
			display: flex;
			flex-direction: column;
			padding-top: 20px;
			border-top: 1px solid #ededed;
			gap: 90px;

			@include tablet {
				gap: 60px;
			}

			&-text {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
				row-gap: 20px;
				column-gap: 60px;
				align-items: flex-start;

				@include tablet {
					display: flex;
					flex-direction: column;
					gap: 30px;
				}
			}
		}

		&-list {
			display: flex;
			flex-direction: column;
			gap: 90px;
			padding-top: 20px;
			border-top: 1px solid #ededed;

			@include tablet {
				gap: 60px;

				button {
					display: none;
				}
			}

			ul {
				display: flex;
				flex-direction: column;
				gap: 30px;
				width: calc((100% - 60px) / 2);

				@include tablet {
					gap: 20px;
					width: 100%;
				}

				li {
					list-style-type: disc;
					list-style-position: inside;

					@include fluid-text(20, 16);
				}
			}
		}

		&-variants {
			display: flex;
			flex-direction: column;
			gap: 90px;
			padding-top: 20px;
			border-top: 1px solid #ededed;

			@include tablet {
				gap: 60px;

				button {
					display: none;
				}
			}

			&-element {
				display: flex;
				flex-direction: column;
				gap: 40px;
				width: 65%;

				@include tablet {
					gap: 30px;
					width: 100%;
				}

				P {
					text-transform: uppercase;
				}

				div {
					display: flex;
					flex-direction: column;
					gap: 20px;
					p {
						text-transform: none;
					}
					ul {
						display: flex;
						flex-direction: column;
						gap: 10px;

						li {
							@include fluid-text(16, 16);

							&:before {
								content: '- ';
								text-indent: -5px;
							}
						}
					}
				}
			}
		}

		&-text {
			display: flex;
			flex-direction: column;
			gap: 90px;
			padding-top: 20px;
			border-top: 1px solid #ededed;

			@include tablet {
				gap: 60px;

				button {
					display: none;
				}
			}

			p {
				width: 65%;

				@include tablet {
					width: 100%;
				}
			}
			div {
				display: flex;
				flex-direction: column;
				gap: 30px;

				ul {
					display: flex;
					flex-direction: column;
					gap: 40px;

					li {
						@include fluid-text(20, 16);

						list-style: disc inside;
					}
				}
			}
		}
	}
</style>
