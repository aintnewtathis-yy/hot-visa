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
				<p>ВНЖ и гражданство <br />в Грецию</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВНЖ и гражданство в Грецию</h1>
				<div class="visa-hero-desc">
					<h2 class="--desc --text-xl">
						от 3 лет<span>*срок действия с правом продления и получения пмж/гражданства</span>
					</h2>
					<h2 class="--desc --text-xl">
						3 месяца<span>*срок оформления</span>
					</h2>
				</div>
				<div class="visa-hero-info">
					<img src="/greece-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Ищете полную свободу передвижений по миру? Рассмотрите возможность получения видов на
							жительство в Греции или Испании! Это открывает безвизовый доступ в Шенгенскую зону,
							новые перспективы для бизнеса и даже возможность открыть счет в иностранном банке.
							Главное — вы можете жить там, где хотите!
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
			<div class="visa-list">
				<h3 class="--text-xl-l">Преимущества ВНЖ</h3>
				<ul>
					<li>Отличный климат, долгое и тёплое лето, приятная и мягкая зима.</li>
					<li>Вы и ваша семья будете иметь возможность путешествовать по всей Европе.</li>
					<li>Вы не обязаны постоянно жить в стране и можете приезжать, когда захотите.</li>
					<li>
						Греция радует хорошей ценовой политикой и очень качественными и полезными продуктами.
					</li>
				</ul>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Категории ВНЖ в Греции</h3>
				<div class="visa-variants-element">
					<p>• ВНЖ для владельцев недвижимости (Golden Visa)</p>
					<div>
						<ul>
							<li>
								<span>Кто может получить:</span> Иностранные граждане, приобретающие недвижимость в Греции
								на сумму от 250 000 евро и выше.
							</li>
							<li><span>Срок действия:</span> От 5 лет с возможностью продления.</li>
							<li>
								<span>Преимущества:</span> Право проживания в Греции, свободное перемещение по Шенгенской
								зоне, возможность подачи на гражданство Греции после 7 лет проживания в стране.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• ВНЖ для инвесторов</p>
					<div>
						<ul>
							<li>
								<span>Кто может получить:</span> Иностранные граждане, инвестирующие не менее 250 000
								евро в греческие государственные облигации, акции греческих компаний или бизнес-проекты.
							</li>
							<li><span>Срок действия:</span> От 5 лет с возможностью продления.</li>
							<li>
								<span>Преимущества:</span> Идентичны с преимуществами ВНЖ для владельцев недвижимости.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• ВНЖ для финансово независимых лиц</p>
					<div>
						<ul>
							<li>
								<span>Кто может получить:</span> Иностранные граждане с стабильным доходом, например,
								от аренды, дивидендов или пенсии, более 2 000 евро в месяц.
							</li>
							<li><span>Срок действия:</span> 2 года с возможностью продления.</li>
							<li>
								<span>Преимущества:</span> Право на проживание в Греции без обязательства к инвестициям
								или покупке недвижимости.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• ВНЖ для студентов</p>
					<div>
						<ul>
							<li>
								<span>Кто может получить:</span> Иностранные студенты, поступившие на очную форму обучения
								в греческий вуз.
							</li>
							<li><span>Срок действия:</span> На период обучения плюс 1 год.</li>
							<li>
								<span>Преимущества:</span> Право на проживание в Греции и возможность работы неполный
								рабочий день.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• ВНЖ для членов семьи граждан ЕС</p>
					<div>
						<ul>
							<li>
								<span>Кто может получить:</span> Члены семьи граждан ЕС, проживающих в Греции.
							</li>
							<li><span>Срок действия:</span> Бессрочный.</li>
							<li>
								<span>Преимущества:</span> Право на проживание и работу в Греции.
							</li>
						</ul>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• ВНЖ для беженцев и лиц, ищущих убежища</p>
					<div>
						<ul>
							<li>
								<span>Кто может получить:</span> Иностранные граждане, ищущие убежища в Греции.
							</li>
							<li><span>Срок действия:</span> До решения о предоставлении убежища.</li>
							<li>
								<span>Преимущества:</span> Право на проживание в Греции, доступ к медицинскому обслуживанию
								и образованию.
							</li>
						</ul>
					</div>
				</div>

				<p>
					Каждый вид ВНЖ имеет свои особенности и требования, которые необходимо уточнять в
					консульстве или посольстве Греции перед подачей заявления.
				</p>
				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления ВНЖ в Грецию
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>Стандартная анкета</li>
					<li>Загранпаспорт</li>
					<li>Копия паспорта страны заявителя</li>
					<li>Подтверждение возможности обеспечивать своё пребывание в стране</li>
					<li>Документы, подтверждающие основания, на котором будет получен ВНЖ</li>
					<li>Справка о состоянии здоровья</li>
					<li>Медицинская страховка</li>
					<li>Справка об отсутствии судимости</li>
					<li>Квитанция об оплате пошлины</li>
				</ul>
				<p style="color: #808080;">
					Так же есть возможность оформить визу для детей, пенсионеров и иностранных лиц
				</p>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l">Визы для членов семьи</h3>
				<p>
					Для членов семьи, не являющихся гражданами страны Шенгенского соглашения и планирующих
					посетить Грецию, необходимо получение визы. Это можно сделать, обратившись в посольство
					Греции или консульство в своей стране.
					<br />
					<br />
					Члены семьи могут подавать заявку на визу вместе с основным заявителем, предоставляя требуемые
					документы, такие как паспорт, фотографии, подтверждение брони гостиницы, билеты на самолет
					и другие необходимые документы.
					<br />
					<br />
					Если у члена семьи уже есть вид на жительство в стране Шенгенского соглашения, в некоторых
					случаях виза может не потребоваться. Тем не менее, для получения точной информации о требованиях
					и процедурах получения визы для членов семьи рекомендуется связаться с посольством или консульством
					Греции.
				</p>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l">ВНЖ для цифровых кочевников</h3>
				<p>
					В начале 2022 года была запущена программа Work from Greece, которая предоставляет
					цифровым кочевникам возможность получить визу для пребывания в Греции. Основным
					преимуществом этой программы является её простота и доступность для всех, кто имеет доход
					свыше 3 500 евро и может работать удалённо.
					<br />
					<br />
					Программа предназначена для граждан различных стран, включая Россию и Беларусь, и не имеет
					ограничений по гражданству, что делает её особенно привлекательной в контексте замороженных
					программ выдачи видов на жительство для граждан этих стран.
					<br />
					<br />
					Получение данной визы позволяет постоянно проживать на территории Греции и свободно перемещаться
					по зоне Шенгена, так же как и другие виды на жительство.
				</p>
				<div>
					<p>Преимущества и возможности визы цифрового кочевника:</p>
					<ul>
						<li>
							Легальное проживание в Греции: Виза цифрового кочевника позволяет долгосрочно
							проживать в Греции, наслаждаясь её культурой, климатом и гостеприимством.
						</li>
						<li>
							Свобода передвижения в зоне Шенгена: Обладатели визы могут свободно путешествовать по
							странам Евросоюза без визовых ограничений, что значительно упрощает планирование и
							реализацию путешествий.
						</li>
						<li>
							Возможность работы из любой точки мира: Вы можете работать удалённо из Греции или
							любой другой страны, где вам удобно, сохраняя свою профессиональную деятельность и
							гибкость.
						</li>
						<li>
							Погружение в новую культуру: Пребывание в Греции предоставляет уникальную возможность
							погрузиться в местные традиции, кухню и обычаи, обогатив свой жизненный опыт.
						</li>
					</ul>
					<p>
						Данный проект ориентирован на фрилансеров, предпринимателей и других специалистов,
						которые могут работать удалённо. Виза цифрового кочевника представляет собой
						инновационную и гибкую возможность для тех, кто стремится сочетать работу и путешествия.
					</p>
				</div>
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
			background-image: url('/greece-hero.webp');
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
