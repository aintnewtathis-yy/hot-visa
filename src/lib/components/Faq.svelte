<script>
</script>

<section>
	<div class="container">
		<div class="faq">
			<p class="faq-microtitle">Вопросы</p>
			<div class="faq-grid">
				<a href="#" class="faq-grid-element"> Вы оформляете визу в Грецию для детей? </a>
				<a href="#" class="faq-grid-element">
					Можно ли оформить визу с минимальным участием под ключ?
				</a>
				<a href="#" class="faq-grid-element"> Важен ли срок действия загранпаспорта? </a>
				<a href="#" class="faq-grid-element"> Важен ли срок действия загранпаспорта? </a>
				<a href="#" class="faq-grid-element">
					Нужно ли пройти собеседование для получения визы в Англию?
				</a>
				<a href="#" class="faq-grid-element"> Можно заранее узнать, на какой срок дадут визу? </a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.faq {
		padding: 40px 0 150px 0;
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
				width: 70%;
				margin: 0 auto;
				text-align: center;
				padding: 33px 0;
				border-bottom: 1px solid #ededed;

				&:first-child {
					border-top: 1px solid #ededed;
				}

				@include hover {
					background-color: #000;
                    border-color: transparent;
					color: #fff;
				}

				@include fluid-text(30, 28);

				@include mobile {
					width: 100%;
					text-align: start;
					text-wrap: balance;
					padding: 20px 0;

					@include hover {
						background-color: #fff;
						color: #000;
					}
				}
			}
		}
	}
</style>
