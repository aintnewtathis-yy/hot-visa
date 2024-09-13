<script>
	import Cta from '$lib/components/Cta.svelte';
	import { modalOpen } from '$lib/stores'
	import { page } from '$app/stores';

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}
</script>

<svelte:head>
	<title>Курьерская доставка документов - Визовое агентство Москва</title>
	<meta name="description" content="Услуги курьерской доставки документов для оформления виз. Мы доставляем документы по России и за рубеж, делая процесс получения визы быстрее и удобнее.">
	<meta name="og:title" content="Курьерская доставка документов - Визовое агентство Москва">
	<meta name="og:description" content="Экономьте свое время с услугой курьерской доставки документов от Визового агентства в Москве. Мы осуществляем доставку не только по России, но и в другие страны.">
	<meta name="og:url" content={$page.url.href}>
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section class="service-section --margin-bottom">
	<div class="container">
		<div class="service">
			<div class="service-hero">
				<h1 class="--text-xl">Курьерская доставка</h1>
				<div class="service-hero-info">
					<img src="/delivery.webp" alt="" />
					<div>
						<p>
							Для того чтобы сэкономить время наших клиентов, мы осуществляем доставку документов, к
							тому же не только на территории России, но и в другие страны. Конечно, все это для
							того, чтобы процесс получения визы сделать проще и быстрее.
						</p>
						<button class="btn-main" on:click={toggleConsult}>Заказать доставку</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Cta />

<style lang="scss">
	.service {
		display: flex;
		flex-direction: column;
		gap: 160px;

		@include tablet {
			gap: 90px;
		}

		&-hero {
			padding-top: 200px;
			display: flex;
			flex-direction: column;
			gap: 60px;

			
			@include fluid-text(20,16);

			@include tablet {
				padding-top: 100px;
			}

			&-info {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 60px;

				@include tablet {
					display: flex;
					flex-direction: column;
					gap: 30px;
				}

				div {
					display: flex;
					flex-direction: column;
					gap: 60px;

					@include mobile {
						button {
							display: none;
						}
					}
				}
			}
		}

		&-text {
			display: flex;
			flex-direction: column;
			gap: 90px;
			padding-top: 20px;
			border-top: 1px solid #ededed;

			@include fluid-text(20,16);

			ul{
				display: flex;
				flex-direction: column;
				gap: 30px;

				li{
					list-style: disc inside;
					width: 65%;
					text-wrap: balance;

					@include tablet {
						width: 100%;
					}
				}
			}

			@include tablet {
				gap: 60px;

				button {
					display: none;
				}
			}

			p {
				width: 65%;

				@include tablet {
					width: 100%;
				}
			}
		}
	}
</style>
