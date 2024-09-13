<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';

	$: {
		console.log($page)
	}
	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Оформление загранпаспорта - Визовое агентство Москва</title>
	<meta name="description" content="Оформление загранпаспорта в Визовом агентстве Москвы. Мы предоставляем консультации для частных лиц и компаний. Личный менеджер контролирует весь процесс.">
	<meta name="og:title" content="Оформление загранпаспорта - Визовое агентство Москва">
	<meta name="og:description" content="Оформление загранпаспорта с Визовым агентством Москвы. Работайте с личным менеджером, который будет информировать о каждом этапе оформления.">
	<meta name="og:url" content={$page.url.href}>
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="service-section --margin-bottom">
	<div class="container">
		<div class="service">
			<div class="service-hero">
				<h1 class="--text-xl">Срочное оформление загранпаспорта</h1>
				<div class="service-hero-info">
					<img src="/pasport.webp" alt="" />
					<div>
						<p>
							Мы сотрудничаем как с компаниями, так и с частными лицами. Предоставляем комплексные
							консультационные услуги. Каждому клиенту назначается личный менеджер, который
							информирует о ходе работы.
						</p>
						<button class="btn-main" on:click={toggleConsult}> Заказать звонок </button>
					</div>
				</div>
			</div>
			<div class="service-calculator">
				<div class="calculator">
					<div class="calculator-tabs">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<p
							class="active"
							data-age="adult"
							on:click={() => {
								document.querySelectorAll('[data-age="child"]').forEach((el) => {
									el.classList.remove('active');
								});

								document.querySelectorAll('[data-age="adult"]').forEach((el) => {
									el.classList.add('active');
								});
							}}
						>
							Для взрослых (14+)
						</p>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<p
							data-age="child"
							on:click={() => {
								document.querySelectorAll('[data-age="adult"]').forEach((el) => {
									el.classList.remove('active');
								});
								document.querySelectorAll('[data-age="child"]').forEach((el) => {
									el.classList.add('active');
								});
							}}
						>
							Для детей до 14
						</p>
					</div>
					<div class="calculator-body active" data-age="adult">
						<div class="calculator-body-choice">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<p
								data-type="bio"
								class="active"
								on:click={() => {
									document.querySelectorAll('[data-type="old"]').forEach((el) => {
										el.classList.remove('active');
									});
									document.querySelectorAll('[data-type="bio"]').forEach((el) => {
										el.classList.add('active');
									});
								}}
							>
								Биометрический паспорт
							</p>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<p
								data-type="old"
								on:click={() => {
									document.querySelectorAll('[data-type="bio"]').forEach((el) => {
										el.classList.remove('active');
									});
									document.querySelectorAll('[data-type="old"]').forEach((el) => {
										el.classList.add('active');
									});
								}}
							>
								Паспорт старого образца
							</p>
						</div>
						<div class="calculator-body-table" data-type="old">
							<div class="calculator-body-table-header">
								<p>ДЛИТЕЛЬНОСТЬ</p>
								<p>МОСКВА И МОС. ОБЛАСТЬ</p>
								<p>РЕГИОНЫ (ИЛИ БЕЗ ПРОПИСКИ)</p>
							</div>
							<div class="calculator-body-table-content">
								<div>
									<p>20 раб. дней</p>
									<p>14 500 ₽</p>
									<p>14 500 ₽</p>
								</div>
								<div>
									<p>8 раб. дней</p>
									<p>60 000 ₽</p>
									<p>60 000 ₽</p>
								</div>
								<div>
									<p>7 раб. дней</p>
									<p>63 000 ₽</p>
									<p>63 000 ₽</p>
								</div>
								<div>
									<p>5-6 раб. дней</p>
									<p>70 000 ₽</p>
									<p>70 000 ₽</p>
								</div>
							</div>
							<div class="calculator-body-table-additional">
								<p>Госпошлина: 2000 ₽</p>
							</div>
						</div>
						<div class="calculator-body-table active" data-type="bio">
							<div class="calculator-body-table-header">
								<p>ДЛИТЕЛЬНОСТЬ</p>
								<p>МОСКВА И МОС. ОБЛАСТЬ</p>
								<p>РЕГИОНЫ (ИЛИ БЕЗ ПРОПИСКИ)</p>
							</div>
							<div class="calculator-body-table-content">
								<div>
									<p>21 раб. дней</p>
									<p>12 000 ₽</p>
									<p>12 000 ₽</p>
								</div>
								<div>
									<p>16-17 раб. дней</p>
									<p>14 500 ₽</p>
									<p>14 500 ₽</p>
								</div>
								<div>
									<p>13-15 раб. дней</p>
									<p>17 500 ₽</p>
									<p>17 500 ₽</p>
								</div>
								<div>
									<p>10-12 раб. дней</p>
									<p>27 000 ₽</p>
									<p>27 000 ₽</p>
								</div>
								<div>
									<p>8 раб. дней</p>
									<p>60 000 ₽</p>
									<p>60 000 ₽</p>
								</div>
								<div>
									<p>7 раб. дней</p>
									<p>65 000 ₽</p>
									<p>65 000 ₽</p>
								</div>
								<div>
									<p>6 раб. дней</p>
									<p>70 000 ₽</p>
									<p>70 000 ₽</p>
								</div>
								<div>
									<p>4-5 раб. дней</p>
									<p>80 000 ₽</p>
									<p>80 000 ₽</p>
								</div>
							</div>
							<div class="calculator-body-table-additional">
								<p>Госпошлина: 6000 ₽</p>
								<p>Анкета бесплатно</p>
							</div>
						</div>
					</div>
					<div class="calculator-body" data-age="child">
						<div class="calculator-body-choice">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<p
								data-type="bio"
								class="active"
								on:click={() => {
									document.querySelectorAll('[data-type="old"]').forEach((el) => {
										el.classList.remove('active');
									});
									document.querySelectorAll('[data-type="bio"]').forEach((el) => {
										el.classList.add('active');
									});
								}}
							>
								Биометрический паспорт
							</p>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<p
								data-type="old"
								on:click={() => {
									document.querySelectorAll('[data-type="bio"]').forEach((el) => {
										el.classList.remove('active');
									});
									document.querySelectorAll('[data-type="old"]').forEach((el) => {
										el.classList.add('active');
									});
								}}
							>
								Паспорт старого образца
							</p>
						</div>
						<div class="calculator-body-table" data-type="old">
							<div class="calculator-body-table-header">
								<p>ДЛИТЕЛЬНОСТЬ</p>
								<p>МОСКВА И МОС. ОБЛАСТЬ</p>
								<p>РЕГИОНЫ (ИЛИ БЕЗ ПРОПИСКИ)</p>
							</div>
							<div class="calculator-body-table-content">
								<div>
									<p>5-6 раб. дней</p>
									<p>15 000 ₽</p>
									<p>15 000 ₽</p>
								</div>
								<div>
									<p>2-3 раб. дня</p>
									<p>20 000 ₽</p>
									<p>20 000 ₽</p>
								</div>
								<div>
									<p>1 раб. день</p>
									<p>25 000 ₽</p>
									<p>25 000 ₽</p>
								</div>
								<div>
									<p>В день обращения</p>
									<p>30 000 ₽</p>
									<p>30 000 ₽</p>
								</div>
							</div>
							<div class="calculator-body-table-additional">
								<p>Госпошлина: 1000 ₽</p>
								<p>Анкета бесплатно</p>
							</div>
						</div>
						<div class="calculator-body-table active" data-type="bio">
							<div class="calculator-body-table-header">
								<p>ДЛИТЕЛЬНОСТЬ</p>
								<p>МОСКВА И МОС. ОБЛАСТЬ</p>
								<p>РЕГИОНЫ (ИЛИ БЕЗ ПРОПИСКИ)</p>
							</div>
							<div class="calculator-body-table-content">
								<div>
									<p>5-8 раб. дней</p>
									<p>15 000 ₽</p>
									<p>15 000 ₽</p>
								</div>
								<div>
									<p>2-3 раб. дня</p>
									<p>22 000 ₽</p>
									<p>22 000 ₽</p>
								</div>
							</div>
							<div class="calculator-body-table-additional">
								<p>Госпошлина: 3000 ₽</p>
								<p>Анкета бесплатно</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="service-text">
				<h2 class="--text-xl-l">Как именно мы вам поможем</h2>
				<ul>
					<li>
						Мы подготовим и подадим документы для оформления заграничного паспорта для вас и членов
						вашей семьи, включая детей (личное присутствие при подаче документов обязательно).
					</li>
					<li>
						Мы поможем оформить паспорт как нового, так и старого образца, а также второй
						заграничный паспорт.
					</li>
					<li>Уведомим вас о готовности документа, чтобы вы могли приехать и забрать его.</li>
				</ul>
				<p>
					Мы успешно работаем на рынке с 2002 года и за более чем 20 лет помогли тысячам граждан
					оформить выездные документы. Нашими клиентами были как частные лица, так и организации, и
					в каждом случае мы предлагали наилучшие решения.
				</p>
			</div>
		</div>
	</div>
