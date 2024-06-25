<script>
</script>

<section>
	<div class="container">
		<div class="visas-grid">
			<h4 class="visas-grid-title --text-l">Визы</h4>
			<div class="visas-grid-columns">
				<div class="visas-grid-columns-list">
					<p>Популярные</p>
					<a href="#">
						Испания
						<img src="/spainflag.webp" alt="spain flag" />
					</a>
					<a href="#">
						Греция
						<img src="/greeceflag.webp" alt="greece flag" />
					</a>
					<a href="#"
						>Франция
						<img src="/franceflag.webp" alt="france flag" />
					</a>
					<a href="#"
						>Норвегия
						<img src="/norwayflag.webp" alt="norway flag" />
					</a>
					<a href="#"
						>Италия
						<img src="/italyflag.webp" alt="italy flag" />
					</a>
					<a href="#"
						>Индия
						<img src="/indiaflag.webp" alt="india flag" />
					</a>
					<a href="#"
						>США
						<img src="/usaflag.webp" alt="usa flag" />
					</a>
				</div>
				<div class="visas-grid-columns-list">
					<p>Европа</p>
					<a href="#">
						Испания
						<img src="/spainflag.webp" alt="spain flag" />
					</a>
					<a href="#">
						Греция
						<img src="/greeceflag.webp" alt="greece flag" />
					</a>
					<a href="#"
						>Франция
						<img src="/franceflag.webp" alt="france flag" />
					</a>
					<a href="#"
						>Норвегия
						<img src="/norwayflag.webp" alt="norway flag" />
					</a>
					<a href="#"
						>Италия
						<img src="/italyflag.webp" alt="italy flag" />
					</a>
				</div>
				<div class="visas-grid-columns-list">
					<p>Азия</p>
					<a href="#">
						Китай
						<img src="/chinaflag.webp" alt="china flag" />
					</a>
					<a href="#"
						>Индия
						<img src="/indiaflag.webp" alt="india flag" />
					</a>
				</div>
				<div class="visas-grid-columns-list">
					<p>Другие</p>
					<a href="#"
						>США
						<img src="/usaflag.webp" alt="usa flag" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.visas-grid {
		display: flex;
		flex-direction: column;
		gap: 90px;
		padding: 40px 0 150px 0;

		&-columns {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 28px;

			@include mobile {
				display: flex;
				flex-direction: column;
				gap: 60px;
			}

			&-list {
				display: flex;
				flex-direction: column;

				@include mobile {
					flex-direction: row;
					flex-wrap: wrap;
				}

				p {
					padding-bottom: 60px;
					color: #808080;

					@include mobile {
						flex: 0 0 100%;
                        padding-bottom: 20px;

                        @include fluid-text(13,13);
					}
				}

				a {
					padding: 15px 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-top: 1px solid #ededed;

					@include mobile {
						flex: 0 0 50%;
                        border: none;
                        border-bottom: 1px solid #ededed;

                        &:nth-child(2){
                            border-top: 1px solid #ededed;
                        }
                        &:nth-child(3){
                            border-top: 1px solid #ededed;
                        }

						img {
							display: none;
						}
					}

					img {
						max-width: 100px;
						opacity: 0;
					}

					&:last-child {
						border-bottom: 1px solid #ededed;
					}

					@include fluid-text(30, 16);

					@include hover {
						text-decoration: underline;
						img {
							opacity: 1;
						}
					}
				}
			}
		}
	}
</style>
