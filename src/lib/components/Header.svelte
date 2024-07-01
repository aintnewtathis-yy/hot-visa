<script>
	import { onMount } from 'svelte';
	import { modalOpen } from '$lib/stores';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let visasMenu;
	let visasLink;
	let vnzhLink;
	let servicesLink;
	let visasMobileLink;
	let vnzhMobileLink;
	let servicesMobileLink;
	let burgerModal;
	let burgerIcon;
	let consultModal;
	let currentUrl = $page.route;

	$: {
		if (burgerIcon) {
			if ($page.route !== currentUrl) {
				burgerIcon.classList.remove('active');
				burgerModal.classList.remove('active');
				document.querySelector('body').classList.remove('locked');
			}
		}
	}

	function hoverLinks(element) {
		const menu = document.querySelector(`.header-submenu[data-link="${element.dataset.link}"]`);

		element.addEventListener('mouseover', () => {
			menu.classList.add('active');
		});
		menu.addEventListener('mouseover', () => {
			menu.classList.add('active');
		});
		element.addEventListener('mouseleave', () => {
			menu.classList.remove('active');
		});
		menu.addEventListener('mouseleave', () => {
			menu.classList.remove('active');
		});
	}
	function tapLinks(element) {
		const levelOne = element.parentElement;
		const levelTwo = document.querySelector(
			`ul[data-link-mobile="${element.getAttribute('data-link-mobile')}"]`
		);
		const btnBack = levelTwo.querySelector('li[data-backtoleveloneMobile]');
		element.addEventListener('click', () => {
			levelOne.classList.add('hidden');
			levelTwo.classList.add('active');
		});
		btnBack.addEventListener('click', () => {
			levelOne.classList.remove('hidden');
			levelTwo.classList.remove('active');
		});
	}
	function nextLevelClick() {
		const liElements = visasMenu.querySelectorAll('li[data-continent]');
		const ulElements = visasMenu.querySelectorAll('ul[data-continent]');
		const levelOneMenu = liElements[0].parentElement;
		const backToLevelOneBtn = visasMenu.querySelectorAll('[data-backtolevelone]');

		for (let i = 0; i < liElements.length; i++) {
			liElements[i].addEventListener('click', () => {
				levelOneMenu.classList.add('hidden');
				ulElements[i].classList.add('active');
			});

			backToLevelOneBtn[i].addEventListener('click', () => {
				levelOneMenu.classList.remove('hidden');
				ulElements[i].classList.remove('active');
			});
		}
	}
	function burgerToggle(e) {
		if (consultModal.classList.contains('active')) {
			consultModal.classList.remove('active');
			document.querySelector('body').classList.toggle('locked');
		} else {
			e.currentTarget.classList.toggle('active');
			burgerModal.classList.toggle('active');
			document.querySelector('body').classList.toggle('locked');
		}
	}
	function consultPopupHandle(state) {
		if (!consultModal) {
			return;
		}
		if (state) {
			consultModal.classList.add('active');
			document.querySelector('body').classList.add('locked');

			if (window.innerWidth < 1024) {
				burgerIcon.classList.add('active');
			}
		} else {
			consultModal.classList.remove('active');
			document.querySelector('body').classList.remove('locked');

			if (window.innerWidth < 1024) {
				burgerIcon.classList.remove('active');
			}
		}
	}

	function toggleConsult() {
		$modalOpen = !$modalOpen;
	}

	$: consultPopupHandle($modalOpen);

	onMount(() => {
		if (window.innerWidth > 1024) {
			hoverLinks(visasLink);
			hoverLinks(vnzhLink);
			hoverLinks(servicesLink);
			nextLevelClick();
		} else {
			tapLinks(visasMobileLink);
			tapLinks(vnzhMobileLink);
			tapLinks(servicesMobileLink);
		}
	});
</script>

