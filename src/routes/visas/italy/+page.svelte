<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Виза в Италию - Оформление визы в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление визы в Италию в Визовом агентстве Москва. Полное сопровождение, помощь в сборе документов и быстрое оформление визы для вашего путешествия.">
	<meta name="og:title" content="Виза в Италию - Оформление визы в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете поездку в Италию? Визовое агентство Москва предоставляет профессиональные услуги по оформлению визы. Быстрое и удобное оформление с полным сопровождением.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в Италию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ИТАЛИЮ</h1>
				<h2 class="--announce --text-xl">от 8 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/spain-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Мы предлагаем возможность получить визу в Италию сроком до 3 лет. Наша компания Hot
							Visa гарантирует быстрое и надежное оформление визы, включая личную подачу с полным
							пакетом необходимых документов. Наши специалисты помогут вам получить итальянскую визу
							максимально оперативно и эффективно.
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
				<h2 class="--text-xl-l">Виза в Италию</h2>
				<div class="visa-additional-text">
					<p>
						Италия безусловно является одним из самых привлекательных направлений для туристов по
						всему миру. Она привлекает своим богатым историческим наследием — древними руинами,
						средневековыми городами и ренессансными памятниками, а также изысканной итальянской
						кухней, предлагающей множество аутентичных и вкусных блюд. Привлекают также красивые
						природные пейзажи — живописное Амальфитанское побережье, величественные Альпы, озера
						Комо и Гарда, искусство и архитектура, а также мода и шоппинг.
					</p>
					<p>
						Взаимодействие между Россией и Италией имеет значительное историческое значение и
						оказывает влияние на многие аспекты жизни в обеих странах. Это сотрудничество
						продолжается и развивается, способствуя укреплению дружественных отношений между двумя
						государствами. Поэтому многие россияне предпочитают получить визу в Италию в Москве для
						туристических поездок, деловых визитов, посещения итальянских друзей и родственников,
						пользуясь услугами нашего визового центра HOT Visa.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Италию
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
				<h3 class="--text-xl-l">Виды виз в Индонезию</h3>
				<div class="visa-variants-element">
					<p>• Категория A (транзитная виза)</p>
					<div>
						<p>
							Транзитная аэропортная виза, которая требуется путешественникам, совершающим пересадки
							в аэропортах различных Шенгенских стран. Если вам нужно покинуть транзитную зону
							аэропорта или терминала, вы должны оформить эту визу. В противном случае она не
							требуется, если вы остаетесь в транзитной зоне.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория B</p>
					<div>
						<p>
							Ранее выдаваемая транзитная виза, которая до 2010 года позволяла путешественникам
							самостоятельно пересекать территории Шенгенских стран для достижения третьих
							государств. С 2010 года этот тип визы был упразднен, и его заменили краткосрочные визы
							категории C, которые могут быть выданы на срок до 5 дней.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория C</p>
					<div>
						<p>
							нааиболее популярный вид визы среди туристов, но также доступный и для других целей.
							Она может быть однократной, двукратной или многократной. Виза однократного въезда
							позволяет находиться в Италии на короткий срок и не предусматривает возвращения после
							выезда из страны. Виза двукратного въезда также краткосрочная, но разрешает одно
							возвращение в Италию. Многократная виза позволяет въезжать и выезжать из Италии
							несколько раз, но общий срок пребывания в Шенгенской зоне не должен превышать 90 дней
							за полугодие.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория D</p>
					<div>
						<p>
							Национальная виза, предназначенная для тех, кто планирует пребывание в Италии более
							длительное время. Она может быть выдана как однократная, если требуется пребывание до
							достижения определенной цели (например, обучение или работа), так и многократная, для
							постоянного проживания до получения гражданства.
						</p>
					</div>
				</div>

				<p>
					Эти категории виз позволяют различным категориям путешественников выбирать подходящий для
					них вариант в зависимости от цели поездки в Италию и другие страны Шенгенской зоны.
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
