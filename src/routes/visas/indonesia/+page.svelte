<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Виза в Индонезию - Оформление визы в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление визы в Индонезию в Визовом агентстве Москва. Полное сопровождение процесса, помощь в сборе документов и быстрое оформление визы.">
	<meta name="og:title" content="Виза в Индонезию - Оформление визы в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете поездку в Индонезию? Визовое агентство Москва предлагает профессиональные услуги по оформлению визы. Быстрое и удобное оформление с полным сопровождением.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза в Индонезию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ИНДОНЕЗИЮ</h1>
				<h2 class="--announce --text-xl">от 8 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/indonesia-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Для поездки в Индонезию гражданам России необходимо оформление визы, как бумажной, так
							и электронной. Также требуется специальное страхование. Наши специалисты помогут вам
							получить визу в Индонезию всего за 3 дня.
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
				<h2 class="--text-xl-l">Виза в Индонезию</h2>
				<div class="visa-additional-text">
					<p>
						Индонезия, расположенная в Юго-Восточной Азии и Океании, является крупнейшим островным
						государством, состоящим из более чем 17 000 островов, включая Суматру, Сулавеси, Яву, а
						также части Борнео и Новой Гвинеи. Расстояние между Индонезией и Россией превышает 7000
						километров. Несмотря на это, каждый год десятки тысяч россиян оформляют визу в
						Индонезию, делая это одним из популярнейших направлений туризма.
					</p>
					<p>
						Исторические связи между Россией и Индонезией, хотя и не так обширны, как с некоторыми
						другими странами, характеризуются дружественными отношениями. Это способствует тому, что
						многие россияне выбирают индонезийские острова в качестве места отдыха. Туристы
						приезжают сюда, чтобы познакомиться с уникальными традициями, насладиться красивыми
						пляжами и природными пейзажами, такими как вулканы, рисовые террасы и джунгли.
					</p>
					<p>
						Для россиян часто доступен "безвизовый режим" при поездке в Индонезию на срок до 30
						дней. Это означает, что виза не требуется для предварительного оформления в России, но
						прибывая в страну, необходимо получить Visa on Arrival (VOA), которая может быть
						оформлена как в электронном виде (e-VOA) перед поездкой.
					</p>
					<p>
						Визовый центр HOT Visa в Москве предлагает помощь с оформлением электронной визы для
						Индонезии. Хотя для краткосрочных поездок до 30 дней можно обойтись без предварительной
						визы, услуги HOT Visa особенно актуальны для тех, кто планирует длительное пребывание,
						работу или учебу в стране. Специалисты центра помогут собрать необходимые документы и
						записаться на прием в индонезийское консульство, обеспечивая оперативное и
						профессиональное обслуживание.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Индонезию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Загранпаспорт сроком действия от 6 месяцев</li>
					<li>Миграционную карту (заполняется в самолете)</li>
					<li>Таможенную декларацию</li>
					<li>Туристический ваучер или бронь отеля</li>
					<li>Обратные авиабилеты</li>
					<li>Квитанцию об уплате сбора</li>
					<li>
						В зависимости от цели поездки в Индонезию, для оформления визы могут потребоваться:
						авиабилеты в обе стороны, приглашение от работодателя или бизнес-партнера (для ведения
						предпринимательской деятельности), справка о зачислении в учебное заведение (для
						обучения), письмо от родственников и документы, подтверждающие родственную связь (если
						цель поездки – визит к родным).
					</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в Индонезию</h3>
				<div class="visa-variants-element">
					<p>• Visa on Arrival (VOA)</p>
					<div>
						<p>Выдается по прибытии в аэропорту Индонезии.</p>
						<p>
							Для получения требуется паспорт с сроком действия не менее 6 месяцев и обратный билет.
						</p>
						<p>Процесс оформления занимает около 1-1,5 часов.</p>
						<p>Может быть продлена на 30 дней через иммиграционную службу.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• E-VOA (электронная VOA)</p>
					<div>
						<p>Оформляется онлайн на специальном сайте до поездки.</p>
						<p>Выдается при прибытии в Индонезию.</p>
						<p>Действительна для въезда в течение 90 дней с момента выдачи.</p>
						<p>Может быть продлена электронно.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Бизнес-виза (212)</p>
					<div>
						<p>Действительна на 1 год с возможностью многократного въезда.</p>
						<p>Позволяет находиться в Индонезии до 60 дней за каждое посещение.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Социальная виза (211)</p>
					<div>
						<p>Для длительного пребывания до 180 дней.</p>
						<p>Можно продлить до 6 месяцев через визовый центр.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Студенческая KITAS</p>
					<div>
						<p>Необходимо быть зачисленным в индонезийское учебное заведение.</p>
						<p>Процесс включает оформление разрешения на обучение и получение визы KITAS.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Рабочая KITAS (312)</p>
					<div>
						<p>Требуется приглашение от индонезийской компании.</p>
						<p>Действительна от 6 месяцев до 5 лет.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Семейная KITAS (317/318)</p>
					<div>
						<p>Выдается супругам и детям индонезийских граждан или иностранных граждан с KITAS.</p>
						<p>Действительна на 1 год с возможностью продления до 5 лет.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Пенсионная KITAS (319)</p>
					<div>
						<p>Для лиц старше 55 лет.</p>
						<p>Выдается на 1 год с возможностью ежегодного продления до 5 лет.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Постоянный вид на жительство KITAP</p>
					<div>
						<p>Выдается лицам с визой KITAS, подтверждающим их вклад в развитие страны.</p>
					</div>
				</div>
				<p>
					Для получения долгосрочных виз часто требуется помощь визового центра, особенно если
					необходимо собрать большое количество документов или процедура продления визы.
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
			background-image: url('/indonesia-hero.webp');
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
