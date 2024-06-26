<script>
	import { onMount } from 'svelte';

	let grid;
	let pagination;
	let currentPosition;
	let paginationIndex;

	$: {
		if (pagination) {
			paginationHandle(paginationIndex);
		}
	}
	$: {
		if (pagination) {
			paginationIndex = Math.round(currentPosition / grid.clientWidth);
		}
	}

	function gridHover() {
		const elems = Array.from(grid.querySelectorAll('.popular-ways__element'));

		grid.addEventListener('mouseover', (event) => {
			const target = event.target.closest('.popular-ways__element');
			if (!target || !elems.includes(target)) return;

			elems.forEach((el) => el.classList.remove('active'));
			target.classList.add('active');
		});

		grid.addEventListener('mouseleave', (event) => {
			const target = event.target.closest('.popular-ways__element');
			if (!target || !elems.includes(target)) return;

			if (target.classList.contains('active')) {
				target.classList.remove('active');
			}
		});
	}
	function paginationHandle(num) {
		const paginationElements = pagination.querySelectorAll('div');
		paginationElements.forEach((el) => el.classList.remove('active'));
		paginationElements[num]?.classList.add('active');
	}

	onMount(() => {
		if (grid) {
			if (window.innerWidth > 768) {
				gridHover();
			}
			grid.addEventListener('scroll', () => {
				currentPosition = grid.scrollLeft;
			});
			window.addEventListener('resize', () => {
				currentPosition = grid.scrollLeft;
				if (window.innerWidth > 768) {
					gridHover();
				}
			});
		}
	});
</script>

<section>
	<div class="container">
		<p class="micro-title">Популярные направления</p>
		<div class="popular-ways" bind:this={grid}>
			<a href="/visas/usa" class="popular-ways__element">
				<enhanced:img  src="/static/usa.webp" alt="usa looksight" />
				<p>США</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/spain" class="popular-ways__element">
				<enhanced:img  src="/static/spain.webp" alt="spain looksight" />
				<p>Испания</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/china" class="popular-ways__element active">
				<enhanced:img  src="/static/china.webp" alt="china looksight" />
				<p>Китай</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/india" class="popular-ways__element">
				<enhanced:img  src="/static/india.webp" alt="india looksight" />
				<p>Индия</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/greece" class="popular-ways__element">
				<enhanced:img  src="/static/greece.jpg" alt="greece looksight" />
				<p>Греция</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/france" class="popular-ways__element">
				<enhanced:img  src="/static/france.webp" alt="france looksight" />
				<p>Франция</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/singapur" class="popular-ways__element">
				<enhanced:img  src="/static/singapore.jpg" alt="singapur looksight" />
				<p>Сингапур</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
			<a href="/visas/italy" class="popular-ways__element">
				<enhanced:img  src="/static/italy.webp" alt="italy looksight" />
				<p>Италия</p>
				<button class="btn-svg">
					<span>Узнать подробнее</span>
				</button>
			</a>
		</div>
		<div class="pagination" bind:this={pagination}>
			<div class="pagination__element active"></div>
			<div class="pagination__element"></div>
			<div class="pagination__element"></div>
			<div class="pagination__element"></div>
			<div class="pagination__element"></div>
			<div class="pagination__element"></div>
			<div class="pagination__element"></div>
			<div class="pagination__element"></div>
		</div>
	</div>
</section>

<style lang="scss">
	.micro-title {
		display: none;

		@include mobile {
			z-index: 1;
			display: block;
			position: absolute;
			top: 30px;
			color: #fff;
		}
	}
	.popular-ways {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: auto auto;

		@include mobile {
			display: flex;

			overflow-x: scroll;
			scroll-snap-type: x mandatory;

			margin: 0 -20px;

			@include scrollbar;
		}

		&__element {
			display: flex;
			flex-direction: column;

			&.active {
				img {
					opacity: 1;
				}
				p {
					color: #fff;
				}
				button {
					opacity: 1;
				}
			}

			picture{
				aspect-ratio: 3/4;
				overflow: hidden;
			}
			img {
				opacity: 0;
				object-fit: cover;
				height: 100%;
			}
			p {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: var(--text-color);

				@include fluid-text(50, 45);

				@include tablet {
					@include fluid-text(45, 25);
				}
			}

			button {
				opacity: 0;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: 40px;
				@include tablet {
					bottom: 20px;
				}
			}

			@include mobile {
				flex: 0 0 100%;
				scroll-snap-align: start;

				picture{
					height: auto;
					aspect-ratio: 1/1.6;
					overflow: hidden;
				}
				img {
					opacity: 1;
					object-fit: cover;
					height: 100%;
					filter: brightness(80%);
				}
				p {
					color: #fff;

					@include fluid-text(62, 62);
				}
				button {
					opacity: 1;
					bottom: 38%;

					span {
						@include fluid-text(16, 16);
					}
				}
			}
		}
	}
	.pagination {
		display: none;

		@include mobile {
			position: absolute;
			bottom: 30px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			gap: 6px;
			justify-content: center;
			align-items: center;
		}

		&__element {
			width: 8px;
			height: 8px;
			border-radius: 100%;
			background-color: #b5b5b5;

			&.active {
				background-color: #fff;
			}
		}
	}
</style>
