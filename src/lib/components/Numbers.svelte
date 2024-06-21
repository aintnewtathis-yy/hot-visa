<script>
</script>

<section>
	<div class="container">
		<div class="numbers">
			<p class="numbers-microtitle">HOT Visa - проверенный визовый центр</p>
			<div class="numbers-body">
				<p class="numbers-body-title --text-xl">Лидеры в сфере визовых услуг</p>
				<div class="numbers-body-grid">
					<div class="numbers-body-grid-element">
						<p class="--text-xl">2002</p>
						<p>с 2002 года на рынке</p>
					</div>
					<div class="numbers-body-grid-element">
						<p class="--text-xl">100.000</p>
						<p>более 100.000 виз уже выдали</p>
					</div>
					<div class="numbers-body-grid-element">
						<p class="--text-xl">50</p>
						<p>более 50 направлений</p>
					</div>
					<div class="numbers-body-grid-element">
						<p class="--text-xl">2002</p>
						<p>с 2002 года на рынке</p>
					</div>
				</div>
				<button class="btn-main-invert"> Записаться на консультацию </button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: #000;
	}
	.numbers {
		display: flex;
		flex-direction: column;
		gap: 90px;
		padding: 40px 0 90px 0;

		@include mobile {
			padding: 30px 0 0 0;
			gap: 60px;
		}

		&-microtitle {
			color: #fff;
		}

		&-body {
			display: flex;
			flex-direction: column;
			gap: 90px;

			&-title {
				text-align: center;
				color: #fff;
			}
			&-grid {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;

				@include mobile {
					grid-template-columns: 1fr 1fr;
                    margin-inline: -21px;
				}

				&-element {
					padding: 130px 0;
					display: flex;
					flex-direction: column;
					gap: 20px;
					text-align: center;
					border-top: 1px solid #404040;
					border-bottom: 1px solid #404040;
					border-right: 1px solid #404040;

					&:last-child {
						border-right: none;
					}

					@include mobile {
						padding: 40px 0;
                        border: none;
                        border-top: 1px solid #404040;
                        border-right: 1px solid #404040;
					}

					p {
						color: #fff;
					}
				}
			}

			.btn-main-invert {
				align-self: center;

				@include mobile {
					display: none;
				}
			}
		}
	}
</style>
