<script>
	import Reviews from '$lib/components/Reviews.svelte';
</script>

<section class="about-section --margin-bottom">
	<div class="container">
		<div class="about">
			<div class="about-hero">
				<h1 class="--text-xl">О компании HOTVISA</h1>
				<div>
					<img src="/about.webp" alt="meeting" />
					<div>
						<p>
							Вот уже c 2002 года  наша команда находится на рынке и качественно и быстро выполняет
							свою работу!
						</p>
						<p>
							Мы предлагаем вам получение визы в Китай, Америку, Великобританию, страны шенгенской
							зоны: Грецию, Испанию, Италию, а также другие популярные направления. Уровень нашей
							компетенции позволяет оформлять не только стандартные визы короткого пребывания (в
							основном туристические), но и вид на жительство. На данный момент мы предлагаем услуги
							оформления ВНЖ Греции и ВНЖ Италии. Быстро, качественно и на лучших условиях – это про
							нас!
						</p>
						<p>
							Наша цель — предоставить максимально удобный и оперативный сервис по оформлению
							визовых документов. Мы консультируем в офисе, по телефону и онлайн.
						</p>
					</div>
				</div>
			</div>
			<div class="about-numbers">
				<div class="about-numbers-element">
					<h2 class="--text-xl">2002</h2>
					<p>с 2002 года на рынке</p>
				</div>
				<div class="about-numbers-element">
					<h2 class="--text-xl">100.000</h2>
					<p>более 100.000 виз уже выдали</p>
				</div>
				<div class="about-numbers-element">
					<h2 class="--text-xl">50</h2>
					<p>более 50 направлений</p>
				</div>
				<div class="about-numbers-element">
					<h2 class="--text-xl">2002</h2>
					<p>с 2002 года на рынке</p>
				</div>
			</div>
			<div class="faq">
				<p class="faq-microtitle">Что о нас думают люди</p>
				<div class="faq-grid">
					<a href="#" class="faq-grid-element"> рейтинг 4.9 на сайте <span>YANDEX.RU</span> </a>
					<a href="#" class="faq-grid-element"> рейтинг 5.0 на сайте <span>2GIS.ru</span> </a>
					<a href="#" class="faq-grid-element"> рейтинг 5.0 на сайте <span>ZOON.ru</span> </a>
				</div>
			</div>
		</div>
	</div>
</section>

<Reviews />

<style lang="scss">
	.about {
		display: flex;
		flex-direction: column;
		gap: 120px;

		@include tablet {
			gap: 60px;
		}

		&-section {
			padding-top: 200px;

			@include tablet {
				padding-top: 100px;
			}
		}

		&-hero {
			display: flex;
			flex-direction: column;
			gap: 60px;

			div {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 60px;

				@include mobile {
					display: flex;
					flex-direction: column-reverse;

					img {
						width: 100vw;
						margin-inline: -20px;
					}
				}

				p {
					@include fluid-text(20, 16);
				}

				div {
					display: flex;
					flex-direction: column;
					gap: 20px;
				}
			}
		}

		&-numbers {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;

			@include tablet {
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;

				width: 100vw;
				margin-inline: -20px;
			}

			&-element {
				display: flex;
				flex-direction: column;
				gap: 20px;
				align-items: center;
				justify-content: center;
				text-align: center;
				padding: 130px 0;

				border-right: 1px solid #ededed;
				border-top: 1px solid #ededed;
				border-bottom: 1px solid #ededed;

				&:last-child {
					border-right: none;
				}

				@include tablet {
					border: none;
					border-top: 1px solid #ededed;
					padding: 40px 0;

					&:nth-child(1) {
						border-right: 1px solid #ededed;
					}
					&:nth-child(3) {
						border-bottom: 1px solid #ededed;
						border-right: 1px solid #ededed;
					}
					&:nth-child(4) {
						border-bottom: 1px solid #ededed;
					}
				}
			}
		}
	}
	.faq {
		padding: 40px 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 90px;

		@include mobile {
			padding: 30px 0;
			gap: 60px;
		}

		&-microtitle {
			color: #808080;
		}

		&-grid {
			display: flex;
			flex-direction: column;

			&-element {
				width: 100%;
				margin: 0 auto;
				text-align: center;
				padding: 33px 0;
				border-bottom: 1px solid #ededed;

				span {
					text-transform: uppercase;
				}

				&:first-child {
					border-top: 1px solid #ededed;
				}

				@include hover {
					background-color: #000;
					border-color: transparent;
					color: #fff;

					span {
						color: #fff;
					}
				}

				@include fluid-text(30, 28);

				@include mobile {
					width: 100%;
					text-align: start;
					text-wrap: balance;
					padding: 20px 0;
					text-align: center;

					@include fluid-text(16, 16);

					span {
						text-decoration: underline;
					}

					@include hover {
						background-color: #fff;
						color: #000;
					}
				}
			}
		}
	}
</style>
