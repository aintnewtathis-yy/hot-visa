<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в Францию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ФРАНЦИЮ</h1>
				<h2 class="--announce --text-xl">от 8 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/france-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Виза во Францию сроком до 5 лет! Личная подача с полным пакетом документов.
							Консультации и помощь специалистов с 20-летним опытом. Подача на визу без присутствия
							под ключ — мы сделаем все за вас. Экономьте ваше время и деньги с Hot Visa.
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
						Франция во все времена была притягательна для российских граждан. Это объясняется не
						только её особым шармом и уникальностью, но и многолетним тесным взаимодействием России
						и Франции на государственном уровне. Связи между странами формировались и укреплялись на
						протяжении веков, оказывая влияние на политику, культуру и экономику обеих наций. Именно
						поэтому французские земли притягивают российских граждан, которым для путешествия
						необходимо оформить визу во Францию.
					</p>
					<p>
						Франция славится своим богатым историческим и культурным наследием. Города, такие как
						Париж, Лион и Марсель, предлагают множество исторических достопримечательностей, музеев,
						художественных галерей и архитектурных шедевров. Французская кухня, признанная одной из
						самых изысканных в мире, высоко ценится россиянами. Кроме того, страна привлекает
						любителей шоппинга и моды, предлагая широкий выбор магазинов, бутиков и известных
						мировых брендов. Природные красоты Франции, от побережья Средиземного моря до винных
						регионов, горных хребтов и прекрасных парков, также не оставляют равнодушными.
						Туристические объекты, такие как Эйфелева башня, Лувр, Нотр-Дам де Пари, Мон-Сен-Мишель
						и Версальский дворец, привлекают туристов со всего мира, включая Россию.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Францию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Опросник для оформления шенгенской визы</li>
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
				<h3 class="--text-xl-l">Виды виз в Францию</h3>
				<div class="visa-variants-element">
					<p>• Категория A</p>
					<div>
						<p>
							Транзитно-аэропортная виза, выдаваемая гражданам, которые пребывают на территорию
							Франции исключительно для стыковочного рейса. Если покидать транзитную зону аэропорта
							не требуется, виза не нужна. В противном случае требуется оформить соответствующий
							разрешительный документ.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория B</p>
					<div>
						<p>
							Ранее эта виза выдавалась иностранным гражданам, пересекающим транзитную страну своим
							ходом (например, на автомобиле), на срок до 5 суток. С 2010 года эта виза была
							упразднена, и для подобных целей теперь выдается туристическая краткосрочная виза.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория C</p>
					<div>
						<p>
							Самая популярная виза — туристическая. Она имеет подкатегории:
							<br />
							• Однократная и двукратная краткосрочная виза.
							<br />
							• ногократная виза сроком до 90 дней, которая позволяет несколько раз въезжать в Шенгенскую
							зону и возвращаться, при условии, что не превышен общий лимит по дням пребывания за полгода.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Категория D</p>
					<div>
						<p>
							Национальная виза, выдаваемая на длительный срок (до года). Бывает однократной и
							многократной:
							<br />
							• Однократная выдается до достижения конкретной цели, например, обучения или работы.
							<br />
							• Многократная виза предназначена для постоянного проживания до получения гражданства.
						</p>
					</div>
				</div>

				<p>
					Франция входит в число стран ЕС, на территории которых действуют правила
					паспортно-визового контроля, разработанные в рамках Шенгенского соглашения. Консульства
					этих стран могут иметь свои особенности, но в целом соблюдается общая концепция выдачи виз
					и их категоризация.
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
			background-image: url('/france-hero.webp');
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
