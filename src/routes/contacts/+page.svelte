<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Контакты - Визовое агентство Москва</title>
	<meta name="description" content="Контактная информация Визового агентства в Москве. Адрес, телефон, электронная почта и карта проезда. Свяжитесь с нами для оформления виз.">
	<meta name="og:title" content="Контакты - Визовое агентство Москва">
	<meta name="og:description" content="Свяжитесь с Визовым агентством в Москве для оформления виз. Адрес, телефон, электронная почта и карта проезда. Мы всегда на связи.">
	<meta name="og:url" content={$page.url.href}>
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="contacts-section --margin-bottom">
	<div class="container">
		<div class="contacts">
			<div class="contacts-hero">
				<h1 class="--text-xl">Контакты</h1>
				<div class="contacts-hero-grid">
					<div class="contacts-hero-grid-element">
						<p>аДРЕС</p>
						<p>Москва, ул. Линейный проезд 6А</p>
					</div>
					<div class="contacts-hero-grid-element">
						<p>тЕЛЕФОН</p>
						<a href="tel:+79995912865">+7 999 591 2865</a>
					</div>
					<div class="contacts-hero-grid-element">
						<p>email</p>
						<a href="mailto:info@pasport.pro">info@pasport.pro</a>
					</div>
					<div class="contacts-hero-grid-element">
						<p>вРЕМЯ РАБОТЫ</p>
						<p>Пн.-Пт. 10:00 - 18:00</p>
					</div>
				</div>
			</div>
			<div class="contacts-map">
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A08809e2391f554637ca1560a490cbcdb5df8ad53635aaab77b3a0442c5eae133&amp;source=constructor"
					width="100%"
					height="600"
					frameborder="0"
				></iframe>
			</div>
			<div class="contacts-form">
				<div class="consult-modal">
					<div class="consult-modal-body">
						<p class="--text-xl">Заявка на визовую консультацию</p>

						<form action="#" method="POST">
							<div class="consult-modal-form-body">
								<div>
									<label for="name">Ваше имя</label>
									<input type="text" name="name" placeholder="Введите имя" />
								</div>
								<div>
									<label for="name">Телефон</label>
									<input type="text" name="name" placeholder="Введите телефон" />
								</div>
								<div>
									<label for="name">Email</label>
									<input type="text" name="name" placeholder="Введите email" />
								</div>
							</div>
							<button type="submit" class="btn-main">Отправить заявку</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.contacts {
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

			&-grid {
				display: flex;
				flex-direction: column;

				&-element {
					display: grid;
					grid-template-columns: 1fr 1fr;
					column-gap: 27px;
					border-top: 1px solid #ededed;
					padding: 40px 0;

					@include mobile {
						padding: 20px 0;
					}

					p {
						&:first-child {
							text-transform: uppercase;
						}
					}

					&:last-child {
						border-bottom: 1px solid #ededed;
					}
				}
			}
		}

		&-map {
			iframe {
				filter: grayscale(1);

				@include mobile {
					height: 400px;
					width: 100vw;
					margin: 0 -20px;
				}
			}
		}
	}
	.consult-modal {
		&-body {
			display: flex;
			flex-direction: column;
			gap: 120px;

			.close {
				position: absolute;
				right: 0;
				top: 60px;
				cursor: pointer;

				@include mobile {
					display: none;
				}
			}

			@include tablet {
				gap: 90px;
			}

			form {
				display: flex;
				flex-direction: column;
				gap: 120px;

				@include tablet {
					gap: 60px;
				}
				div {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					column-gap: 27px;

					@include tablet {
						display: flex;
						flex-direction: column;
						gap: 40px;
					}

					div {
						display: flex;
						flex-direction: column;
						gap: 20px;

						@include tablet {
							gap: 5px;
						}

						label {
							color: #808080;
						}

						input {
							padding: 20px 0;
							border: none;
							border-bottom: 1px solid #ededed;
							color: #000;

							@include fluid-text(20, 20);
						}
					}
				}
			}
		}
	}
</style>
