<script>
	import Cta from '$lib/components/Cta.svelte';

	export let data;
</script>

<section class="news-single-section --margin-bottom">
	<div class="container">
		<div class="news-single">
			<h1 class="--text-xl">МИД РФ Предупредил об опасностях на Олимпиаде в Париже</h1>
			<img src="/news-example.png" alt="news thumbnail" />
			<div class="news-single-text">
				<p>
					Внешний министерство России предостерегло граждан, направляющихсяна олимпиаду в
					Париже, о возможных провокациях из-за неприязненной политики Франции и русофобии в СМИ.
					Руководитель консульского отдела Андрей Климов сообщил ТАСС, что французские власти
					запретили использование российской символики на соревнованиях, и это запрет может быть
					распространен на улицы города.
				</p>
                <p>
					Внешний министерство России предостерегло граждан, направляющихсяна олимпиаду в
					Париже, о возможных провокациях из-за неприязненной политики Франции и русофобии в СМИ.
					Руководитель консульского отдела Андрей Климов сообщил ТАСС, что французские власти
					запретили использование российской символики на соревнованиях, и это запрет может быть
					распространен на улицы города.
				</p>
				<p>
					Климов также отметил о случаях отказа россиянам в посадке на рейсы Turkish Airlines
					и призвал к улучшению ситуации. Он рекомендовал туристам, занимающимся активным отдыхом,
					увеличить страховое покрытие.
				</p>
				<p>
					Климов также отметил о случаях отказа россиянам в посадке на рейсы Turkish Airlines
					и призвал к улучшению ситуации. Он рекомендовал туристам, занимающимся активным отдыхом,
					увеличить страховое покрытие.
				</p>
			</div>
		</div>
	</div>
</section>

<Cta />

<style lang="scss">
	.news-single {
		display: flex;
		flex-direction: column;
		gap: 60px;

        @include tablet {
            gap: 40px;
        }

        img {
			@include tablet {

				margin: 20px -20px 0 -20px;
				width: 100vw;
			}
		}

		&-section {
			padding: 60px 0 0 0;
		}

		&-text {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;

			column-gap: 60px;
			row-gap: 20px;

			@include tablet {
				display: flex;
				flex-direction: column;
				gap: 30px;

				p {
					text-wrap: wrap;
				}
			}
		}
	}
</style>
