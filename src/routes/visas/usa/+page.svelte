<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores'
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Виза в США - Оформление визы в Визовом агентстве Москва</title>
	<meta name="description" content="Оформление визы в США в Визовом агентстве Москва. Полное сопровождение, помощь в сборе документов и быстрое оформление визы для вашего путешествия.">
	<meta name="og:title" content="Виза в США - Оформление визы в Визовом агентстве Москва">
	<meta name="og:description" content="Планируете поездку в США? Визовое агентство Москва предоставляет профессиональные услуги по оформлению визы. Быстрое и удобное оформление с полным сопровождением на каждом этапе.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="visa-section --margin-bottom">
	<div class="container">
		<div class="visa">
			<div class="visa-mobile visible-mobile">
				<p>Виза <br />в США</p>
			</div>
			<div class="visa-hero">
				<h1 class="--text-xl">ВИЗА В США</h1>
				<h2 class="--announce --text-xl">от 12 500 руб<span>*включая консульский сбор</span></h2>
				<div class="visa-hero-info">
					<img src="/visa-hero.webp" alt="statue of liberty" />
					<div>
						<p>
							Виза в США для россиян. Получение визы обязательно для граждан, желающих посетить
							страну. Оформление визы США сложная процедура, требующая соблюдения всех требований. В
							случае ошибки Вы теряете консульский сбор 160 $, а также рискуете значительно снизить
							шансы для получения визы в будущем. Доверьтесь специалистам Hot Visa и получите
							положительный ответ с первой попытки.
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
				<h2 class="--text-xl-l">Виза в США</h2>
				<div class="visa-additional-text">
					<p>
						Все чаще тысячи россиян пересекают американскую границу по разным поводам: исполнить
						свою заветную американскую мечту, получить образование в университете или просто поехать
						в туристическую поездку по стране. В связи с отсутствием безвизового режима между
						Россией и США, для въезда в страну необходимо получить официальное разрешение от
						консульства.
					</p>
					<p>
						Для того, чтобы быстрее получить одобрение, лучше обратиться к профессионалам, так как у
						американских консульств могут появиться различные причины для отказа в выдаче согласия
						жителям России. Эксперты нашего Визового Центра могут грамотно подготовить документы или
						же в случае самостоятельного сбора пакета, помогут объективно оценить его правильность,
						а также уменьшить возможные риски. С нашими опытными специалистами даже сложные задачи,
						такие как получение разрешения на въезд в США, становятся выполнимыми.
					</p>
					<p>
						Получить визу в США возможно только после прохождения обязательного собеседования,
						которое проводится при первом обращении или если с момента предыдущего разрешения прошло
						более года. Зачастую собеседование планируется через 3-5 дней после того, как подали
						заявление, но в периоды повышенной загруженности данный срок может увеличиться и
						составить около 10 дней. В случаях срочной необходимости, как, например, рабочая
						командировка или лечение за границей, сроки рассмотрения заявления могут быть ускорены.
					</p>
				</div>
			</div>
			<div class="visa-list" id="docs">
				<h3 class="--text-xl-l --announce">
					Список документов, необходимых для оформления визы в США
					<span>
						*просьба уточнять в каждом конкретном случае точный список документов у Вашего менеджера
					</span>
				</h3>
				<ul>
					<li>
						Информация о месте работы, должности, стаже, окладе и подтверждение согласования
						отпуска;
					</li>
					<li>
						Документы, подтверждающие ваши связи с Россией - свидетельства о праве собственности,
						браке, рождении детей и другие;
					</li>
					<li>
						Выписки с банковского счета, подтверждающие то, что вы сможете содержать себя во время
						пребывания в США;
					</li>
					<li>Документы от спонсоров, если они оплачивают вашу поездку;</li>
					<li>Информация о поездке, включая маршрут, бронирование отелей и т. д.</li>
					<li>
						Письмо из клиники с согласием на лечение и указанием диагноза от лечащего врача для
						пациентов.
					</li>
					<li>Документ о зачислении на курсы для тех, кто едет учиться;</li>
					<li>
						Приглашение от родственников или друзей в США с подтверждением их легального статуса
						(копия гринкарты и т.д)
					</li>
				</ul>

				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-variants">
				<h3 class="--text-xl-l">Виды виз в США</h3>
				<div class="visa-variants-element">
					<p>• Туристическая виза, которая относится к категории B2.</p>
					<div>
						<p>Может быть выдана на срок от 1 года и более.</p>
						<p>Ее предназначение: туризм.</p>
						<p>
							Очень важно соблюдать это условие при поездке, так как нарушение этого правила может
							привести к отказу в получения визы.
						</p>
						<p>
							Рекомендации: для того, чтобы оформить туристическую визу в США, на собеседовании в
							консульстве, необходимо вести себя грамотно, обсуждая исключительно туристические
							цели. Не стоит упоминать о возможных дополнительных целях, таких как визиты к друзьям
							или родственникам. Для граждан России выдаются туристические визы на 3 года, но
							реальный срок пребывания при въезде в страну определяется иммиграционным офицером, как
							правило, не более 6 месяцев. Рекомендуемый оптимальный срок пребывания по
							туристической визе составляет не более 3 месяцев.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Рабочая виза.</p>
					<div>
						<p>Выдается гражданам РФ на срок от 1 года и более.</p>
						<p>
							Однако процесс оформления рабочей визы в США требует предоставления большого
							количества документов.
						</p>
						<p>
							Рекомендации: важно показать, что вы являетесь востребованным специалистом с большим
							опытом работы в своей области. Получение такой визы – это тяжёлое испытание, поэтому
							рекомендуется обратиться к профессионалам нашего визового центра. Существует несколько
							видов рабочих виз, но наиболее интересной для россиян является Н18-В, которую
							придумали для специалистов с высшим образованием в соответствующей области. Получение
							этого документа требует поддержки со стороны работодателя, который должен объяснить,
							почему выбрал именно вас. Требования к соискателю весьма строгие, включая наличие
							бакалавра и соответствие специальности в дипломе должности, которую вы собираетесь
							занимать.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Студенческая виза для обучения в США (категории F-1 и M-1).</p>
					<div>
						<p>Требует больших усилий для оформления.</p>
						<p>
							Срок пребывания по этим визам составляет от 1 года и более, и после окончания этого
							срока студенты обязаны вернуться в Россию для продления визы. После 5-6 лет обучения
							может возникнуть возможность подать документы на постоянное место жительства и
							гражданство. Иногда студенческая виза может выдаваться на 1 месяц для прохождения
							кратковременного обучения.
						</p>
						<p>
							Рекомендации: в списке необходимых документов для визы требуется представить I-20
							форму от учебного заведения. На собеседовании очень важно показать способность
							оплатить обучение, так как запрещено работать по студенческой визе.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Гостевая виза.</p>
					<div>
						<p>Требует сбора множества документов.</p>
						<p>Обратившись за помощью к нашему центру, сделать это будет гораздо проще.</p>
						<p>
							Рекомендации: необходимым документом для этой визы является приглашение от гражданина,
							проживающего в Америке, которое поможет получить визу на срок от 1 года и дольше. Это
							приглашение должно быть официально выписано вашим другом или родственником, обладающим
							американским гражданством. В заявлении на визу можно указать цель поездки, такую как
							туризм, обучение или работа.
						</p>
					</div>
				</div>
				<div class="visa-variants-element">
					<p>• Грин-карта.</p>
					<div>
						<p>Предоставляет права, схожие с правами граждан.</p>
						<p>
							У нее нет ограничения по сроку и она позволяет въезжать в США в любое время и
							пребывать дольше 4 месяцев. С её помощью можно учиться, работать, вести бизнес,
							получать пенсию, а в дальнейшем — получить гражданство.
						</p>
						<p>
							Рекомендации: существуют разные способы получения грин-карты, такие как заключение
							брака с американским гражданином, воссоединение семьи, рабочую визу, политическое
							убежище, инвестиции в экономику США и выигрыш в лотерее Diversity Visa.
						</p>
					</div>
				</div>
				<button class="btn-main" on:click={toggleConsult}>Оформить визу</button>
			</div>
			<div class="visa-list">
				<h3 class="--text-xl-l --announce">Виза в США</h3>
				<ul>
					<li>
						Заполнить анкету на английском языке на официальном сайте Департамента иммиграции США.
						Согласно новым правилам, действующим с 2019 года, анкета на визу в США в 2024 году
						требует указания ссылок на социальные сети заявителя. Для избежания возможного отказа в
						визе в 2024 году, важно внимательно подходить к контенту, который вы публикуете в
						социальных сетях. Только нейтральные сообщения могут положительно повлиять на решение
						посольства США при проверке вашего аккаунта. Предоставление фальшивых данных не
						рекомендуется, так как это может привести к отказу;
					</li>
					<li>
						Оплатить консульский сбор в размере 15000 рублей. Стоимость визы в США в 2024 году может
						изменяться в течение года;
					</li>
					<li>
						Записаться на собеседование. Этот этап остается одним из наиболее сложных. В настоящее
						время интервью можно пройти только за пределами России, например, в Польше, Казахстане
						или Италии. Это становится популярным не только среди бизнесменов, но и среди туристов.
						Например, некоторые клиенты получают визу в США во время путешествия по Италии;
					</li>
					<li>Успешно пройти собеседование в Посольстве США или одном из Консульств США.</li>
				</ul>
			</div>
			<div class="visa-text">
				<h3 class="--text-xl-l">Биометрия</h3>
				<p>
					Для того чтобы получить визу, новый закон требует, чтобы все заявители прошли обязательную
					процедуру сдачи отпечатков пальцев с момента вступления в силу этого нововведения. Срок
					хранения отпечатков составляет 5 лет, что позволяет вам не думать об этом процессе на
					протяжении длительного времени. Если в будущем вы будете подавать документы на визу, ваши
					биометрические данные будут извлекаться из системы ВИС. Исключением являются дети младше
					пяти лет, которым не нужно проходить данную процедуру, а дети от 5 до 15 лет обязаны
					прибыть на снятие отпечатков пальцев в сопровождении родителей.
				</p>
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
			background-image: url('/visa-hero.webp');
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
