<script>
</script>

<section>
	<div class="container">
		<div class="news">
			<h4 class="news-title --text-l">Новости</h4>
			<div class="news-grid">
				<a href="#" class="news-grid-element">
					<div>
						<enhanced:img src="/static/news.webp" alt="news thumbnail">
					</div>

					<div class="news-grid-element-info">
						<h5>Российских туристов в Японии во время цветения сакуры стало вдвое больше.</h5>
						<p>21 мая 2024</p>
					</div>
				</a>
				<a href="#" class="news-grid-element">
					<div>
                        <enhanced:img src="/static/news2.webp" alt="news thumbnail">
                </div>
					<div class="news-grid-element-info">
						<h5>Почему россиян не пускают в Мексику?</h5>
						<p>15 мая 2024</p>
					</div>
				</a>
				<a href="#" class="news-grid-element">
					<div>
                        <enhanced:img src="/static/news3.webp" alt="news thumbnail">
                    </div>
					<div class="news-grid-element-info">
						<h5>Шри-Ланка продлевает бесплатные визы для россиян на месяц</h5>
						<p>12 мая 2024</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.news {
		display: flex;
		flex-direction: column;
		gap: 90px;
		padding: 40px 0 150px 0;

		@include mobile {
			gap: 40px;
			padding: 30px 0;
		}

		&-grid {
			display: flex;
			flex-direction: column;

			&-element {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 28px;
				border-top: 1px solid #ededed;
				padding: 40px 0;

				&:last-child {
					border-bottom: 1px solid #ededed;
				}

				@include mobile {
					display: flex;
					flex-direction: column;
					gap: 10px;
					padding: 20px 0;
				}

				&-info {
					display: flex;
					flex-direction: column;
					gap: 30px;

					h5 {
						@include fluid-text(30, 16);

						text-decoration: underline;
					}
					p {
						color: #808080;
						@include fluid-text(14, 13);
					}
				}
			}
		}
	}
</style>
