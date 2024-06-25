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
				<p>Виза <br />в Канаду</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В КАНАДУ</h1>
				<h2 class="--announce --text-xl">от 15 000 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/canada-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Получите визу в Канаду на срок до 10 лет! Канадское посольство осуществляет тщательную
							проверку каждой заявки на визу. Чтобы гарантированно получить визу и составить
							правильную заявку, воспользуйтесь услугами агентства Hot Visa.
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
				<h2 class="--text-xl-l">Виза в Канаду</h2>
				<div class="visa-additional-text">
					<p>
						Канада — вторая по площади страна в мире после России, расположенная в северной части
						Северной Америки. Её уникальный ландшафт включает горы Рокки и Аппалачи, озера Великое
						Медвежье Озеро и Гурон, реку Святого Лаврентия, пустыню Грейт-Бейсин и обширные леса.
						Канада известна своим разнообразным культурным наследием, признанием двух официальных
						языков — английского и французского, и удивительными природными красотами: национальные
						парки, горные вершины, озёра и водопады, такие как Ниагарский водопад и парк Банф в
						горах Рокки. Канада привлекает путешественников своими туристическими
						достопримечательностями и высоким уровнем жизни.
					</p>
					<p>
						Визовый центр HOT Visa в Москве предлагает профессиональную помощь в оформлении визы в
						Канаду, обеспечивая полное сопровождение и подготовку всех необходимых документов
						согласно актуальным требованиям.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в Канаду
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Анкета-опросник</li>
					<li>
						Заграничный паспорт. На правительственном сайте Канады говорится, что документ должен
						действовать в течение всей поездки. На российских правовых порталах рекомендуют
						рассчитать все так, чтобы срок действия заканчивался не ранее полугода после
						возвращения. В любом случае лучше не подавать загранпаспорт, который действует
						«впритык», ведь планы всегда могут поменяться, а рассмотрение визы задержаться.
					</li>
					<li>
						Копия действующего и аннулированного паспорта (нужны страницы с визами и штампами).
					</li>
					<li>Копии страниц с фото, регистрацией и сведениями о детях из российского паспорта.</li>
					<li>Цветное фото формата 3,5×4,5 см.</li>
					<li>Экземпляр заполненной и распечатанной анкеты.</li>
					<li>
						Документы, подтверждающие финансовое положение: выписка из банка за 4 месяца и справка
						из банка с указанием остатка средств на счете.
					</li>
					<li>
						Справка с места работы, где приведены должность, стаж, размер зарплаты и даты отпуска.
					</li>
					<li>
						Страховка на весь период поездки. Плюсом будет, если сумма страхования составит не менее
						40000 канадских долларов.
					</li>
					<li>Чек об оплате сбора в размере 100 канадских долларов.</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в Канаду</h3>
				<div class="visa-variants-element">
					<p>• Виза посетителя (временного резидента)</p>
					<div>
						<p>
							Позволяет пребывать в Канаде до 6 месяцев или более, решение принимается пограничной
							службой.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Транзитная виза</p>
					<div>
						<p>
							Дает право на пребывание в Канаде в течение 48 часов для транзитных целей. Если
							необходимо оставаться дольше, рекомендуется оформить визу посетителя.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Бизнес-виза</p>
					<div>
						<p>
							Позволяет осуществлять предпринимательскую деятельность в стране на срок до 6 месяцев,
							включая встречи с партнерами и деловые переговоры.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Электронное разрешение на въезд (eTA)</p>
					<div>
						<p>
							Для посетителей, пользующихся авиасообщением и не имеющих визы, доступно только для
							граждан определенных стран, не включая Россию.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Разрешение на учебу</p>
					<div>
						<p>
							Позволяет учиться в Канаде. Требуется вместе с гостевой визой или eTA, если программа
							обучения длится более 6 месяцев.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Разрешение на работу</p>
					<div>
						<p>
							Выдается приглашенным работодателем и требует дополнительной гостевой визы или eTA.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Виза самозанятости</p>
					<div>
						<p>
							Предназначена для работников, не нанимаемых на работу, с соответствующим образованием
							и опытом.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Супервиза (для родителей и бабушек/дедушек)</p>
					<div>
						<p>Позволяет многократные въезды в Канаду на срок до 10 лет.</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Виза квалифицированного работника</p>
					<div>
						<p>
							Предназначена для специалистов с высоким уровнем квалификации, имеющих опыт работы и
							достаточные языковые навыки.
						</p>
					</div>
				</div>

				<p>
					Если вам необходима помощь в получении любого типа визы в Канаду, включая сопровождение
					процесса и подготовку документов, обращайтесь в наш визовый центр в Москве. Наши эксперты
					готовы помочь вам достичь положительного результата.
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
			background-image: url('/canada-hero.webp');
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
