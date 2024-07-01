<script>
	import { onMount } from 'svelte';

	let pagination;
	let section;
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
	function hoveredLink() {
		const links = section.querySelectorAll('.whyus-slider__element h3 a');
		const images = section.querySelectorAll('.bg-cover');

		for (let i = 0; i < links.length; i++) {
			images[i].classList.remove('hovered');

			links[i].addEventListener('mouseover', () => {
				images[i].classList.add('hovered');
			});
			links[i].addEventListener('mouseleave', () => {
				images[i].classList.remove('hovered');
			});
		}
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
			hoveredLink();
		}
	});
</script>

<section bind:this={section} id="reviews">
	<div class="container">
		<div class="whyus">
			<enhanced:img src="/static/china-flag.webp" alt="china flag" class="bg-cover" />
			<enhanced:img src="/static/china-flag.webp" alt="china flag" class="bg-cover" />
			<enhanced:img src="/static/china-flag.webp" alt="china flag" class="bg-cover hovered" />
			<p class="whyus-microtitle">Отзывы клиентов</p>
			<div class="whyus-slider__wrap" bind:this={sliderWrap}>
				<div class="whyus-slider" bind:this={slider}>
					<div class="whyus-slider__element">
						<h3 class="--text-l">
							Недавно оформлял <a href="#">визу в Китай.</a> Спасибо большое за хорошую работу Сергею!
							Очень доволен его работой. Всегда был на связи и оперативно отвечал на все вопросы, которые
							у меня возникали.
						</h3>
						<div class="whyus-slider__element-avatar">
							<enhanced:img src="/static/avatar.webp" alt="user avatar" />

							<div>
								<p>Евгений Манн</p>
								<a href="#">Отзыв с сайта Yandex</a>
							</div>
						</div>
					</div>
					<div class="whyus-slider__element">
						<h3 class="--text-l">
							Недавно оформлял <a href="#">визу в Китай.</a> Спасибо большое за хорошую работу Сергею!
							Очень доволен его работой. Всегда был на связи и оперативно отвечал на все вопросы, которые
							у меня возникали.
						</h3>
						<div class="whyus-slider__element-avatar">
							<enhanced:img src="/static/avatar.webp" alt="user avatar" />

							<div>
								<p>Евгений Манн</p>
								<a href="#">Отзыв с сайта Yandex</a>
							</div>
						</div>
					</div>
					<div class="whyus-slider__element">
						<h3 class="--text-l">
							Недавно оформлял <a href="#">визу в Китай.</a> Спасибо большое за хорошую работу Сергею!
							Очень доволен его работой. Всегда был на связи и оперативно отвечал на все вопросы, которые
							у меня возникали.
						</h3>
						<div class="whyus-slider__element-avatar">
							<enhanced:img src="/static/avatar.webp" alt="user avatar" />

							<div>
								<p>Евгений Манн</p>
								<a href="#">Отзыв с сайта Yandex</a>
							</div>
						</div>
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
	section {
		@include mobile {
			background-color: #000;
		}
	}
	.whyus {
		display: flex;
		flex-direction: column;
		gap: 140px;
		padding: 40px 0;

		:global(picture:has(.bg-cover)) {
			position: absolute;
			top: 0;
			left: -20px;
			width: calc(100% + 40px);
			height: 100%;
			object-fit: cover;
			opacity: 0;
			filter: brightness(80%);
			

			transition: all 0.8s ease;

			@include mobile {
				display: none;
			}
		}

		:global(picture:has(.hovered)) {
			opacity: 1;
		}

		&:has(.hovered) {
			p,
			h3,
			a {
				transition: all 0.8s ease;
				color: #fff;
			}
			svg {
				path {
					fill: #fff;
				}
			}
			.pagination__element.active {
				background-color: #fff;
			}
		}

		@include tablet {
			gap: 80px;
			padding: 30px 0;
		}

		@include mobile {
			gap: 60px;
			padding: 30px 0;

			p,
			h3,
			a {
				transition: all 0.8s ease;
				color: #fff;
			}
			svg {
				path {
					fill: #fff;
				}
			}
			.pagination__element.active {
				background-color: #fff;
			}
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

				&-avatar {
					display: flex;
					gap: 15px;
					text-align: start;

					@include mobile {
						flex-direction: column;
						align-items: center;
						gap: 10px;
					}

					img {
						width: 80px;
					}
					div {
						display: flex;
						flex-direction: column;
						gap: 5px;

						@include mobile {
							text-align: center;

							a {
								text-decoration: underline;
								text-decoration-thickness: 1px;
								text-underline-offset: 2px;
							}
						}
					}
				}

				h3 {
					width: 85%;
					text-align: center;

					a {
						text-decoration: underline;
						text-decoration-thickness: 2px;
						text-underline-offset: 3px;
					}
					@include mobile {
						text-wrap: balance;
						width: 100%;
					}
				}

				&.hovered {
					color: #fff;
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
