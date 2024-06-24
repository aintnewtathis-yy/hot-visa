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
				<p>Виза <br />в Германию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В ГЕРМАНИЮ</h1>
				<h2 class="--announce --text-xl">от 8 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/germany-hero.jpg" alt="statue of liberty" />
					<div>
						<p>
							Получение визы в Германию с высокой вероятностью одобрения — это то, что предлагает
							визовый центр Hot Visa. Мы предлагаем полное сопровождение с подачей всех необходимых
							документов, бесплатную консультацию и помощь опытных специалистов. Вы можете
							сэкономить свое время и избежать лишних затрат, поручив весь процесс нам.
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
				<h2 class="--text-xl-l">Виза в Германию</h2>
				<div class="visa-additional-text">
					<p>
						Германия, расположенная в Центральной Европе, является одной из ведущих и наиболее
						развитых стран Европейского союза. Она омывается Северным и Балтийскими морями и
						граничит с несколькими странами, включая Данию, Чехию, Польшу, Австрию, Швейцарию,
						Францию, Бельгию, Нидерланды и Люксембург.
					</p>
					<p>
						Германия состоит из 16 федеральных земель и имеет федеративную форму правления с
						парламентской системой. Официальным языком является немецкий, а большинство населения
						исповедует христианство.
					</p>
					<p>
						Для россиян интерес к получению визы в Германию весьма высок, учитывая исторические,
						экономические, культурные и образовательные связи между двумя странами. Визовый центр
						HOT Visa предлагает поддержку в оформлении визы в Германию в Москве, обеспечивая
						профессиональную консультацию и полное сопровождение по подготовке необходимых
						документов.
					</p>
					<p>
						Геополитические, экономические и социальные факторы могут влиять на межгосударственные
						отношения, однако для туристических и деловых поездок россиянам не устанавливаются
						специфические ограничения. Это позволяет свободно планировать поездки в Германию, с
						получением визы через HOT Visa, который предлагает удобные онлайн-заявки и оперативное
						решение вопросов с визами.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Германию
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
				<h3 class="--text-xl-l">Виды виз в Германию</h3>
				<div class="visa-variants-element">
					<p>• Виза категории A (транзитная виза)</p>
					<div>
						<p>
							Эта виза предназначена для транзита через аэропорт или другие пункты пропуска через
							территорию Германии без необходимости входа в страну. Она позволяет лишь пребывание в
							транзитной зоне аэропорта. Выдается страной, в которой происходит транзит.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Виза категории C (краткосрочная шенгенская виза)</p>
					<div>
						<p>Выдается гражданам РФ на срок до 90 дней в течение любого 180-дневного периода.</p>
						<p>
							Эта виза дает право на краткосрочное пребывание в Германии и других странах Шенгенской
							зоны до 90 дней в течение любого 180-дневного периода. Она может быть выдана для
							туристических поездок, деловых визитов, посещения родственников и т.д. Виза категории
							C имеет несколько подкатегорий (например, С1, С2, С3, С4), которые различаются по
							срокам действия и максимальному периоду пребывания в стране.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Виза категории D (национальная виза)</p>
					<div>
						<p>
							Эта виза необходима для долгосрочного пребывания в Германии, превышающего 90 дней.
							Владельцы визы категории D имеют право на въезд и выезд из Германии, а также на
							перемещение по другим странам Шенгенской зоны с упрощенным паспортно-визовым
							контролем. Она может быть выдана для целей работы, учебы, семейного объединения и
							других длительных пребываний.
						</p>
					</div>
				</div>
				<p>
					Каждая из этих виз имеет свои требования к документам и процедурам подачи. Для получения
					визы в Германию вам нужно будет подготовить соответствующие документы, которые
					подтверждают цель вашего визита и вашу финансовую состоятельность. HOT Visa предлагает
					помощь в оформлении визы без необходимости личного присутствия, что упрощает процесс
					получения визы для российских граждан.
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
			background-image: url('/germany-hero.jpg');
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
