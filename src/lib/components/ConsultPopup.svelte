<script>
	let consultModal;

	function openConsult() {
		consultModal.classList.add('active');
	}

	export default {
		openConsult
	};
</script>

<div class="consult-modal" bind:this={consultModal}>
	<p class="text">Заявка на визовую консультацию</p>
	<p data-closeConsult class="close">закрыть</p>

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

<style lang="scss">
	.consult-modal {
		display: flex;
		height: 100%;
		flex-direction: column;
		padding-top: 60px;
		gap: 120px;

		position: absolute;
		z-index: 2;
		width: 100%;
		background-color: #fff;
		top: 100%;
		opacity: 0;
		pointer-events: none;

		&.active {
			opacity: 1;
			pointer-events: all;
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
</style>
