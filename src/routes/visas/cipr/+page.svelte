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
				<p>Виза <br />на Кипр</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА НА КИПР</h1>
				<h2 class="--announce --text-xl">от 15 000 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/cipr-hero.jpg" alt="statue of liberty" />
					<div>
						<p>
							Виза на Кипр от 3 рабочих дней! Наша компания предлагает ускоренное оформление визовых
							разрешений для поездок на Кипр. Мы осуществляем личную подачу документов с полным
							пакетом необходимых документов. Наши специалисты гарантируют консультации и помощь на
							всех этапах процесса. Воспользуйтесь нашими услугами подачи без вашего присутствия,
							чтобы избежать возможных осложнений в получении визового разрешения.
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
				<h2 class="--text-xl-l">Виза наКипр</h2>
				<div class="visa-additional-text">
					<p>
						Кипр — это островное государство в Восточном Средиземноморье, расположенное между
						Турцией, Сирией и Ливаном. С третьим по величине островом в Средиземном море, после
						Сицилии и Сардинии, Кипр предлагает разнообразные ландшафты: от горных вершин до
						плодородных долин и красивых пляжей. Самая высокая точка острова — гора Олимп (Троодос),
						достигающая 1 952 метров.
					</p>
					<p>
						История Кипра насчитывает более 10 000 лет и включает в себя периоды колонизации
						множеством древних цивилизаций: финикийцев, ахейцев, ассирийцев, персов, греков, римлян,
						византийцев, арабов, крестоносцев и османов. В настоящее время остров разделен на две
						части: Кипрскую Республику на юге и Турецкую Республику Северного Кипра на севере.
					</p>
					<p>
						Кипр — это уникальное место, где сливаются различные культуры и религии. Греческие и
						турецкие культурные элементы сочетаются с традициями местного кипрского населения.
						Остров богат музыкальным и художественным наследием, а его кухня известна своими
						местными продуктами и вкусными блюдами, такими как халлуми, муссака и мевлеме.
					</p>
					<p>
						Экономика Кипра сосредоточена на туризме, финансовых услугах и судостроении. Остров
						также привлекает иностранных инвесторов благодаря своей финансовой индустрии и
						стабильному налоговому режиму. Кипр является популярным туристическим направлением
						благодаря своему приятному климату, прекрасным пляжам и богатому историческому и
						культурному наследию.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы На Кипр
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>
						Оригинал загранпаспорта срок действия не менее 6 месяцев на день подачи документов в
						посольство наличие одного чистого разворота страниц.
					</li>
					<li>
						Фото в электронном виде цветное, на белом фоне, формат JPEG, вес 40-120 кб, размер от
						354 (ширина)*472 (высота) пикселей до 420 (ширина)*560 (высота) пикселей
					</li>
					<li>Анкета-опросник</li>
					<li>
						Копии последней кипрской/шенгенской визы + копия всех страниц предыдущего паспорта, в
						котором они находятся (при наличии)
					</li>
					<li>
						Справка с работы с указанием должности и ежемесячного оклада c "живой" синей печатью на
						бланке компании-работодателя.
					</li>
					<li>
						выписка с лицевого счета или банковской карты об остатке на счете и движении средств за
						3 мес.
					</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз на Кипр</h3>
				<div class="visa-variants-element">
					<p>• Краткосрочная многократная виза (С).</p>
					<div>
						<p>
							Выдается иностранным гражданам для однократного или многократного въезда. Генеральный
							консул может принять решение о выдаче виз многократного действия сроком на 3 года, а в
							редких случаях и до 5 лет. В стандартном варианте виза действует 180 дней, и по ней
							можно находиться в стране не более 90 визовых дней. Длительное пребывание (более 90
							дней) или переезд с целью смены места жительства требуют оформления долгосрочной визы.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Транзитная виза (А)</p>
					<div>
						<p>
							Дает возможность иностранным гражданам находиться некоторое время (в рамках транзита)
							в международной зоне кипрского аэропорта без возможности покинуть ее (при стыковочных
							рейсах). Виза на Кипр данной категории требуется в виде исключения из общего правила
							осуществления транзита по Кипру без виз.
						</p>
					</div>
				</div>

				<p>
					Виза выдает визовый отдел Генерального консульства, с которым взаимодействуют специалисты
					нашего визового центра.
				</p>
				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l --announce">
					Въезд по шенгенской визе и разрешению на проживание в странах шенгенской зоны
				</h3>
				<div>
					<p>
						В Кипре действует шенгенская виза категории С с двукратным или многократным въездом, что
						подразумевает схожий с шенгенским визовым режимом. Вот основные условия и особенности
						этой визы:
					</p>
					<ul>
						<li>
							Действие визы: Шенгенская виза категории С позволяет ее держателям совершать
							двукратные или многократные поездки на территорию Кипра.
						</li>
						<li>
							Продолжительность пребывания: Владельцы такой визы могут находиться на территории
							Кипра в течение не более 90 дней за каждый 180-дневный период. Этот период
							распространяется на всю шенгенскую зону.
						</li>
						<li>
							Исключения для граждан третьих стран: Граждане государств, не входящих в состав ЕС,
							могут въезжать на территорию Кипра без визы, если они имеют визу категории D или
							разрешение на проживание в любой стране ЕС, включая Болгарию, Хорватию и Румынию. В
							таком случае, они также могут пребывать на Кипре не более 90 дней в течение каждого
							180-дневного периода.
						</li>
					</ul>
					<p>
						Эти условия позволяют иностранным гражданам, имеющим шенгенскую визу категории С, гибко
						использовать ее для поездок на Кипр и в другие страны шенгенской зоны, соблюдая
						установленные ограничения по времени пребывания.
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
			background-image: url('/cipr-hero.jpg');
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
