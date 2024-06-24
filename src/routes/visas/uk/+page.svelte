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
				<p>Виза <br />в Великобританию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ВЕЛИКОБРИТАНИЮ</h1>
				<h2 class="--announce --text-xl">от 12 000 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/uk-hero.jpg" alt="statue of liberty" />
					<div>
						<p>
							Для посещения Великобритании требуется оформление визы, которую можно получить
							обратившись в британские визовые центры, расположенные в различных городах России.
							Наши специалисты готовы помочь вам в составлении правильного пакета документов и
							обеспечить получение быстрого и положительного решения.
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
				<h2 class="--text-xl-l">Виза в Великобританию</h2>
				<div class="visa-additional-text">
					<p>
						Великобритания расположена на северо-западном побережье континентальной Европы и
						является не только популярным туристическим направлением, но и местом для роста и
						развития для граждан России. Однако, для посещения этой страны необходимо получение
						визы, так как она не входит в Шенгенское соглашение. Если вам нужна помощь в оформлении
						визы, вы можете обратиться в наш визовый центр.
					</p>
					<p>
						Мы предлагаем профессиональную помощь в получении визы в Великобританию. Важно правильно
						определить тип визы, чтобы избежать отказа. Наши специалисты обладают большим опытом в
						сфере британской визовой политики и готовы помочь вам с выбором подходящей категории
						визы.
					</p>
					<p>
						Визовые разрешения делятся на иммиграционные и неиммиграционные. Неиммиграционные визы
						могут включать гостевые, рабочие, семейные, бизнес-визы и студенческие. Некоторые из них
						могут переходить в иммиграционные при определенных условиях, что может предоставить
						возможность на постоянное проживание.
					</p>
					<p>
						Мы предлагаем различные тарифные планы в зависимости от уровня поддержки и желаемого
						результата. Обратившись к нам, вы можете быть уверены, что ваша виза будет оформлена
						правильно и получит одобрение.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Великобританию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Опросник</li>
					<li>Справка о доходах с места работ</li>
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
			<div class="visa-text">
				<h3 class="--text-xl-l">Медицинская страховка</h3>
				<div>
					<p>
						Медицинская страховка не является обязательным документом для получения туристической
						визы в Великобританию, поэтому решение о приобретении полиса остается на усмотрение
						заявителя. Однако мы настоятельно рекомендуем оформить страховку на весь период
						пребывания за границей, чтобы обезопасить себя от неожиданных расходов на медицинские
						услуги и другие ситуации.
					</p>
					<p>
						Страховой полис обеспечивает возмещение расходов на медицинскую помощь, включая
						консультации врачей, транспортировку, лекарства, госпитализацию и прочие услуги. Он
						также может компенсировать утрату багажа или документов, а также возмещение расходов на
						юридическую помощь или гражданскую ответственность в случае определенных рисков.
					</p>
					<p>
						Стоимость страхового полиса рассчитывается индивидуально для каждого случая и зависит от
						таких факторов, как возраст туриста, уровень риска, выбранная страховая сумма и
						продолжительность поездки.
					</p>
					<p>
						Если у вас возникли вопросы или вам необходима помощь в выборе страховки, обратитесь к
						нашим специалистам, и мы поможем вам найти подходящий вариант, который соответствует
						вашим потребностям и бюджету.
					</p>
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
			background-image: url('/uk-hero.jpg');
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

						@include tablet {
							position: fixed;
							left: 20px;
							bottom: 20px;
							width: calc(100% - 40px);
							z-index: 2;
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
