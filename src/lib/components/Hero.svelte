<script>
</script>

<section>
	<div class="container">
		<div class="hero">
			<h1>
				Первые <br />в быстром и удобном <br />оформлении виз
			</h1>
			<button class="btn-main-invert"> Бесплатная консультация </button>
		</div>
	</div>
	<button class="btn-main-invert"> Бесплатная консультация </button>
</section>

<style lang="scss">
	section {
		background: linear-gradient(rgb(0, 0, 0, 0.2), rgba(0,0,0,0.2)), url('/hero.webp');
		background-repeat: no-repeat;
		background-position: top center;
		background-size: 100%;
		min-height: 100dvh;

		button {
			display: none;
		}

		@include mobile {
			background-size: cover;
			
		}
	}
	.hero {
		display: flex;
		flex-direction: column;
		gap: 60px;

		padding: 200px 0 150px 0;

		button {
			display: block;
		}

		@include mobile {
			justify-content: space-between;
			min-height: 100vh;
			padding: 100px 0 80px 0;

			button {
				display: none;
			}
		}

		@include mobile {
			justify-content: space-between;
		}

		h1 {
			@include fluid-text(139, 57);
			width: 100%;
			text-wrap: balance;
			color: #fff;
			line-height: 97%;
			letter-spacing: -3%;
		}
	}
</style>