<header>
	<div class="container">
		<div class="header">
			<div class="header-top hidden-tablet">
				<a href="#">все направления</a>
				<a href="#reviews">отзывы клиентов</a>
				<a href="/">
					<img src="/logo.svg" alt="logo" />
				</a>
				<p>Москва, ул. Лесная д.43, офис 221</p>
				<a href="/contacts">контакты</a>
			</div>
			<div class="header-bottom hidden-tablet">
				<ul class="header-bottom-main-menu">
					<li bind:this={visasLink} data-link="visas">
						<a href="#">Визы</a>
					</li>
					<li bind:this={vnzhLink} data-link="vnzh">
						<a href="#">Вид на жительство</a>
					</li>
					<li bind:this={servicesLink} data-link="services">
						<a href="#">Услуги</a>
					</li>
					<li>
						<a href="/about">О нас</a>
					</li>
					<li class="--filled">
						<a href="#" on:click={toggleConsult}>Консультация</a>
					</li>
					<li>
						<a href="tel:+79251171777">+7 925 117-1777</a>
					</li>
				</ul>
			</div>
			<div class="header-mobile visible-tablet">
				<a href="#">
					<img src="/logo.svg" alt="logo" />
				</a>
				<a href="tel:+79999999999">
					<img src="/phone.svg" alt="phone icon" />
				</a>
				<button class="burger-icon" on:click={burgerToggle} bind:this={burgerIcon}>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>
	</div>
	<div class="header-submenu" data-link="visas" bind:this={visasMenu}>
		<div class="container">
			<ul class="level-one">
				<li data-continent="europe"><p>Европа</p></li>
				<li data-continent="na"><p>Северная Америка</p></li>
				<li data-continent="asia"><p>Азия</p></li>
			</ul>
			<ul class="level-two" data-continent="europe">
				<li data-backtolevelone><p>Назад</p></li>
				<li>
					<a href="/visas/bolgaria">Болгария</a>
				</li>
				<li>
					<a href="/visas/uk">Великобритания</a>
				</li>
				<li>
					<a href="/visas/germany">Германия</a>
				</li>
				<li>
					<a href="/visas/greece">Греция</a>
				</li>
				<li>
					<a href="/visas/spain">Испания</a>
				</li>
				<li>
					<a href="/visas/italy">Италия</a>
				</li>
				<li>
					<a href="/visas/canada">Канада</a>
				</li>
				<li>
					<a href="/visas/cipr">Кипр</a>
				</li>
				<li>
					<a href="/visas/france">Франция</a>
				</li>
			</ul>
			<ul class="level-two" data-continent="na">
				<li data-backtolevelone><p>Назад</p></li>
				<li>
					<a href="/visas/usa">США</a>
				</li>
			</ul>
			<ul class="level-two" data-continent="asia">
				<li data-backtolevelone><p>Назад</p></li>
				<li>
					<a href="/visas/indonesia">Индонезия</a>
				</li>
				<li>
					<a href="/visas/india">Индия</a>
				</li>
				<li>
					<a href="/visas/china">Китай</a>
				</li>
				<li>
					<a href="/visas/singapur">Сингапур</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="header-submenu" data-link="vnzh">
		<div class="container">
			<ul class="level-one">
				<li>
					<a href="/vnzh/greece">ВНЖ и Гражданство Греции</a>
				</li>
				<li>
					<a href="/vnzh/spain">ВНЖ Испании</a>
				</li>
				<li>
					<a href="/vnzh/israel">Гражданство Израиля</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="header-submenu" data-link="services">
		<div class="container">
			<ul class="level-one">
				<li>
					<a href="/services/insurance">Страхование туристов</a>
				</li>
				<li>
					<a href="/services/delivery">Курьерская доставка</a>
				</li>
				<li>
					<a href="/services/pasport">Получение загранпаспорта</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="burger-modal visible-tablet" bind:this={burgerModal}>
		<ul class="level-one">
			<li>
				<a href="#">Все направления</a>
			</li>
			<li bind:this={visasMobileLink} data-link-mobile="visas">
				<a href="#">Визы</a>
			</li>
			<li bind:this={vnzhMobileLink} data-link-mobile="vnzh">
				<a href="#">Вид на жительство</a>
			</li>
			<li bind:this={servicesMobileLink} data-link-mobile="services">
				<a href="#">Услуги</a>
			</li>
			<li>
				<a href="/about">О нас</a>
			</li>
		</ul>
		<ul class="level-two" data-link-mobile="visas">
			<li data-backtoleveloneMobile>
				<p>Назад</p>
			</li>
			<li>
				<a href="/visas/bolgaria">Болгария</a>
			</li>
			<li>
				<a href="/visas/uk">Великобритания</a>
			</li>
			<li>
				<a href="/visas/germany">Германия</a>
			</li>
			<li>
				<a href="/visas/greece">Греция</a>
			</li>
			<li>
				<a href="/visas/spain">Испания</a>
			</li>
			<li>
				<a href="/visas/italy">Италия</a>
			</li>
			<li>
				<a href="/visas/canada">Канада</a>
			</li>
			<li>
				<a href="/visas/cipr">Кипр</a>
			</li>
			<li>
				<a href="/visas/france">Франция</a>
			</li>
			<li>
				<a href="/visas/indonesia">Индонезия</a>
			</li>
			<li>
				<a href="/visas/india">Индия</a>
			</li>
			<li>
				<a href="/visas/china">Китай</a>
			</li>
			<li>
				<a href="/visas/singapur">Сингапур</a>
			</li>
			<li>
				<a href="/visas/usa">США</a>
			</li>
		</ul>
		<ul class="level-two" data-link-mobile="vnzh">
			<li data-backtoleveloneMobile>
				<p>Назад</p>
			</li>
			<li>
				<a href="/vnzh/greece">ВНЖ и Гражданство Греции</a>
			</li>
			<li>
				<a href="/vnzh/spain">ВНЖ Испании</a>
			</li>
			<li>
				<a href="/vnzh/israel">Гражданство Израиля</a>
			</li>
		</ul>
		<ul class="level-two" data-link-mobile="services">
			<li data-backtoleveloneMobile>
				<p>Назад</p>
			</li>
			<li>
				<a href="/services/insurance">Страхование туристов</a>
			</li>
			<li>
				<a href="/services/delivery">Курьерская доставка</a>
			</li>
			<li>
				<a href="/services/pasport">Получение загранпаспорта</a>
			</li>
		</ul>
	</div>
	<div class="consult-modal" bind:this={consultModal}>
		<div class="container">
			<div class="consult-modal-body">
				<p class="--text-xl">Заявка на визовую консультацию</p>
				<p on:click={toggleConsult} class="close">закрыть</p>

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
		</div>
	</div>
