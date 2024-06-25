<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores'

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в Индию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ИНДИЮ</h1>
				<h2 class="--announce --text-xl">от 8 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/india-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Для поездки в Индию гражданам России необходимо оформление визы, как бумажной, так и
							электронной. Также требуется специальное страхование. Наши специалисты помогут вам
							получить визу в Индию всего за 3 дня.
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
				<h2 class="--text-xl-l">Виза в Индию</h2>
				<div class="visa-additional-text">
					<p>
						Россия и Индия имеют долгую и разнообразную историю взаимодействия в различных сферах.
						Обе страны поддерживают сотрудничество и участвуют в региональных организациях, таких
						как Шанхайская Организация сотрудничества и БРИКС. Экономические связи между Россией и
						Индией разнообразны, и обе страны взаимно ценят друг друга как стратегических партнеров,
						стремясь увеличить влияние и сотрудничество.
					</p>
					<p>
						Индия привлекает россиян как экзотическое направление для туризма, бизнеса и культурного
						обмена. Россияне интересуются духовными путешествиями, уникальной кулинарией, природным
						разнообразием, йогой и медитацией, а также традиционными ремесленными изделиями.
					</p>
					<p>
						Оформление электронной визы в Индию возможно онлайн. Этот относительно новый способ
						получения визы, введенный в 2014 году, упрощает процесс и позволяет получить разрешение
						на въезд по прилету (Tourist Visa On Arrival - TvoA) сроком до 30 дней. Кроме того,
						другие виды виз, такие как бизнес-визы, студенческие и рабочие визы, также могут быть
						получены в электронном формате.
					</p>
					<p>
						Визовый центр HOT Visa предоставляет помощь в оформлении визы в Индию через консульство
						или онлайн. Если у вас возникли трудности с самостоятельным получением электронной визы,
						наши специалисты готовы помочь вам сделать визовый документ в любом удобном формате.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Индию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Опросник</li>
					<li>Справка о доходах с места работ</li>
					<li>Фотографии 2 шт, цветные, на белом фоне</li>
					<li>Копия паспорта РФ</li>
					<li>Копия первой страницы загранпаспорта</li>
					<li>
						Авиабилет (копия выкупленного авиабилета). Если билет на чартерный рейс, необходимо
						предоставить фирменный бланк агентства, где приобретался билет
					</li>
					<li>Опросный лист</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в Индию</h3>
				<div class="visa-variants-element">
					<p>• Туристическая виза (Tourist Visa On Arrival - TvoA или e-Visa)</p>
					<div>
						<p>Выдается по прибытии в Индию.</p>
						<p>
							Действительна в течение 30 дней, 1 года или 5 лет в зависимости от выбранной опции.
						</p>
						<p>Разрешает многократное посещение (M).</p>
						<p>Нельзя продлить пребывание в стране.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Транзитная виза</p>
					<div>
						<p>Выдается на 15 дней при наличии билетов туда-обратно.</p>
						<p>Может быть однократной (S) или двукратной (D).</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Бизнес-виза</p>
					<div>
						<p>Выдается на 1 год (срок может меняться).</p>
						<p>Позволяет находиться в стране до 6 месяцев в году.</p>
						<p>Разрешает многократное посещение (M).</p>
						<p>Требует подтверждения цели визита, например, приглашения от индийской компании.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Рабочая виза</p>
					<div>
						<p>Действительна на протяжении 1 года.</p>
						<p>Позволяет работать в Индии в течение этого периода.</p>
						<p>
							Подтверждение высокой квалификации и назначение на должность в местной компании
							обязательны.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Студенческая виза</p>
					<div>
						<p>Выдается на период обучения, который может составлять от 1 года до 5 лет.</p>
						<p>
							Разрешает однократное, двукратное или многократное посещение в зависимости от условий.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Медицинская виза</p>
					<div>
						<p>Действует в течение 60 дней.</p>
						<p>
							Может быть продлена еще на 2 месяца по ходатайству медицинского учреждения в Индии.
						</p>
						<p>Разрешает однократное, двукратное или многократное посещение.</p>
					</div>
				</div>
				<p>
					Электронные варианты виз (e-Visa) доступны для туристических, бизнес и медицинских целей.
					Они могут быть получены на официальном сайте E-Visa Индии. Однако самостоятельное
					получение визы может быть затруднительным из-за возможных ошибок в заполнении анкеты или
					технических проблем на сайте.
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
			background-image: url('/india-hero.webp');
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
