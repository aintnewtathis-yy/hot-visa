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
				<h1 class="--text-xl">Страхование туристов</h1>
				<div class="service-hero-info">
					<img src="/service.png" alt="" />
					<div>
						<p>
							Отпуск — это долгожданное событие, к которому готовятся заранее, планируя каждый день
							отдыха. Не забудьте перед началом поездки приобрести туристическую страховку. Полис
							обеспечит вам финансовую защиту в случае болезни, утраты багажа, отмены поездки и
							других непредвиденных ситуаций. Ваш отдых в России или за рубежом пройдет спокойнее с
							поддержкой надежной страховой компании.
						</p>
						<button class="btn-main" on:click={toggleConsult}> Получить страховку </button>
					</div>
				</div>
			</div>
			<div class="service-text">
				<h2 class="--text-xl-l">COVID-19</h2>
				<p>
					Медицинская страховка для путешествий пригодится на случай заражения COVID-19. Полис
					покроет расходы на амбулаторное и/или стационарное лечение от коронавирусной инфекции. В
					базовый пакет входят медицинская транспортировка и репатриация. Если из-за болезни вы не
					сможете вернуться домой вовремя, страховка возместит расходы на покупку новых билетов для
					вас и ваших несовершеннолетних детей. Дополнительным преимуществом при страховании поездок
					по России является выплата до 500 000 руб. при постановке диагноза «коронавирус».
				</p>
			</div>
			<div class="service-text">
				<h2 class="--text-xl-l">Как выбрать страховую сумму</h2>
				<p>
					Минимальное покрытие медицинской страховки для поездки за границу составляет 30 000 у.е.,
					что достаточно для непродолжительного и спокойного отдыха.
					<br />
					Берёте с собой в зарубежную поездку детей или родителей? Увеличьте сумму медицинской страховки
					до 50 000 у.е., чтобы чувствовать себя уверенно.
					<br />
					Планируете заниматься спортом или экстремальными видами отдыха? Увеличьте покрытие до 100 000
					у.е., так как лечение травм за границей для иностранных туристов всегда обходится дорого.
					<br />
					В пределах указанной суммы страховая компания возместит все расходы по страховым случаям. Если
					покрытия не хватит, путешественник оплачивает медицинские услуги за свой счет.
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
