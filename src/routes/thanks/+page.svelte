<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Спасибо за вашу заявку - Визовое агентство Москва</title>
	<meta name="description" content="Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время для уточнения всех деталей и дальнейшего оформления.">
	<meta name="og:title" content="Спасибо за вашу заявку - Визовое агентство Москва">
	<meta name="og:description" content="Мы получили вашу заявку и свяжемся с вами в ближайшее время для дальнейшего оформления. Благодарим за обращение в наше визовое агентство.">
	<meta name="og:url" content="{$page.url.href}">
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<section>
    <div class="container">
        <div class="thanks">
            <p>Спасибо за обращение! <br> Оператор свяжется с вами в ближайшее время</p>
            <a href="/" class="btn-main">Вернуться на главную страницу</a>
        </div>
    </div>
</section>

<style lang="scss">
    .thanks{
        min-height: 50vh;
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        justify-content: center;

        p{
            @include fluid-text(20,20);
            text-align: center;
        }
    }
</style>