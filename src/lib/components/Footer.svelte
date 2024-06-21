<script>
</script>

<footer>
	<div class="container">
		<div class="footer">
			<div class="footer-top">
				<button class="btn-main"> Связаться </button>
				<a href="#">
					<img src="/logo.svg" alt="logo icon" />
				</a>
			</div>
			<div class="footer-mid">
				<div class="footer-mid-column">
					<h6>HOTVISA</h6>
					<ul class="footer-mid-column-list">
						<li>
							<a href="#">Главная</a>
						</li>
						<li>
							<a href="#">Отзывы</a>
						</li>
						<li>
							<a href="#">Вопросы</a>
						</li>
						<li>
							<a href="#">О нас</a>
						</li>
						<li>
							<a href="#">Новости</a>
						</li>
					</ul>
				</div>
				<div class="footer-mid-column">
					<h6>визы</h6>
					<ul class="footer-mid-column-list">
						<li>
							<a href="#">Болгария</a>
						</li>
						<li>
							<a href="#">Великобритания</a>
						</li>
						<li>
							<a href="#">Германия</a>
						</li>
						<li>
							<a href="#">Греция</a>
						</li>
						<li>
							<a href="#">Испания</a>
						</li>
						<li>
							<a href="#">Италия</a>
						</li>
						<li>
							<a href="#">Канада</a>
						</li>
						<li>
							<a href="#">Кипр</a>
						</li>
						<li>
							<a href="#">Франция</a>
						</li>
						<li>
							<a href="#">Индонезия</a>
						</li>
						<li>
							<a href="#">Индия</a>
						</li>
						<li>
							<a href="#">Китай</a>
						</li>
						<li>
							<a href="#">Сингапур</a>
						</li>
						<li>
							<a href="#">США</a>
						</li>
					</ul>
				</div>
				<div class="footer-mid-column">
					<h6>услуги</h6>
					<ul class="footer-mid-column-list">
						<li>
							<a href="#">Получение загранпаспорта</a>
						</li>
						<li>
							<a href="#">Страхование туристов</a>
						</li>
						<li>
							<a href="#">Курьерская доставка</a>
						</li>
					</ul>
				</div>
				<div class="footer-mid-column">
					<h6>контакты</h6>
					<ul class="footer-mid-column-list">
						<li>
							<p>Москва, ул. Лесная д.43, офис 221</p>
						</li>
						<li>
							<a href="tel:+7 925 117-1777">+7 925 117-1777</a>
						</li>
						<li>
							<a href="mailto:example@mail.ru">example@mail.ru</a>
						</li>
					</ul>
					<div class="socials">
						<a href="#">
							<img src="/social-placeholder.svg" alt="icon" />
						</a>
						<a href="#">
							<img src="/social-placeholder.svg" alt="icon" />
						</a>
						<a href="#">
							<img src="/social-placeholder.svg" alt="icon" />
						</a>
						<a href="#">
							<img src="/social-placeholder.svg" alt="icon" />
						</a>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div>
					<img src="/payment1.png" alt="payment icon" />
					<img src="/payment2.png" alt="payment icon" />
					<img src="/payment3.png" alt="payment icon" />
					<img src="/payment4.png" alt="payment icon" />
				</div>
				<p>©2003—2024 hotvisa, Все авторские права защищены.</p>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		border-top: 1px solid #ededed;
		margin: 60px 0;

		@include tablet {
			margin-bottom: 120px;
		}
	}
	.footer {
		display: flex;
		flex-direction: column;
		gap: 90px;

		&-top {
			display: flex;
			justify-content: space-between;
			padding-top: 30px;

			@include tablet {
				flex-direction: column;
				align-items: center;

				a {
					width: 30%;
				}
				button {
					display: none;
				}
			}
		}
		&-mid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;

			@include tablet {
				display: flex;
				flex-direction: column;
				gap: 60px;
				align-items: center;
			}

			&-column {
				display: flex;
				flex-direction: column;
				gap: 40px;

				@include tablet {
					gap: 30px;
				}

				&:last-child {
					align-items: end;
					text-align: end;

					@include tablet {
						align-items: center;
						text-align: center;
					}
				}

				@include tablet {
					text-align: center;
				}

				h6 {
					color: #808080;
					text-transform: uppercase;

					@include fluid-text(12, 12);
				}

				&-list {
					display: flex;
					flex-direction: column;
					gap: 10px;

					a {
						@include hover {
							opacity: 0.8;
						}
					}
				}

				.socials {
					display: flex;
					justify-content: flex-end;
					gap: 30px;

					a {
						width: 30px;
						height: 30px;

						img {
							object-fit: contain;
						}
					}
				}
			}
		}

		&-bottom {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;

			@include tablet {
				flex-direction: column;
				align-items: center;
				gap: 30px;
			}

			div {
				display: flex;
				gap: 10px;
				img {
					max-height: 20px;
					object-fit: contain;
				}
			}
			p {
				color: #808080;
				text-transform: uppercase;

				@include fluid-text(12, 12);
			}
		}
	}
</style>