</header>

<button class="btn-main" id="triggerConsult" on:click={toggleConsult}>Оформить визу</button>

<style lang="scss">
	header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		background-color: #fff;
	}
	.header {
		display: flex;
		flex-direction: column;

		@include mobile {
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			z-index: 1;
			padding: 0 20px;
			background-color: #fff;
		}

		&-top {
			display: flex;
			align-items: center;
			gap: 120px;
			padding: 18px 0;

			@include tablet {
				display: none;
			}

			a,
			p {
				text-transform: uppercase;

				@include fluid-text(13, 12);
			}

			a:has(img) {
				margin-inline: auto;

				img {
					max-height: 37px;
				}
			}
		}

		&-bottom {
			@include tablet {
				display: none;
			}

			&-main-menu {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
				li {
					text-align: center;
					border-top: 1px solid #d2d2d2;
					border-bottom: 1px solid #d2d2d2;
					border-right: 1px solid #d2d2d2;

					a,
					p {
						display: block;
						padding: 25px 0;
					}

					&:last-child {
						border-right: none;
					}

					&.--filled {
						background-color: #000;
						a {
							color: #fff;
						}
						border-color: #000;

						@include hover {
							background-color: #fff;
							border-color: #d2d2d2;
							a {
								color: #000;
							}
						}
					}
				}
			}
		}

		&-submenu {
			position: absolute;
			z-index: 2;
			width: 100%;
			background-color: #fff;
			top: 100%;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			opacity: 0;
			pointer-events: none;

			@include tablet {
				display: none;
			}

			&:global(.active) {
				opacity: 1;
				pointer-events: all;
			}

			li {
				border-bottom: #d2d2d2 1px solid;
				text-align: center;
				cursor: pointer;

				a,
				p {
					display: block;
					padding: 25px 0;
				}

				@include hover {
					background-color: #000;
					border-bottom: 1px solid transparent;

					a,
					p {
						color: #fff;
					}
				}
			}
			.level-one {
				&:global(.hidden) {
					display: none;
				}
			}
			.level-two {
				position: relative;
				background-color: #fff;
				top: 0;
				width: 100%;
				display: none;

				&:global(.active) {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
			}
		}

		&-mobile {
			display: flex;
			gap: 30px;
			align-items: center;
			padding: 10px 0;

			a:first-child {
				margin-right: auto;
			}
		}
	}

	.burger {
		&-icon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 7px;
			width: 40px;
			height: 30px;

			&:global(.active) {
				span {
					&:first-child {
						width: 75%;
					}
				}
			}

			span {
				width: 100%;
				background-color: #000;
				height: 1.5px;
			}
		}
		&-modal {
			position: absolute;
			z-index: 3;
			width: 100%;
			background-color: #fff;
			top: 100%;
			display: flex;
			height: calc(100dvh - 58px);
			flex-direction: column;
			overflow-y: scroll;
			transform: translateX(-110%);

			@include mobile {
				position: fixed;
				width: 100%;
				top: 58px;
				left: 0;
				z-index: 1;
				padding: 0 20px;
				background-color: #fff;
			}

			@include scrollbar;

			&:global(.active) {
				transform: translateX(0);
			}

			ul {
				display: flex;
				flex-direction: column;

				li {
					border-bottom: 1px solid #d2d2d2;
					a,
					p {
						padding: 20px;
						display: block;
					}

					@include hover {
						background-color: #000;

						a,
						p {
							color: #fff;
						}
					}
				}
			}

			.level-one {
				display: flex;

				&:global(.hidden) {
					display: none;
				}
			}
			.level-two {
				display: none;

				&:global(.active) {
					display: flex;
				}
			}
		}
	}

	.consult-modal {
		position: absolute;
		z-index: 2;
		width: 100%;
		background-color: #fff;
		top: 100%;
		opacity: 0;
		pointer-events: none;
		overflow-y: scroll;

		&:global(.active) {
			opacity: 1;
			pointer-events: all;
		}

		@include mobile {
			position: fixed;
			opacity: 1;
			pointer-events: all;
			width: 100%;
			top: 58px;
			left: 0;
			z-index: 2;
			background-color: #fff;
			transform: translateX(110%);

			&:global(.active) {
				transform: translateX(0%);
			}
		}

		&-body {
			display: flex;
			height: 100vh;
			flex-direction: column;
			padding-top: 60px;
			gap: 120px;

			.close {
				position: absolute;
				right: 0;
				top: 60px;
				cursor: pointer;

				@include mobile {
					display: none;
				}
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

					padding-bottom: 100px;
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
	}

	button#triggerConsult {
		display: none;

		@include mobile {
			width: calc(100% - 40px) !important;
			display: block;
			position: fixed;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1;
		}
	}
</style>
