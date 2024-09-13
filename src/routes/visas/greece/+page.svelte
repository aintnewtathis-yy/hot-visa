<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Виза в Грецию - Оформление визы в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление визы в Грецию в Визовом агентстве Москва. Полная поддержка в сборе документов и быстрое оформление визы для вашего путешествия.">
	<meta name="og:title" content="Виза в Грецию - Оформление визы в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете поездку в Грецию? Визовое агентство Москва предлагает профессиональное оформление визы. Быстрое и удобное оформление с полным сопровождением.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в Грецию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ГРЕЦИЮ</h1>
				<h2 class="--announce --text-xl">от 8 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/greece-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Виза в Грецию — это шанс быстро организовать ваше путешествие благодаря HOT Visa. Мы
							предлагаем подачу на шенгенскую визу с полным пакетом документов без вашего личного
							присутствия. Наши специалисты с 20-летним опытом гарантируют быстрое и надежное
							получение визы.
						</p>
						<p>
							Мы работаем c юридическими и физическими лицами. Оказываем всестороннюю
							консультационную поддержку. Каждый клиент получает персонального менеджера,
							оповещающего о продвижении дел.
						</p>
						<a href="#docs">какие нужны документы</a>
						<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
					</div>
				</div>
			</div>
			<div class="visa-additional">
				<h2 class="--text-xl-l">Виза в Грецию</h2>
				<div class="visa-additional-text">
					<p>
						Греция привлекает туристов своей уникальной природной красотой, приятным климатом и
						богатым культурным наследием, включая исторические памятники и археологические объекты.
						Эта страна также известна своей доступностью в плане цен и удобства транспортного
						сообщения.
					</p>
					<p>
						Наш визовый центр HOT Visa предоставляет услуги по оформлению визы в Грецию в самые
						короткие сроки, с учетом всех необходимых документов и требований.
					</p>
					<p>
						Исторические и культурные связи между Россией и Грецией глубоки и значимы. Российская
						интеллигенция всегда находила вдохновение в греческой истории, философии и литературе.
						Религиозное влияние также играет важную роль, учитывая, что обе страны являются центрами
						православной традиции. На горе Афон находится Афонский монастырь, который имеет особое
						значение для православных христиан, и русские монахи внесли значительный вклад в его
						развитие.
					</p>
					<p>
						В современных условиях Россия и Греция продолжают поддерживать дипломатические и
						экономические отношения, включая сотрудничество в сферах туризма, торговли и культурного
						обмена. Благодаря этому тесному взаимодействию многие россияне предпочитают посетить
						Грецию — будь то туристические поездки, религиозные паломничества, культурные
						мероприятия или деловые визиты.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Грецию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Опросник</li>
					<li>Справка о доходах с места работ</li>
					<li>
						Выписка из банка с движением средств за последние 3 мес. о наличии денег (100 у.е на 1
						день поездки)
					</li>
					<li>Фотографии 2 шт, цветные, на белом фоне</li>
					<li>Общегражданский паспорт (копии)</li>
					<li>Заграничный паспорт</li>
					<li>Аннулированный загранпаспорт, при наличии в нем виз (копии)</li>
					<li>Страховой полис (стоимость оформления 2 евро на 1 день поездки)</li>
				</ul>
				<p style="color: #808080;	">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в Грецию</h3>
				<div class="visa-variants-element">
					<p>• Категория A</p>
					<div>
						<p>
							Транзитная аэропортная виза, необходимая для транзитных перелетов через аэропорты
							Шенгенской зоны, если требуется покинуть транзитную зону.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория B</p>
					<div>
						<p>
							Упразднена после 2010 года. Ранее выдавалась для транзитного проезда через Шенгенскую
							зону в страну, не являющуюся частью Шенгенского соглашения.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория C</p>
					<div>
						<p>
							Туристическая виза для посещения Греции. Включает однократные, двукратные и
							многократные подкатегории, позволяющие пребывать до 90 дней в полугодии.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория D</p>
					<div>
						<p>
							Национальная виза для длительного пребывания в Греции, например, для работы или учебы.
							Может быть однократной или многократной, в зависимости от цели пребывания.
						</p>
					</div>
				</div>
				<p>
					Эти категории виз регулируют различные аспекты поездок в Грецию, от короткосрочных
					туристических поездок до долгосрочных пребываний для работы или учебы.
				</p>
				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-list">
				<h3 class="--text-xl-l --announce">Страховка ВЗР в подарок каждому клиенту</h3>
				<ul>
					<li class="--no-list-style">В минимальный пакет услуг по полису ВЗР входит:</li>
					<li>Госпитализация</li>
					<li>Нахождение в стационаре или амбулаторное лечение (по назначению врача)</li>
					<li>Экстренное медицинское вмешательство</li>
					<li>Транспортировка в Россию при необходимости</li>
				</ul>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
		</div>
	</div>
</section>

<Cta />

<style lang="scss">
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
			background-image: url('/greece-hero.webp');
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
		}
	}
</style>
