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
				<p>Виза <br />в Болгарию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В БОЛГАРИЮ</h1>
				<h2 class="--announce --text-xl">от 4 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/visa-hero.png" alt="statue of liberty" />
					<div>
						<p>
							Получение визы в Болгарию под ключ в агентстве Hot Visa. Мы обеспечим личную подачу с
							полным пакетом документов, консультации и помощь опытных специалистов. Мы предлагаем
							услугу подачи на визу без вашего присутствия — мы сделаем все за вас, экономя ваше
							время и деньги.
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
				<h2 class="--text-xl-l">Виза в Болгарию</h2>
				<div class="visa-additional-text">
					<p>
						Болгария, расположенная в Юго-Восточной Европе, привлекает российских путешественников
						своим богатым историческим наследием, православными традициями, красивыми пляжами
						Черного моря, разнообразной природой, национальной кухней, культурными особенностями и
						народным искусством. Все это делает страну популярным направлением для отдыха и
						экскурсий среди россиян, которым для посещения Болгарии необходима виза.
					</p>
					<p>
						Визовый центр HOT Visa в Москве предоставляет профессиональную помощь в получении визы в
						Болгарию по выгодным условиям. С нашей экспертной поддержкой, положительное решение о
						выдаче визы принимается в 90% случаев, что делает процесс получения визы проще и удобнее
						для наших клиентов. Учитывая высокий интерес со стороны граждан России к посещению
						Болгарии, наш визовый центр предоставляет надежное и эффективное решение для всех, кто
						планирует путешествие в эту страну.
					</p>
					<p>
						История взаимодействия России и Болгарии богата и включает культурные, религиозные,
						политические и экономические аспекты. Обе страны имеют глубокие христианские корни, что
						способствует укреплению культурных связей между народами. Дипломатические отношения и
						сотрудничество в сфере торговли и инвестиций также играют важную роль в отношениях между
						Россией и Болгарией.
					</p>
					<p>
						Несмотря на текущие геополитические события, взаимодействие между нашими странами
						продолжается, и россияне продолжают обращаться к нашему визовому центру HOT Visa для
						получения помощи в оформлении визы в Болгарию.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Болгарию
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

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l">Медицинская страховка</h3>
				<p>
					Болгария является членом Европейского союза, однако не входит в Шенгенскую зону, несмотря
					на долгосрочные усилия страны к присоединению. Принятие положительного решения о
					вступлении в Шенгенское соглашение затрудняется из-за вето, наложенного некоторыми членами
					ЕС. Эти страны опасаются возможного увеличения нелегальной миграции и других связанных
					проблем.
				</p>
				<div>
					<p>Из-за своего текущего статуса, визовый режим Болгарии имеет несколько особенностей:</p>
					<ul>
						<li>
							Болгария выдает национальные визовые разрешения, которые также допускают въезд в
							Румынию, Хорватию и Кипр. Эти страны не являются членами Шенгенской зоны, но создали
							собственную мини-зону с упрощенным контролем.
						</li>
						<li>
							Болгарские визы не являются шенгенскими и позволяют перемещаться только по территории
							перечисленных выше стран. В страны, входящие в Шенгенскую зону, въезд по болгарской
							визе невозможен.
						</li>
						<li>
							Однако шенгенская многократная виза действует на территории Болгарии. В настоящее
							время существует правило, согласно которому въезд в Болгарию по шенгенской визе
							возможен только после посещения любого государства Шенгенской зоны. То есть необходимо
							сначала посетить хотя бы одну из стран Шенгенского соглашения, а затем можно въехать
							на территорию Болгарии.
						</li>
					</ul>
					<p>
						Эти особенности визового режима Болгарии следует учитывать при планировании поездок и
						оформлении визовых документов.
					</p>
				</div>
				<div>
					<p>Получается, что посетить страну можно:</p>
					<ul>
						<li>
							Многократная шенгенская виза категории С позволяет въезжать и выезжать из стран
							Шенгенской зоны в совокупности не более 90 дней в течение каждого 180-дневного
							периода. Дни пребывания в Болгарии не учитываются в эту статистику.
						</li>
						<li>
							Виза категории D для Болгарии дает право на длительное пребывание, включая возможность
							постоянной дислокации (иммиграционная виза). Владельцы такой визы могут находиться в
							Болгарии на протяжении всего срока действия визы.
						</li>
					</ul>
					<p>
						Национальные болгарские визы категорий С и D имеют схожие условия с шенгенскими визами
						тех же категорий: С — до 90 дней в каждые 180 дней, D — на длительное время.
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
			background-image: url('/bolgaria-hero.webp');
			background-position: center center;
			background-size: cover;
			width: 100vw;
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

			div {
				display: flex;
				flex-direction: column;
				gap: 20px;
				ul {
					padding: 10px 0;
				}
			}
		}
	}
</style>
