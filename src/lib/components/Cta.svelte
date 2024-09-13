<script>
	let input;

	let success;
	let errors;
</script>

<section class="cta-section">
	<div class="container">
		<div class="cta">
			<p class="cta-microtitle">Заявка на бесплатную консультацию</p>
			<h3 class="--text-xl">Никогда не пропускаем ваш звонок: мы всегда на связи!</h3>
			<form
				class="cta-form"
				method="POST"
				on:submit|preventDefault={(e) => {
					e.preventDefault();
					const formData = new FormData();
					formData.append('phone', input.value);

					console.log(formData);
					fetch('/form', {
						method: 'POST',
						body: formData
					})
						.then((response) => response.json())
						.then((data) => {
							console.log(data);
							if (data.success) {
								success = data.success;
							} else if (data.errors) {
								errors = data.errors;
							}
						})
						.catch((error) => {
							console.error('Error submitting form:', error);
							// Handle error
						});
				}}
			>
				<p>Номер телефона</p>
				<div>
					<input type="tel" name="phone" placeholder="+79999999999" bind:this={input} />
					{#if success}
						<p>Ваше обращение отправлено! Оператор скоро с вами свяжется!</p>
					{:else if errors?.phone}
						<p>{errors?.phone}</p>
					{/if}
					<button class="btn-main" type="submit">Перезвоните мне</button>
				</div>
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	.cta {
		display: flex;
		flex-direction: column;
		gap: 140px;

		&-microtitle {
			color: #fff;
		}
		h3 {
			color: #fff;
			width: 80%;
			text-wrap: balance;
			text-align: center;
			margin: 0 auto;

			@include tablet {
				width: 100%;
			}
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 20px;
			max-width: 600px;
			width: 100%;
			margin: 0 auto;

			p {
				color: #fff;
			}
			div {
				display: flex;

				@include mobile {
					flex-direction: column;
					gap: 10px;
				}

				input {
					padding: 17px;
					background-color: #fff;
					width: 100%;
					max-width: 300px;
					color: #000;
					border: none;

					@include mobile {
						max-width: 100%;
						text-align: center;
					}
				}
			}
		}

		&-section {
			padding: 40px 0 200px 0;
			background-image: url('/cta-bg.webp');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;

			@include mobile {
				padding: 30px 0 140px 0;
			}
		}
	}
</style>
