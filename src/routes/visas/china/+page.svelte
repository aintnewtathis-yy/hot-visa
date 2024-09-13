<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Виза в Китай - Оформление визы в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление визы в Китай в Визовом агентстве Москва. Помощь в сборе документов, консультации и быстрое оформление визы в Китай.">
	<meta name="og:title" content="Виза в Китай - Оформление визы в Визовом агентстве Москва">
	<meta name="og:description" content="Необходима виза в Китай? Визовое агентство Москва предлагает профессиональные услуги по оформлению визы. Быстро, удобно и с поддержкой на каждом этапе.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в Китай</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В КИТАЙ</h1>
				<h2 class="--announce --text-xl">от 18 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/china-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Виза в Китай. Быстрая подача и оформление однократной и многократной визы с агентством
							Hot Visa. Наши эксперты помогут вам получить мульти- и бизнес-визу в Китай. 99%
							успешных заявок, более 1000 выданных виз. Скидки для постоянных клиентов!
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
				<h2 class="--text-xl-l">Виза в Китай</h2>
				<div class="visa-additional-text">
					<p>
						В последнее время число российских туристов и бизнесменов, посещающих Китай,
						увеличивается, поскольку эта страна привлекает своими доступными ценами на разнообразные
						товары. Поэтому оформление визы для граждан России является первоочередной задачей для
						поездки в Китай.
					</p>
					<p>
						Рекомендуется сначала получить краткосрочную туристическую визу формата L, которая
						выдается для индивидуальных и групповых поездок. Группа должна состоять минимум из пяти
						человек, путешествующих вместе. С помощью наших квалифицированных сотрудников, которые
						помогут вам собрать документы и оформить визу в Китай, у вас не возникнет никаких
						проблем.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Китай
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Загранпаспорт и копия паспорта РФ</li>
					<li>2 фотографии цветного формата</li>
					<li>Справка, подтверждающая доход</li>
					<li>Банковская выписка</li>
					<li>Опросный лист (должен быть заполнен)</li>
					<li>Чек, подтверждающий оплату консульского сбора</li>
					<li>Медицинское страхование</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в Китай</h3>
				<div class="visa-variants-element">
					<p>• L виза</p>
					<div>
						<p>
							Предназначена для туристов, желающих посетить страну. Существует три подкатегории:
						</p>
						<ul>
							<li>
								Однократная L-3-30: действует 3 месяца, позволяет пребывать в стране до 30 дней без
								возможности повторного въезда.
							</li>
							<li>
								Двукратная L-3-30-2: действует 3 месяца, позволяет въезжать 2 раза, каждый раз на
								срок до 30 дней.
							</li>
							<li>
								L-6-30-2: двукратная виза, активна в течение 6 месяцев, позволяет находиться в
								стране по 30 дней при каждом въезде. Виза категории L также может быть оформлена для
								поездки по приглашению друзей или родственников.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• M виза</p>
					<div>
						<p>
							Предназначена для деловых целей, таких как встречи или заключение сделок. Имеет
							подкатегории, например, M-3-30/60/90 для однократного въезда, действует 3 месяца и
							разрешает находиться в стране до 30, 60 или 90 дней.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• F виза</p>
					<div>
						<p>
							Выдается для академических целей, таких как участие в конференциях или программах
							обмена. Имеет различные подкатегории с разными сроками действия и разрешенным временем
							пребывания.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• X виза</p>
					<div>
						<p>
							Предоставляется для учебных целей, таких как обучение или прохождение языковых курсов.
							Существует две подкатегории:
						</p>
						<ul>
							<li>
								Х1: даёт возможность пребывания до определенного количества дней в зависимости от
								программы обучения.
							</li>
							<li>
								Х2: предусматривает нахождение в стране более 180 дней по решению китайского
								министерства миграции.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Z виза</p>
					<div>
						<p>Предназначена для тех, кто собирается официально работать в Китае.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• S2 виза</p>
					<div>
						<p>
							Предоставляется для медицинских целей, таких как лечение в китайских лечебных
							учреждениях.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• C виза</p>
					<div>
						<p>
							Выдается членам экипажей транспортных средств, совершающих международные полеты или
							поездки.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• G виза</p>
					<div>
						<p>Предназначена для транзитных пассажиров, которые проезжают через Китай.</p>
					</div>
				</div>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l --announce">Стоимость визовых сборов</h3>
				<div class="table">
					<div class="table-first">
						<div><p>Страна</p></div>
						<div><p>Тип визы по количеству въездов</p></div>
						<div>
							<p>Общая сумма/чел</p>
							<div>
								<p>Обычная</p>
								<p>Срочная</p>
							</div>
						</div>
						<div>
							<p>Визовый сбор</p>
							<div>
								<p>Обычная</p>
								<p>Срочная</p>
							</div>
						</div>
					</div>
					<div class="table-second">
						<div>
							<p>Россия</p>
						</div>
						<div>
							<p>однократная</p>
							<p>двухкратная</p>
							<p>многократная</p>
						</div>
						<div>
							<div>
								<p>6300</p>
								<p>10300</p>
							</div>
							<div>
								<p>8800</p>
								<p>12800</p>
							</div>
							<div>
								<p>11200</p>
								<p>15200</p>
							</div>
						</div>
						<div>
							<div>
								<p>2500</p>
								<p>4500</p>
							</div>
							<div>
								<p>5000</p>
								<p>7000</p>
							</div>
							<div>
								<p>7400</p>
								<p>9400</p>
							</div>
						</div>
					</div>
				</div>
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
			background-image: url('/china-hero.webp');
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
		}
	}
	.table {
		display: flex;
		gap: 3px;
		flex-direction: column;

		@include mobile{
			p{
				font-size: 10px;
			}
		}

		&-first {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 3px;

			text-align: center;
			p {
				display: block;
				padding: 20px 0;
				width: 100%;
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 3px;
				text-align: center;
				justify-content: center;
				background-color: #808080;
				p {
					color: #fff;
				}

				&:has(div) {
					justify-content: end;
					background-color: #fff;
					p {
						background-color: #808080;
					}
				}

				div {
					display: grid;
					grid-template-columns: 1fr 1fr;
					background-color: #fff;
					gap: 3px;
					text-align: center;
					p {
						background-color: #ededed;

						padding: 10px 0;
						color: #000;
						display: block;
					}
				}
			}
		}
		&-second{
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 3px;

			text-align: center;
			p {
				display: block;
				padding: 10px 0;
				width: 100%;
				background-color: #ededed;
			}
			div{
				display: flex;
				flex-direction: column;
				gap: 3px;

				&:not(:has(div)){
					justify-content: center;

					&:not(:has(p:nth-child(2))){
						background-color: #ededed;
					}
				}

				div{
					display: flex;
					flex-direction: row;
					gap: 3px;
				}
			}
		}
	}
</style>
