<script>
	import { onMount } from 'svelte';
	import { modalOpen } from '$lib/stores';

	let pagination;
	let paginationIndex = 0;
	let slider;
	let sliderWrap;
	let controlsVisible = false;
	let currentPosition = 0;

	$: nextDisabled = slider ? currentPosition >= slider.scrollWidth - slider.clientWidth - 1 : false;
	$: prevDisabled = currentPosition <= 0;
	$: {
		if (pagination) {
			paginationHandle(paginationIndex);
		}
	}
	$: {
		if (pagination) {
			paginationIndex = Math.round(currentPosition / slider.clientWidth);
		}
	}

	function slide(direction) {
		const moveAmount = slider.clientWidth;

		if (direction === 'next' && currentPosition < slider.scrollWidth - slider.clientWidth - 1) {
			currentPosition += moveAmount;
		} else if (direction === 'prev' && currentPosition > 0) {
			currentPosition -= moveAmount;
		}

		slider.scrollTo({ left: currentPosition, behavior: 'smooth' });
	}

	function paginationHandle(num) {
		const paginationElements = pagination.querySelectorAll('div');
		paginationElements.forEach((el) => el.classList.remove('active'));
		paginationElements[num]?.classList.add('active');
	}

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			slider.addEventListener('scroll', () => {
				currentPosition = slider.scrollLeft;
			});
			window.addEventListener('resize', () => {
				currentPosition = slider.scrollLeft;
			});

			sliderWrap.addEventListener('mouseover', () => {
				controlsVisible = true;
			});
			sliderWrap.addEventListener('mouseleave', () => {
				controlsVisible = false;
			});
		}
	});
</script>

<section>
	<div class="container">
		<div class="whyus">
			<p class="whyus-microtitle">Почему мы?</p>
			<div class="whyus-slider__wrap" bind:this={sliderWrap}>
				<div class="whyus-slider" bind:this={slider}>
					<div class="whyus-slider__element">
						<h3 class="--text-xl">Мы заботимся о вашей визе,<br />как о своей!</h3>
						<p>Бесплатная консультация и забота о каждом клиенте</p>
						<button class="btn-main" on:click={toggleConsult}> Оформить визу </button>
					</div>
					<div class="whyus-slider__element">
						<h3 class="--text-xl">Мы заботимся о вашей визе,<br />как о своей!</h3>
						<p>Бесплатная консультация и забота о каждом клиенте</p>
						<button class="btn-main" on:click={toggleConsult}> Оформить визу </button>
					</div>
					<div class="whyus-slider__element">
						<h3 class="--text-xl">Мы заботимся о вашей визе,<br />как о своей!</h3>
						<p>Бесплатная консультация и забота о каждом клиенте</p>
						<button class="btn-main" on:click={toggleConsult}> Оформить визу </button>
					</div>
				</div>
				<button
					class="prev controls"
					class:visible={controlsVisible}
					on:click={() => slide('prev')}
					disabled={prevDisabled}
				>
					<svg
						width="121"
						height="12"
						viewBox="0 0 121 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM121 5.25L1 5.25V6.75L121 6.75V5.25Z"
							fill="#808080"
						/>
					</svg>
				</button>
				<button
					class="next controls"
					class:visible={controlsVisible}
					on:click={() => slide('next')}
					disabled={nextDisabled}
				>
					<svg
						width="121"
						height="12"
						viewBox="0 0 121 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM121 5.25L1 5.25V6.75L121 6.75V5.25Z"
							fill="#808080"
						/>
					</svg>
				</button>
			</div>
			<div class="pagination" bind:this={pagination}>
				<div class="pagination__element active"></div>
				<div class="pagination__element"></div>
				<div class="pagination__element"></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.whyus {
		display: flex;
		flex-direction: column;
		gap: 140px;
		padding: 40px 0;

		@include tablet {
			gap: 80px;
			padding: 30px 0;
		}

		@include mobile {
			gap: 60px;
			padding: 30px 0;
		}

		&-microtitle {
			color: #808080;
		}

		&-slider {
			display: flex;
			overflow-x: scroll;
			scroll-snap-type: x mandatory;

			@include scrollbar;

			&__wrap {
				.controls {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					opacity: 0;

					@include tablet {
						display: none;
					}

					&.prev {
						left: 0px;
					}
					&.next {
						right: 0px;
						svg {
							transform: rotate(180deg);
						}
					}

					&.visible {
						opacity: 1;
					}

					&:disabled {
						opacity: 0;
					}
				}
			}

			&__element {
				display: flex;
				flex-direction: column;
				gap: 40px;
				flex: 0 0 100%;
				text-align: center;
				align-items: center;
				justify-content: center;
				scroll-snap-align: start;

				@include mobile {
					button {
						display: none;
					}
				}

				p {
					padding-top: 50px;

					@include mobile {
						text-wrap: balance;
					}
				}
				h3 {
					@include mobile {
						text-wrap: balance;
						padding: 0 2px;
					}
				}
			}
		}
	}
	.pagination {
		display: flex;
		gap: 6px;
		justify-content: center;
		align-items: center;

		@include mobile {
			padding-top: 60px;
		}

		&__element {
			width: 8px;
			height: 8px;
			border-radius: 100%;
			background-color: #b5b5b5;

			&.active {
				background-color: #777777;
			}
		}
	}
</style>
