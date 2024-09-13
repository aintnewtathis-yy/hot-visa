<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>ВНЖ в Испанию - Оформление вида на жительство в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление вида на жительство в Испанию в Визовом агентстве Москва. Полное сопровождение, помощь в сборе документов и консультации по всем вопросам ВНЖ.">
	<meta name="og:title" content="ВНЖ в Испанию - Оформление вида на жительство в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете получить вид на жительство в Испании? Визовое агентство Москва предлагает профессиональные услуги по оформлению ВНЖ. Консультации и поддержка на каждом этапе процесса.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>ВНЖ и гражданство <br />в Испанию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВНЖ и гражданство в Испанию</h1>
				<h2 class="--desc --text-xl">от 8 500 евро</h2>
				<div class="visa-hero-info">
					<img src="/spain-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							ВНЖ цифрового кочевника (Digital Nomad Visa) — самый быстрый способ легально переехать
							в Испанию. Эксперты Hot Visa сделают большую часть задач за Вас. Комфортное и быстрое
							получение ВНЖ цифрового кочевника за 3 месяца.
						</p>
						<p>
							Наши опытные специалисты с более чем 15-летним стажем помогут вам быстро и комфортно
							получить вид на жительство в Греции или Испании, предлагая индивидуальный подход к
							каждому клиенту.
						</p>
						<a href="#docs">какие нужны документы</a>
						<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
					</div>
				</div>
			</div>

			<div class="visa-text">
				<h3 class="--text-xl-l">Этапы получения ВНЖ</h3>
				<div>
					<p>Оформление документов</p>
					<ul>
						<li>
							<span>Этап планирования и подготовки:</span>
							<br />
							<br />
							На этом этапе вы совместно с нашими специалистами разрабатываете оптимальную стратегию
							для подачи заявления. Вы определяете необходимые документы и начинаете их сбор в соответствии
							с планом.
						</li>
						<li>
							<span>Подача документов</span><br /><br />
							После тщательной подготовки документов мы подаем ваше заявление в компетентные органы Испании.
						</li>
						<li>
							<span>Отправка документов:</span>
							<br /><br />
							Документы подаются на территории Испании с использованием цифрового сертификата для загрузки
							в систему Министерства. После этого начинается обработка документов, в результате которой
							вы либо получаете одобрение, либо вам могут потребоваться дополнительные документы.
						</li>
						<li>
							<span>Получение ВНЖ</span>
							<br /><br />
							После получения одобрения вашей заявки вам нужно будет зарегистрироваться в полиции. Затем
							вы заполняете необходимые формы и сдаете биометрические данные. Примерно через месяц ваша
							карта резидента будет готова, что позволит вам свободно путешествовать по миру.
						</li>
					</ul>
				</div>
				<div>
					<p>Получение визы Шенген</p>
					<ul>
						<li>
							<span>Документы:</span>
							<br />
							<br />
							подготовьте все необходимые документы
						</li>
						<li>
							Запланируйте визит в консульство/центр подачи документов для сдачи заявления и
							предоставления документов.
						</li>
						<li>Оплатите визовый сбор</li>
						<li>Подайте заявление</li>
						<li>При необходимости пройдите собеседование</li>
						<li>Дождитесь решения</li>
					</ul>
					<p>
						Получив шенгенскую визу, вы сможете свободно путешествовать по странам шенгенского
						пространства, включая Испанию.
					</p>
				</div>
				<div>
					<p>Преимущества работы с нашей компанией</p>
					<ul>
						<li>
							<span>Индивидуальная стратегия:</span>
							<br />
							<br />
							Специалисты нашего визового центра разрабатывают персональный план действий для каждого
							клиента, учитывая его индивидуальные потребности и цели. Это позволяет тщательно подготовить
							документы и повысить шансы на успешное получение визы.
						</li>
						<li>
							<span>Конфиденциальность:</span>
							<br />
							<br />
							Мы строго соблюдаем правила конфиденциальности и обеспечиваем защиту вашей личной информации.
							Все предоставленные документы и данные остаются строго конфиденциальными и не передаются
							третьим лицам без вашего согласия. Специалисты нашего центра работают на основе доверительных
							отношений, обеспечивая обработку вашей информации с максимальной осторожностью и профессионализмом.
						</li>
						<li>
							<span>Многолетний опыт наших сотрудников:</span>
							<br />
							<br />
							Наши опытные специалисты помогут вам решить любые проблемы, возникающие в процессе получения
							визы. Мы знаем, как правильно подготовить документы, что нужно сделать для ускорения процесса
							и как избежать ошибок.
						</li>
						<li>
							<span>Скидки и программа лояльности:</span>
							<br />
							<br />
							Мы предлагаем специальные скидки на услуги по оформлению виз для семейных групп, а также
							программу лояльности, предоставляющую клиентам скидки или бонусы.
						</li>
						<li>
							<span>Прозрачность:</span>
							<br />
							<br />
							Прозрачность – одно из наших ключевых преимуществ. Мы стремимся к тому, чтобы наши клиенты
							легко понимали все аспекты нашей работы и были уверены в компетентности наших услуг. Мы
							предоставляем детальное описание наших услуг, включая перечень необходимых документов,
							сроки выполнения работ, стоимость услуг и возможные дополнительные расходы.
						</li>
					</ul>
					<p>
						Мы всегда готовы ответить на все ваши вопросы и предоставить обратную связь. Наша
						команда специалистов готова помочь в любой ситуации и подробно проконсультировать вас по
						всем интересующим вопросам.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Основные требования для визы цифрового кочевника в Испании
				</h3>
				<ul>
					<li>
						Работать на одну или несколько компаний/заказчиков за пределами Испании не менее 3-х
						месяцев.
					</li>
					<li>
						Доказать, что каждая из этих компаний/заказчиков работает непрерывно не менее 1 года.
					</li>
					<li>
						Уровень доходов от 2 646 € в месяц на заявителя, 993 € на второго члена семьи, 331 € —
						на каждого следующего.
					</li>
					<li>Письма от работодателей/ заказчиков с разрешением вам работать удаленно.</li>
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
			div {
				display: flex;
				flex-direction: column;
				gap: 30px;

				ul {
					display: flex;
					flex-direction: column;
					gap: 10px;

					li {
						@include fluid-text(16, 16);

						list-style: disc inside;
					}
				}
			}
		}
	}
</style>
