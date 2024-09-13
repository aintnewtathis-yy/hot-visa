<script>
    import { page } from '$app/stores';
</script>

<section>
    <div class="container">
        <div class="error-page">
            <h1>{$page.status}: {$page.error.message}</h1>
        </div>
    </div>
</section>


<style lang="scss">
    .error-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 70vh;

        h1{
            font-size: 22px;
        }
    }
</style>