</section>

<Cta  />

<style lang="scss">
	.service {
		display: flex;
		flex-direction: column;
		gap: 160px;

		@include tablet {
			gap: 90px;
		}

		&-hero {
			padding-top: 200px;
			display: flex;
			flex-direction: column;
			gap: 60px;

			@include fluid-text(20, 16);

			@include tablet {
				padding-top: 100px;
			}

			&-info {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 60px;

				@include tablet {
					display: flex;
					flex-direction: column;
					gap: 30px;
				}

				div {
					display: flex;
					flex-direction: column;
					gap: 60px;

					@include mobile {
						button {
							display: none;
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

			@include fluid-text(20, 16);

			ul {
				display: flex;
				flex-direction: column;
				gap: 30px;

				li {
					list-style: disc inside;
					width: 65%;
					text-wrap: balance;

					@include tablet {
						width: 100%;
					}
				}
			}

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

		&-calculator {
			.calculator {
				display: flex;
				flex-direction: column;

				&-tabs {
					display: flex;
					p {
						padding: 20px;
						background-color: #ededed;
						opacity: 0.4;
						cursor: pointer;

						&:global(.active) {
							opacity: 1;
						}
					}
				}
				&-body {
					display: none;
					flex-direction: column;
					gap: 40px;
					padding: 20px;
					background-color: #ededed;

					&:global(.active) {
						display: flex;
					}

					&-choice {
						display: flex;
						gap: 10px;

						p {
							opacity: 0.4;
							padding: 10px;
							color: #fff;
							background-color: #000;
							border-radius: 2px;
							cursor: pointer;

							&:global(.active) {
								opacity: 1;
							}

							@include mobile {
								font-size: 12px;
							}
						}
					}

					&-table {
						display: none;
						flex-direction: column;
						gap: 40px;

						&:global(.active) {
							display: flex;
						}

						&-header {
							display: grid;
							grid-template-columns: 1fr 1fr 1fr;
							gap: 10px;
							padding-bottom: 10px;
							margin-bottom: -10px;
							border-bottom: 1px solid #80808030;

							p {
								text-align: end;
								@include mobile {
									display: flex;
									align-items: center;
									text-align: center;
									@include fluid-text(12, 12);
								}
							}
						}
						&-content {
							display: flex;
							flex-direction: column;
							gap: 20px;

							@include mobile {
								gap: 30px;
							}	
							div {
								display: grid;
								grid-template-columns: 1fr 1fr 1fr;
								gap: 10px;

								p {
									@include mobile {
										&:not(:first-child) {
											text-align: center;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
