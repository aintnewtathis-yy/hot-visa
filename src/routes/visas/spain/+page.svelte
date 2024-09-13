<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Виза в Испанию - Оформление визы в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление визы в Испанию в Визовом агентстве Москва. Полное сопровождение, помощь в сборе документов и быстрое оформление визы для вашего путешествия.">
	<meta name="og:title" content="Виза в Испанию - Оформление визы в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете поездку в Испанию? Визовое агентство Москва предлагает профессиональное оформление визы. Быстрое и удобное оформление с полным сопровождением.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в Испанию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ИСПАНИЮ</h1>
				<h2 class="--announce --text-xl">от 10 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/spain-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Получение визы в Испанию может быть сложным процессом, но с помощью HOT Visa он
							становится более удобным и быстрым. Мы предлагаем полное сопровождение вашего
							заявления, начиная с сбора необходимых документов до личной подачи в консульстве. Это
							позволяет сэкономить ваше время и избежать лишних затрат. Обратитесь к нам, и мы
							сделаем все возможное, чтобы ваше путешествие в Испанию началось с комфорта и
							уверенности в получении визы.
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
				<h2 class="--text-xl-l">Виза в Испанию</h2>
				<div class="visa-additional-text">
					<p>
						Испания, с её богатой историей, культурой и привлекательными туристическими
						направлениями, действительно является одной из любимых стран для российских туристов.
						Красивые пляжи Средиземноморского побережья, уникальная архитектура, вкуснейшие
						традиционные блюда и динамичная ночная жизнь делают Испанию привлекательной для отдыха и
						жизни.
					</p>
					<p>
						Визовый центр HOT Visa в Москве предлагает профессиональное сопровождение процесса
						оформления испанских виз, обеспечивая высокий уровень сервиса и гарантию положительного
						результата. Наши специалисты имеют многолетний опыт работы с консульствами и знают все
						тонкости и требования при подаче заявлений.
					</p>
					<p>
						Мы предлагаем различные тарифы, которые учитывают ваше предпочтение по объему услуг: от
						полного сопровождения до подготовки документов для самостоятельной подачи. Это позволяет
						выбрать оптимальный вариант, который соответствует вашим потребностям и бюджету.
					</p>
					<p>
						Если вы мечтаете о поездке в Испанию, оставьте заявку на нашем сайте или свяжитесь с
						нами по указанным телефонам — мы с удовольствием поможем вам начать процесс получения
						визы и сделаем ваше путешествие максимально комфортным и беззаботным.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Испанию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Опросник на шенгенскую визу</li>
					<li>Справка о доходах с места работы</li>
					<li>
						Выписка из банка с движением средств за последние 3 мес. о наличии денег (100 у. е. на 1
						день поездки)
					</li>
					<li>Фотографии 2 шт, цветные, на белом фоне</li>
					<li>Общегражданский паспорт (копии)</li>
					<li>Заграничный паспорт</li>
					<li>Аннулированный загранпаспорт при наличии в нем виз (копии)</li>
					<li>Страховой полис (80 р на день поездки)</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в Испанию</h3>
				<div class="visa-variants-element">
					<p>• Категория A (транзитная виза)</p>
					<div>
						<p>
							Предназначена для лиц, путешествующих через аэропорты Шенгенской зоны. Россияне не
							нуждаются в предварительном оформлении этой визы.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория C (краткосрочная виза)</p>
					<div>
						<p>
							Популярна для туристических поездок. Выдается на 180 дней, с общим сроком пребывания
							до 90 дней в Шенгенской зоне.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория D (долгосрочная виза)</p>
					<div>
						<p>
							Национальная виза для пребывания более 90 дней. Выдается на основании работы, учебы,
							вступления в брак с гражданином Испании, статуса беженца или инвестиций.
						</p>
					</div>
				</div>

				<p>
					Визовый центр HOT Visa в Москве предлагает полное сопровождение оформления испанских виз,
					включая сбор необходимых документов и подачу заявлений. Мы гарантируем высокое качество
					услуг и ориентированы на успешное получение визы для наших клиентов. У нас есть различные
					тарифы, включая возможность подготовки документов для самостоятельной подачи.
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
			background-image: url('/spain-hero.webp');
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
