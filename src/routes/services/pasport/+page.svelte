<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores'

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<section class="service-section --margin-bottom">
	<div class="container">
		<div class="service">
			<div class="service-hero">
				<h1 class="--text-xl">Срочное оформление загранпаспорта</h1>
				<div class="service-hero-info">
					<img src="/pasport.jpg" alt="" />
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

<Cta />

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
	}
</style>
