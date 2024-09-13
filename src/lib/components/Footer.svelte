<script>
	import { modalOpen } from '$lib/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<footer>
	<div class="container">
		<div class="footer">
			<div class="footer-top">
				<button class="btn-main" on:click={toggleConsult}> Связаться </button>
				<a href="#">
					<img src="/logo.svg" alt="logo icon" />
				</a>
			</div>
			<div class="footer-mid">
				<div class="footer-mid-column">
					<h6>HOTVISA</h6>
					<ul class="footer-mid-column-list">
						<li>
							<a href="/">Главная</a>
						</li>
						<li>
							<a href="/#reviews">Отзывы</a>
						</li>
						<li>
							<a href="/about">О нас</a>
						</li>
						<li>
							<a href="/news">Новости</a>
						</li>
					</ul>
				</div>
				<div class="footer-mid-column">
					<h6>визы</h6>
					<ul class="footer-mid-column-list">
						<li>
							<a href="/visas/china">Китай</a>
						</li>
						<li>
							<a href="/visas/bolgaria">Болгария</a>
						</li>
						<li>
							<a href="/visas/uk">Великобритания</a>
						</li>
						<li>
							<a href="/visas/germany">Германия</a>
						</li>
						<li>
							<a href="/visas/greece">Греция</a>
						</li>
						<li>
							<a href="/visas/spain">Испания</a>
						</li>
						<li>
							<a href="/visas/italy">Италия</a>
						</li>
						<li>
							<a href="/visas/canada">Канада</a>
						</li>
						<li>
							<a href="/visas/cipr">Кипр</a>
						</li>
						<li>
							<a href="/visas/france">Франция</a>
						</li>
						<li>
							<a href="/visas/indonesia">Индонезия</a>
						</li>
						<li>
							<a href="/visas/india">Индия</a>
						</li>
						<li>
							<a href="/visas/singapur">Сингапур</a>
						</li>
						<li>
							<a href="/visas/usa">США</a>
						</li>
					</ul>
				</div>
				<div class="footer-mid-column">
					<h6>услуги</h6>
					<ul class="footer-mid-column-list">
						<li>
							<a href="/services/pasport">Получение загранпаспорта</a>
						</li>
						<li>
							<a href="/services/delivery">Курьерская доставка</a>
						</li>
					</ul>
				</div>
				<div class="footer-mid-column">
					<h6>контакты</h6>
					<ul class="footer-mid-column-list">
						<li>
							<p>Москва, ул. Линейный проезд 6А</p>
						</li>
						<li>
							<a href="tel:+79995912865">+7 999 591 2865</a>
						</li>
						<li>
							<a href="mailto:info@pasport.pro">info@pasport.pro</a>
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
